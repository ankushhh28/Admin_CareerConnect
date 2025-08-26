const loginService = require("./login.service");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const data = await loginService.login({
      email,
      password,
    });

    res.cookie("accessToken", data.accessToken, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      sameSite: "lax",
    });

    res.cookie("refreshToken", data.refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "lax",
    });

    res.cookie("role", data.User.role, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "lax",
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: data.User,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { login };
