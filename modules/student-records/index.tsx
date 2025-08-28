import React, { useState } from "react";
import Left_Side_Bar from "../../COMP/Left-side-bar/leftSideBar";
import Page_Title from "../overview/components/page-title";
import Custom_Search from "@/COMP/custom-search";
import Custom_Select from "@/COMP/custom-select";
import Custom_Table from "@/COMP/custom-table";

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
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [branchFilter, setBranchFilter] = useState<string>("All");
  const [batchFilter, setBatchFilter] = useState<string>("All");

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
        <Page_Title Title={Title} />
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <Custom_Select
            data={batches}
            filter={batchFilter}
            setFunction={setBatchFilter}
          />
          <Custom_Search
            placeHolder="Search by name or enrollment number..."
            setFunction={setSearchTerm}
            searchTerm={searchTerm}
          />

          <Custom_Select
            data={branches}
            filter={branchFilter}
            setFunction={setBranchFilter}
          />
        </div>

        <Custom_Table
          type="student"
          data={filteredStudents}
          headers={headers}
        />
      </div>
    </Left_Side_Bar>
  );
};

export default Student_Records_Page;
