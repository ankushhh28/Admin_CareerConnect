import React from "react";

export interface stripTypes {
  id: number;
  name: string;
  enrollmentNumber: string;
  branch: string;
  batch: string;
}

const Table_Strip = ({ data, index }: { data: stripTypes; index: number }) => {
  const handleViewDetails = (student: stripTypes) => {
    alert(
      `Student Details:\n\nName: ${student.name}\nEnroll: ${student.enrollmentNumber}\nBranch: ${student.branch}\nBatch: ${student.batch}`
    );
  };

  return (
    <div
      key={data.id}
      className="grid grid-cols-5 gap-4 px-4 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition border"
    >
      <div>{index + 1}</div>
      <div className="font-medium">{data.name}</div>
      <div>{data.enrollmentNumber}</div>
      <div>{data.branch}</div>
      <div>
        <button
          onClick={() => handleViewDetails(data)}
          className="px-3 py-1 text-sm text-white bg-[#111827] rounded-md hover:bg-[#1f2937] transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Table_Strip;
