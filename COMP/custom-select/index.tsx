import React from "react";

interface selectType {
  data: string[];
  filter: string;
  setFunction: (value: string) => void;
  title?: string;
}

const Custom_Select = ({ data, filter, setFunction, title }: selectType) => {
  return (
    <div className="w-full flex items-center gap-3">
      {title && <h2 className="mb-1 text-lg">{title}</h2>}
      <select
        value={filter}
        onChange={(e) => setFunction(e.target.value)}
        className="w-full border rounded-lg px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-[#111827] cursor-pointer"
      >
        {data?.map((batch: any) => (
          <option key={batch} value={batch}>
            {batch}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Custom_Select;
