import { Link } from "lucide-react";
import React, { useState, useEffect } from "react";

const OverviewPage = () => {
  const [batch, setBatch] = useState("");

  const CountUp = ({ end, duration }: { end: number; duration: number }) => {
  const [count, setCount] = useState(0);




  useEffect(() => {
    let start = 0;
    const incrementTime = Math.floor((duration * 1000) / end); 
    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <span>{count}</span>;

};

  const departments = [
  { name: "CSE", faculty: ["Prof. Kapil Sahu"] },
  { name: "IT", faculty: ["Prof. Kapil Sahu"]},
  { name: "CSIT", faculty: ["Prof. Kapil Sahu"] },
  { name: "DS", faculty: ["Prof. Kapil Sahu" ]},
  { name: "CYBER", faculty: ["Prof. Kapil Sahu"] },
  { name: "AIML", faculty: ["Prof. Kapil Sahu"] },
  { name: "FCA", faculty: ["Prof. Kapil Sahu"] },
  { name: "MBA", faculty: ["Prof. Kapil Sahu"] },
  { name: "MCA", faculty: ["Prof. Kapil Sahu"] },
  { name: "ME", faculty: ["Prof. Kapil Sahu"] },
  { name: "Civil", faculty: ["Prof. Kapil Sahu"] },

];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl">
       

     <div className="mb-6 flex justify-end items-center gap-3">
  <label className="text-md font-medium">Batch</label>
  <select
    value={batch}
    onChange={(e) => setBatch(e.target.value)}
    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="">Select Batch</option>
    <option value="2022">2021-2025</option>
    <option value="2022">2022-2026</option>
    <option value="2023">2023-2027</option>
    <option value="2024">2024-2028</option>
    <option value="2025">2025-2029</option>
  </select>
</div>



<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
  <div className="bg-gray-50 border rounded-lg h-32 flex flex-col justify-center items-center shadow-sm">
    <a href="dashboard/student-records">
      <button>
        <h3 className="text-lg font-bold">Total Students</h3>
        <p className="text-2xl font-bold text-blue-600">
          <CountUp end={1200} duration={1} /> 
        </p>
      </button>
    </a>
  </div>

  <div className="bg-gray-50 border rounded-lg h-32 flex flex-col justify-center items-center shadow-sm">
    <h3 className="text-lg font-bold">Placed Students</h3>
    <p className="text-2xl font-bold text-green-600">
      <CountUp end={445} duration={1} />
    </p>
  </div>

  <div className="bg-gray-50 border rounded-lg h-32 flex flex-col justify-center items-center shadow-sm">
    <h3 className="text-lg font-bold">Campus Drives</h3>
    <p className="text-2xl font-bold text-purple-600">
      <CountUp end={25} duration={1} />
    </p>
  </div>
</div>


        

    <h3 className="text-2xl text-center font-bold mb-10 underline">
          Departments
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="bg-neutral-300  border border-gray-300 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <a href="dashboard/student-records">
              <button>

              <p className="text-lg font-semibold mb-4">{dept.name}</p>

              
              <div className="mt-auto">
                {dept.faculty.map((f, i) => (
                  <p key={i} className="text-sm text-gray-700">
                    {f}
                  </p>
                ))}
              </div>
                </button>
                </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;