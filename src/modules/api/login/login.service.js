const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const errorDecorator = require('../../../utils/throw-error/errorDecorator');
const userSchema = require('../../../model/users/userSchema');

const login = async ({ email, password }) => {
  const user = await userSchema.findOne({ email });
  if (!user) {
    return errorDecorator(404, 'USER_NOT_FOUND');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return errorDecorator(401, 'INVALID_PASSWORD');
  }

  const accessToken = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );

  const refreshToken = jwt.sign(
    { id: user._id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );

  const User = {
    id: user._id,
    name: user.name,
    role: user.role,
  };

  return {
    User,
    accessToken,
    refreshToken,
  };
};

module.exports = { login };
