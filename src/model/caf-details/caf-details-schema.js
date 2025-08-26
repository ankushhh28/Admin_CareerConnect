const mongoose = require("mongoose");

const cafDetailsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    enrollmentNumber: { type: String, required: true, unique: true },
    gender: { type: String },
    branch: { type: String },
    emailIdPersonal: { type: String, unique: true },
    emailIdAcropolis: { type: String, unique: true },
    tenthPercent: { type: Number },
    tenthPassingYear: { type: Number },
    tenthBoardName: { type: String },
    diplomaOrTwelth: { type: String },
    twelthPercent: { type: Number },
    twelthPassingYear: { type: Number },
    twelthBoardName: { type: String },
    diplomaPercent: { type: Number },
    diplomaPassingYear: { type: Number },
    diplomaUniversity: { type: String },
    ugCourse: { type: String },
    ugPercent: { type: Number },
    ugPassingYear: { type: Number },
    firstSemCgpa: { type: Number },
    secondSemCgpa: { type: Number },
    thirdSemCgpa: { type: Number },
    fourthSemCgpa: { type: Number },
    fifthSemCgpa: { type: Number },
    sixthSemCgpa: { type: Number },
    seventhSemCgpa: { type: Number },
    eightSemCgpa: { type: Number },
    updatedCgpa: { type: Number },
    yearGap: { type: Number },
    careerInterest: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", cafDetailsSchema);
