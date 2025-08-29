import React from "react";

export interface Company {
  Sno: number;
  name: string;
  Location: string;
  domain: string;
}

const Company_Strip = ({ data, index }: { data: Company; index: number }) => {
  const handleViewDetails = (company: Company) => {
    alert(
      `Company Details:\n\nName: ${company.name}\nLocation: ${company.Location}\nDomain: ${company.domain}`
    );
  };

  return (
    <div
      key={data.Sno}
      className="grid grid-cols-5 gap-4 px-4 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition border"
    >
      <div>{index + 1}</div>
      <div className="font-medium">{data.name}</div>
      <div>{data.Location}</div>
      <div>{data.domain}</div>
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

export default Company_Strip;
