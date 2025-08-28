import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export interface Company {
  Sno: number;
  name: string;
  Location: string;
  domain: string;
}

const Index = () => {
    const [batch, setBatch] = useState("");
   const [nameFilter, setNameFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [filterDomain, setFilterDomain] = useState("");

  const companyDetail: Company[] = [
    { Sno: 1, name: "TCS", Location: "Indore", domain: "Web Development" },
    { Sno: 2, name: "Infosys", Location: "Indore", domain: "Web Development" },
    { Sno: 3, name: "Google", Location: "Indore", domain: "AI-ML" },
    { Sno: 4, name: "Flipkart", Location: "Indore", domain: "AI-ML" },
    { Sno: 5, name: "TCS", Location: "Banglore", domain: "Java" },
    { Sno: 6, name: "Infosys", Location: "Jaipur", domain: "App-Developement" },
    { Sno: 7, name: "Google", Location: "Jaipur", domain: "AI-ML" },
    { Sno: 8, name: "Flipkart", Location: "Delhi", domain: "AI-ML" },
  ];

  const filterCompany = companyDetail.filter((company) =>
    
      company.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      company.Location.toLowerCase().includes(locationFilter.toLowerCase()) &&
      company.domain.toLowerCase().includes(filterDomain.toLowerCase())
  );
  return (
    <div>
       
   <div className="mb-6 flex justify-end items-center gap-3 mt-10 mr-10">
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

<div className="flex flex-col md:flex-row md:justify-between gap-6 mb-6 ml-10 mr-10 ">
  
  <div className="flex flex-col w-full md:w-1/3  ">
    <label className="text-sm font-semibold text-gray-700 mb-1">Company</label>
    <Input 
    
      type="text"
      placeholder="search for company "
      value={nameFilter}
      onChange={(e) => setNameFilter(e.target.value)}
      className="border p-2 rounded"
    />
  </div>

  <div className="flex flex-col w-full md:w-1/3">
    <label className="text-sm font-semibold text-gray-700 mb-1">Location</label>
    <Input
      type="text"
      placeholder=" search for location"
      value={locationFilter}
      onChange={(e) => setLocationFilter(e.target.value)}
      className="border p-2 rounded"
    />
  </div>

  <div className="flex flex-col w-full md:w-1/3">
    <label className="text-sm font-semibold text-gray-700 mb-1">Domain</label>
    
    <select
      
    value={filterDomain}
    onChange={(e) => setFilterDomain(e.target.value)}
    className="border rounded p-2"
  >
    <option value="">all Domains</option>
    <option value="Web Development">Web Development</option>
    <option value="AI-ML">AI-ML</option>
    <option value="MERN">MERN</option>
    <option value="CyberSecurity">CyberSecurity</option>
    <option value="DevOps">DevOps</option>
    <option value="Blockchain">Blockchain</option>
    <option value="UI/UX Design">UI/UX Design</option>
    <option value="Data Science">Data Science</option>
    <option value="Cloud">Cloud</option>
    <option value="Game Development">Game Development</option>
  </select>
    
  </div>
</div>


     <div className="m-10 flex justify-center flex-col overflow-x-auto">
  <table className="w-full text-center border-collapse border border-gray-300 overflow-auto">
    <thead>
      <tr className="bg-gray-200">
        <th className="border border-gray-300 p-2">S No.</th>
        <th className="border border-gray-300 p-2">Company Name</th>
        <th className="border border-gray-300 p-2">Location</th>
        <th className="border border-gray-300 p-2">Domain</th>
        <th className="border border-gray-300 p-2">View Details</th>
      </tr>
    </thead>
    <tbody>
      {filterCompany.length > 0 ? (
        filterCompany.map((comp) => (
          <tr key={comp.Sno} className="border border-gray-300">
            <td>{comp.Sno}</td>
            <td>{comp.name}</td>
            <td>{comp.Location}</td>
            <td>{comp.domain}</td>
            <td>
              <Link href="/demo">
                <button className="px-3 py-1 bg-blue-100 text-gray-600 rounded">
                  View
                </button>
              </Link>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5} className="text-center p-4 text-gray-500">
             No matching companies found
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>

    </div>
 
);}
export default Index;
