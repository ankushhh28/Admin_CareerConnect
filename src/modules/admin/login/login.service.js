const { models } = require('../../../model/index');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');

const login = async ({ email, password }) => {
  const { userSchema } = models;

  const user = await userSchema.findOne({ email });
  if (!user) {
    returnboom.unauthorized('Invalid email or password');
  }

  if (!user.password === password) {
    throw boom.unauthorized('Invalid email or password');
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

  return {
    id: user.id,
    role: user.role || 'admin',
    accessToken,
    refreshToken,
  };
};

module.exports = { login };
