export interface PersonalDetailsType {
  name: string;
  enrollmentNumber: string;
  gender: string;
  branch: string;
  emailIdPersonal: string;
  emailIdAcropolis: string;
}
export interface FormDataTypes {
  name: string;
  enrollmentNumber: string;
  gender: string;
  branch: string;
  emailIdPersonal: string;
  emailIdAcropolis: string;

  tenthPercent: number;
  tenthPassingYear: number;
  tenthBoardName: string;
  diplomaOrTwelth: string;
  twelthPercent: number;
  twelthPassingYear: number;
  twelthBoardName: string;
  diplomaPercent: number;
  diplomaPassingYear: number;
  diplomaUniversity: string;
  ugCourse: string;
  ugPercent: number;
  ugPassingYear: number;
  firstSemSGPA: number;
  secondSemSGPA: number;
  thirdSemSGPA: number;
  fourthSemSGPA: number;
  fifthSemSGPA: number;
  sixthSemSGPA: number;
  seventhSemSGPA: number;
  eighthSemSGPA: number;
  currentCGPA: number;
  yearGap: string;
  careerInterest: string;
}

export interface AcademicDetailsType {
  tenth: {
    percentage: string;
    yearOfPassing: string;
    boardName: string;
  };
  educationType: string;
  twelfth: {
    percentage: string;
    yearOfPassing: string;
    boardName: string;
  };
  diploma: {
    percentage: string;
    yearOfPassing: string;
    university: string;
  };
}

export interface GraduationDetailsType {
  ugCourse: string;
  ugPercent: string;
  ugPassingYear: string;
  firstSemSGPA: string;
  secondSemSGPA: string;
  thirdSemSGPA: string;
  fourthSemSGPA: string;
  fifthSemSGPA: string;
  sixthSemSGPA: string;
  seventhSemSGPA: string;
  eighthSemSGPA: string;
  currentCGPA: string;
}

export interface AdditionalInfoType {
  yearGap: string;
  careerInterest: string;
}

export interface FormDataType {
  personalDetails: PersonalDetailsType;
  academicDetails: AcademicDetailsType;
  graduationDetails: GraduationDetailsType;
  additionalInfo: AdditionalInfoType;
}
