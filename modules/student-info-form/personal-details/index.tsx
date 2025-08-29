import React from "react";
import { PersonalDetailsType } from "../types/form";
import { Input } from "../common/input";
import { Select } from "../common/select";

interface PersonalDetailsProps {
  formData: PersonalDetailsType;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export const PersonalDetails: React.FC<PersonalDetailsProps> = ({
  formData,
  setFormData,
}) => {
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      personalDetails: {
        ...prev.personalDetails,
        [field]: value,
      },
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Personal Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          value={formData.name}
          onChange={(e) => handleInputChange("fullName", e.target.value)}
          required
        />

        <Input
          label="Enrollment No."
          value={formData.enrollmentNumber}
          onChange={(e) => handleInputChange("enrollmentNo", e.target.value)}
          required
        />

        <Select
          label="Gender"
          value={formData.gender}
          onChange={(e) => handleInputChange("gender", e.target.value)}
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "other", label: "Other" },
          ]}
          required
        />

        <Input
          label="Branch"
          value={formData.branch}
          onChange={(e) => handleInputChange("branch", e.target.value)}
          required
        />

        <Input
          label="Email ID (Personal)"
          type="email"
          value={formData.emailIdPersonal}
          onChange={(e) => handleInputChange("personalEmail", e.target.value)}
          required
        />

        <Input
          label="Email ID (Acropolis)"
          type="email"
          value={formData.emailIdAcropolis}
          onChange={(e) => handleInputChange("acropolisEmail", e.target.value)}
          required
        />
      </div>
    </div>
  );
};
