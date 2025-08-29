import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProgressBar } from "./common/progressbar";
import { PersonalDetails } from "./personal-details";
import { AcademicDetails } from "./academic-details";
import { GraduationDetails } from "./graduation-details";
import { AdditionalInfo } from "./additional-info";
import { FormDataType } from "./types/form";

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState<FormDataType>({
    personalDetails: {
      name: "",
      enrollmentNumber: "",
      gender: "",
      branch: "",
      emailIdPersonal: "",
      emailIdAcropolis: "",
    },
    academicDetails: {
      tenth: {
        percentage: "",
        yearOfPassing: "",
        boardName: "",
      },
      educationType: "",
      twelfth: {
        percentage: "",
        yearOfPassing: "",
        boardName: "",
      },
      diploma: {
        percentage: "",
        yearOfPassing: "",
        university: "",
      },
    },
    graduationDetails: {
      ugCourse: "",
      ugPercent: "",
      ugPassingYear: "",
      firstSemSGPA: "",
      secondSemSGPA: "",
      thirdSemSGPA: "",
      fourthSemSGPA: "",
      fifthSemSGPA: "",
      sixthSemSGPA: "",
      seventhSemSGPA: "",
      eighthSemSGPA: "",
      currentCGPA: "",
    },
    additionalInfo: {
      yearGap: "",
      careerInterest: "",
    },
  });

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalDetails formData={formData.personalDetails} setFormData={setFormData} />
        );
      case 2:
        return (
          <AcademicDetails formData={formData.academicDetails} setFormData={setFormData} />
        );
      case 3:
        return (
          <GraduationDetails formData={formData.graduationDetails} setFormData={setFormData} />
        );
      case 4:
        return <AdditionalInfo formData={formData.additionalInfo} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Progress Bar */}
          <ProgressBar
            currentStep={currentStep}
            totalSteps={totalSteps}
            onStepClick={handleStepClick}
          />

          {/* Form Content */}
          <div className="min-h-[500px]">{renderCurrentStep()}</div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              <ChevronLeft size={20} className="mr-2" />
              Previous
            </button>

            <span className="text-sm text-gray-500">
              Step {currentStep} of {totalSteps}
            </span>

            {currentStep < totalSteps ? (
              <button
                onClick={handleNext}
                className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-all"
              >
                Next
                <ChevronRight size={20} className="ml-2" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-all"
              >
                Submit Form
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
