import { Search } from "lucide-react";
import React from "react";

interface searchType {
  title?: string;
  searchTerm: string;
  setFunction: (value: string) => void;
  placeHolder: string;
}

const Custom_Search = ({
  title,
  searchTerm,
  setFunction,
  placeHolder,
}: searchType) => {
  return (
    <div className="flex items-center gap-3 w-full">
      {title && <h2 className="mb-1 text-lg">{title}</h2>}
      <div className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm w-full focus-within:ring-2 focus-within:ring-[#111827]">
        <Search className="h-5 w-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder={placeHolder}
          value={searchTerm}
          onChange={(e) => setFunction(e.target.value)}
          className="w-full outline-none"
        />
      </div>
    </div>
  );
};

export default Custom_Search;
