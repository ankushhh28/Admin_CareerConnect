// additional-info/index.tsx
import React from "react";
import { AdditionalInfoType } from "../types/form";
import { Textarea } from "../common/textarea";

interface AdditionalInfoProps {
  formData: AdditionalInfoType;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export const AdditionalInfo: React.FC<AdditionalInfoProps> = ({
  formData,
  setFormData,
}) => {
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      additionalInfo: {
        ...prev.additionalInfo,
        [field]: value,
      },
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Additional Information
      </h2>

      <div className="space-y-6">
        <Textarea
          label="Any Year Gap During Education"
          value={formData.yearGap}
          onChange={(e) => handleInputChange("yearGap", e.target.value)}
          placeholder="Mention the year and reason for gap, if any..."
          rows={3}
        />

        <Textarea
          label="Career Interest"
          value={formData.careerInterest}
          onChange={(e) => handleInputChange("careerInterest", e.target.value)}
          placeholder="Describe your career interests and goals..."
          rows={4}
        />
      </div>
    </div>
  );
};
