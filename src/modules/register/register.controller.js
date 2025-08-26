const service = require('./register.service');

const register = async (req, res, next) => {
  try {
    const { name, email, department = '', password, role = '' } = req.body;

    const data = await service.register({
      name,
      email,
      department,
      password,
      role,
    });

    res.status(201).json({
      success: true,
      message: 'Registered successfully',
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { register };
