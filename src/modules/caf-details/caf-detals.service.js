const cafDetailsSchema = require("../../model/caf-details/caf-details-schema");
const errorDecorator = require("../../utils/throw-error/errorDecorator");

const addCafDetails = async (cafData, enrollmentNumber) => {
  const userExist = await cafDetailsSchema.findOne({ enrollmentNumber });
  if (userExist) {
    return errorDecorator(400, "ENROLLMENT_EXIST");
  }
  const studentCafDetails = new cafDetailsSchema(cafData);
  const savedCaf = await studentCafDetails.save();
  return savedCaf;
};

module.exports = {
  addCafDetails,
};
