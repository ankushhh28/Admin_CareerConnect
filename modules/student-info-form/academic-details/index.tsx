import React from "react";
import { Input } from "../common/input";
import { Select } from "../common/select";
import { AcademicDetailsType } from "../types/form";

interface AcademicDetailsProps {
  formData: AcademicDetailsType;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export const AcademicDetails: React.FC<AcademicDetailsProps> = ({
  formData,
  setFormData,
}) => {
  const handleInputChange = (field: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      academicDetails: {
        ...prev.academicDetails,
        [field]: value,
      },
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        School / Pre-UG Education
      </h2>

      <div className="space-y-6">
        {/* 10th Details */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            10th Standard
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              label="10th Percentage"
              type="number"
              value={formData.tenth.percentage}
              onChange={(e) =>
                handleInputChange("tenth", {
                  ...formData.tenth,
                  percentage: e.target.value,
                })
              }
              required
            />
            <Input
              label="Year of Passing"
              type="number"
              value={formData.tenth.yearOfPassing}
              onChange={(e) =>
                handleInputChange("tenth", {
                  ...formData.tenth,
                  yearOfPassing: e.target.value,
                })
              }
              required
            />
            <Input
              label="Board Name"
              value={formData.tenth.boardName}
              onChange={(e) =>
                handleInputChange("tenth", {
                  ...formData.tenth,
                  boardName: e.target.value,
                })
              }
              required
            />
          </div>
        </div>

        {/* Education Type Toggle */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <Select
            label="After 10th Education"
            value={formData.educationType}
            onChange={(e) => handleInputChange("educationType", e.target.value)}
            options={[
              { value: "12th", label: "12th Standard" },
              { value: "diploma", label: "Diploma" },
            ]}
            required
          />
        </div>

        {/* 12th or Diploma Details */}
        {formData.educationType === "12th" && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              12th Standard
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="12th Percentage"
                type="number"
                value={formData.twelfth.percentage}
                onChange={(e) =>
                  handleInputChange("twelfth", {
                    ...formData.twelfth,
                    percentage: e.target.value,
                  })
                }
                required
              />
              <Input
                label="Year of Passing"
                type="number"
                value={formData.twelfth.yearOfPassing}
                onChange={(e) =>
                  handleInputChange("twelfth", {
                    ...formData.twelfth,
                    yearOfPassing: e.target.value,
                  })
                }
                required
              />
              <Input
                label="Board Name"
                value={formData.twelfth.boardName}
                onChange={(e) =>
                  handleInputChange("twelfth", {
                    ...formData.twelfth,
                    boardName: e.target.value,
                  })
                }
                required
              />
            </div>
          </div>
        )}

        {formData.educationType === "diploma" && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Diploma
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="Diploma Percentage"
                type="number"
                value={formData.diploma.percentage}
                onChange={(e) =>
                  handleInputChange("diploma", {
                    ...formData.diploma,
                    percentage: e.target.value,
                  })
                }
                required
              />
              <Input
                label="Year of Passing"
                type="number"
                value={formData.diploma.yearOfPassing}
                onChange={(e) =>
                  handleInputChange("diploma", {
                    ...formData.diploma,
                    yearOfPassing: e.target.value,
                  })
                }
                required
              />
              <Input
                label="University"
                value={formData.diploma.university}
                onChange={(e) =>
                  handleInputChange("diploma", {
                    ...formData.diploma,
                    university: e.target.value,
                  })
                }
                required
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
