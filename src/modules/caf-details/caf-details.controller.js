const cafService = require("./caf-detals.service");

const addCafDetails = async (req, res, next) => {
  try {
    const cafData = req.body;
    const { enrollmentNumber } = cafData;

    const studentCafDetails = await cafService.addCafDetails(
      cafData,
      enrollmentNumber
    );

    return res.status(201).json({
      success: true,
      message: "CAF submitted successfully",
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { addCafDetails };
