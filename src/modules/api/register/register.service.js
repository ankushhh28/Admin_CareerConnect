const errorDecorator = require('../../../utils/throw-error/errorDecorator.js');
const User = require('../../../model/users/userSchema.js');
const bcrypt = require('bcryptjs');

const register = async ({
  name,
  email,
  department = '',
  password,
  role = '',
}) => {
  const user = await User.findOne({ email });
  if (user) {
    throw errorDecorator(400, 'EMAIL_ALREADY_EXISTS');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name,
    email,
    department: department || 'CDC',
    password: hashedPassword,
    role: role || 'faculty',
  });

  return {
    name: newUser.name,
  };
};

module.exports = { register };
