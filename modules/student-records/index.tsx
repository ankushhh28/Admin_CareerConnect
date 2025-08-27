import React, { useState } from "react";
import { Search } from "lucide-react";
import Left_Side_Bar from "../../COMP/Left-side-bar/leftSideBar";
import Table_Strip from "@/COMP/Table-Strip";
import { StaticData } from "@/common/types";

export interface Student {
  id: number;
  name: string;
  enrollmentNumber: string;
  branch: string;
  batch: string;
}

const initialStudents: Student[] = [
  {
    id: 1,
    name: "Anish",
    enrollmentNumber: "12345",
    branch: "IT-A",
    batch: "2022",
  },
  {
    id: 2,
    name: "Khushi",
    enrollmentNumber: "12346",
    branch: "CSE-B",
    batch: "2023",
  },
  {
    id: 3,
    name: "Ravi",
    enrollmentNumber: "12347",
    branch: "MECH-A",
    batch: "2022",
  },
];

const Student_Records_Page = ({
  Title,
  MetaData,
}: {
  Title: string;
  MetaData: any;
}) => {
  const [students] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [branchFilter, setBranchFilter] = useState("All");
  const [batchFilter, setBatchFilter] = useState("All");

  const { headers, branches, batches } = MetaData;

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.enrollmentNumber.includes(searchTerm);

    const matchesBranch =
      branchFilter === "All" || student.branch === branchFilter;

    const matchesBatch = batchFilter === "All" || student.batch === batchFilter;

    return matchesSearch && matchesBranch && matchesBatch;
  });

  return (
    <Left_Side_Bar>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6 text-[#111827]">{Title}</h1>

        {/* Filters Row */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          {/* Batch Filter */}
          <div className="w-full sm:w-1/4">
            <select
              value={batchFilter}
              onChange={(e) => setBatchFilter(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-[#111827] cursor-pointer"
            >
              {batches?.map((batch: any) => (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              ))}
            </select>
          </div>

          {/* Search */}
          <div className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm w-full sm:w-2/4 focus-within:ring-2 focus-within:ring-[#111827]">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search by name or enrollment number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none"
            />
          </div>

          {/* Branch Filter */}
          <div className="w-full sm:w-1/4">
            <select
              value={branchFilter}
              onChange={(e) => setBranchFilter(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-[#111827] cursor-pointer"
            >
              {branches?.map((branch: any) => (
                <option value={branch} key={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Card-Style Table */}
        <div className="space-y-0 overflow-x-auto">
          <div className="grid grid-cols-6 gap-1 px-4 py-3 bg-[#111827] text-white rounded-lg font-semibold ">
            {headers?.map((heading: any) => (
              <div key={heading}>{heading}</div>
            ))}
          </div>

          {filteredStudents.map((student, index) => (
            <Table_Strip key={index} data={student} index={index} />
          ))}

          {filteredStudents.length === 0 && (
            <div className="text-center py-4 text-gray-500 bg-white rounded-lg shadow">
              No students found
            </div>
          )}
        </div>
      </div>
    </Left_Side_Bar>
  );
};

export default Student_Records_Page;
