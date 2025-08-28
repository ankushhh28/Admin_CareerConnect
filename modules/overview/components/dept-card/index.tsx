import Link from "next/link";
import React from "react";

interface departmentType {
  name: string;
  faculty: string;
}

const Dept_Card = ({ dept }: { dept: departmentType }) => {
  return (
    <Link
      key={dept.name}
      href={"/overview"}
      className="bg-neutral-300 border border-gray-300 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition flex flex-col justify-between"
    >
      <p className="text-lg font-semibold mb-4">{dept.name}</p>
      <div className="mt-auto space-y-1">
        <p>{dept.faculty}</p>
      </div>
    </Link>
  );
};

export default Dept_Card;
