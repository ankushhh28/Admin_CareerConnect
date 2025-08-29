import React from "react";
import { Input } from "../common/input";
import { GraduationDetailsType } from "../types/form";

interface GraduationDetailsProps {
  formData: GraduationDetailsType;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export const GraduationDetails: React.FC<GraduationDetailsProps> = ({
  formData,
  setFormData,
}) => {
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      graduationDetails: {
        ...prev.graduationDetails,
        [field]: value,
      },
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        UG / Higher Education
      </h2>

      <div className="space-y-6">
        {/* UG Details for MCA/M.Tech */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Previous UG Education (For MCA/M.Tech)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              label="UG Course"
              value={formData.ugCourse}
              onChange={(e) => handleInputChange("ugCourse", e.target.value)}
              placeholder="e.g., B.Tech, B.Sc"
            />
            <Input
              label="UG Percentage"
              type="number"
              value={formData.ugPercentage}
              onChange={(e) =>
                handleInputChange("ugPercentage", e.target.value)
              }
            />
            <Input
              label="Year of Passing"
              type="number"
              value={formData.ugYearOfPassing}
              onChange={(e) =>
                handleInputChange("ugYearOfPassing", e.target.value)
              }
            />
          </div>
        </div>

        {/* Current Semester SGPA */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Semester SGPA
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Input
              label="1st Sem SGPA"
              type="number"
              step="0.01"
              value={formData.firstSemSGPA}
              onChange={(e) =>
                handleInputChange("firstSemSGPA", e.target.value)
              }
            />
            <Input
              label="2nd Sem SGPA"
              type="number"
              step="0.01"
              value={formData.secondSemSGPA}
              onChange={(e) =>
                handleInputChange("secondSemSGPA", e.target.value)
              }
            />
            <Input
              label="3rd Sem SGPA"
              type="number"
              step="0.01"
              value={formData.thirdSemSGPA}
              onChange={(e) =>
                handleInputChange("thirdSemSGPA", e.target.value)
              }
            />
            <Input
              label="4th Sem SGPA"
              type="number"
              step="0.01"
              value={formData.fourthSemSGPA}
              onChange={(e) =>
                handleInputChange("fourthSemSGPA", e.target.value)
              }
            />
            <Input
              label="5th Sem SGPA"
              type="number"
              step="0.01"
              value={formData.fifthSemSGPA}
              onChange={(e) =>
                handleInputChange("fifthSemSGPA", e.target.value)
              }
            />
            <Input
              label="Current CGPA"
              type="number"
              step="0.01"
              value={formData.currentCGPA}
              onChange={(e) => handleInputChange("currentCGPA", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
