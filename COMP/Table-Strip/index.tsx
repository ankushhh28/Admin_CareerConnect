import React from "react";

interface Student {
  id: number;
  name: string;
  enrollmentNumber: string;
  branch: string;
  batch: string;
}

const Table_Strip = ({
  student,
  index,
}: {
  student: Student;
  index: number;
}) => {
  const handleViewDetails = (student: Student) => {
    alert(
      `Student Details:\n\nName: ${student.name}\nEnroll: ${student.enrollmentNumber}\nBranch: ${student.branch}\nBatch: ${student.batch}`
    );
  };
  return (
    <div
      key={student.id}
      className="grid grid-cols-6 gap-4 px-4 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition border"
    >
      <div>{index + 1}</div>
      <div className="font-medium">{student.name}</div>
      <div>{student.enrollmentNumber}</div>
      <div>{student.branch}</div>

      <div>
        <button
          onClick={() => handleViewDetails(student)}
          className="px-3 py-1 text-sm text-white bg-[#111827] rounded-md hover:bg-[#1f2937] transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Table_Strip;
