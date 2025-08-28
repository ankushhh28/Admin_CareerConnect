import React from "react";
import Table_Strip from "../../modules/student-records/Table-Strip";
import { Student } from "@/modules/student-records";
import Company_Strip from "@/modules/campus/campany-strip";

interface tableType {
  headers: string[];
  data: any;
  type: string;
}

const Custom_Table = ({ headers, data, type }: tableType) => {
  return (
    <div className="space-y-0 overflow-x-auto">
      <div className="grid grid-cols-5 gap-4 px-4 py-3 bg-black text-white rounded-lg shadow-md hover:shadow-lg transition border">
        {headers?.map((heading: any) => (
          <div key={heading}>{heading}</div>
        ))}
      </div>

      {type == "student" &&
        data.map((student: Student, index: number) => (
          <Table_Strip key={index} data={student} index={index} />
        ))}

      {type == "faculty" &&
        data.map((company: any, i: any) => (
          <Company_Strip key={company.Sno} data={company} index={i} />
        ))}

      {data.length === 0 && (
        <div className="text-center py-4 text-gray-500 bg-white rounded-lg shadow">
          No students found
        </div>
      )}
    </div>
  );
};

export default Custom_Table;
