

import React, { useState } from "react";
import { Search } from "lucide-react";
import Left_Side_Bar from "../../COMP/Left-side-bar/leftSideBar";

interface Student {
  id: number;
  name: string;
  enroll: string;
  branch: string;
  batch: string;
}

const initialStudents: Student[] = [
  { id: 1, name: "Anish", enroll: "12345", branch: "IT-A", batch: "2022" },
  { id: 2, name: "Khushi", enroll: "12346", branch: "CSE-B", batch: "2023" },
  { id: 3, name: "Ravi", enroll: "12347", branch: "MECH-A", batch: "2022" },
];

const Student_Records_Page = () => {
  const [students] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [branchFilter, setBranchFilter] = useState("All");
  const [batchFilter, setBatchFilter] = useState("All");

  const handleViewDetails = (student: Student) => {
    alert(
      `Student Details:\n\nName: ${student.name}\nEnroll: ${student.enroll}\nBranch: ${student.branch}\nBatch: ${student.batch}`
    );
  };

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.enroll.includes(searchTerm);

    const matchesBranch =
      branchFilter === "All" || student.branch === branchFilter;

    const matchesBatch = batchFilter === "All" || student.batch === batchFilter;

    return matchesSearch && matchesBranch && matchesBatch;
  });

  return (
    <Left_Side_Bar>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6 text-[#111827]">
           Student Records
        </h1>

        {/* Filters Row */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          {/* Batch Filter */}
          <div className="w-full sm:w-1/4">
            <select
              value={batchFilter}
              onChange={(e) => setBatchFilter(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-[#111827] cursor-pointer"
            >
              <option value="All">All Batches</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>

          {/* Search */}
          <div className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm w-full sm:w-2/4 focus-within:ring-2 focus-within:ring-[#111827]">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search by name or enroll..."
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
              <option value="All">All Branches</option>
              <option value="IT-A">IT-A</option>
              <option value="CSE-B">CSE-B</option>
              <option value="MECH-A">MECH-A</option>
            </select>
          </div>
        </div>

        {/* Card-Style Table */}
        <div className="space-y-0 overflow-x-auto">
          {/* Header */}
          <div className="grid grid-cols-6 gap-1 px-4 py-3 bg-[#111827] text-white rounded-lg font-semibold ">
            <div>S.No</div>
            <div>Name</div>
            <div>Enroll</div>
            <div>Branch</div>
            
            <div>Action</div>
          </div>

          {/* Rows */}
          {filteredStudents.map((student, index) => (
            <div
              key={student.id}
              className="grid grid-cols-6 gap-4 px-4 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer border"
            >
              <div>{index + 1}</div>
              <div className="font-medium">{student.name}</div>
              <div>{student.enroll}</div>
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
