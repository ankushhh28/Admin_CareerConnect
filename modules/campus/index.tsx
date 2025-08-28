import React, { useState } from "react";
import Left_Side_Bar from "../../COMP/Left-side-bar/leftSideBar";
import Page_Title from "../overview/components/page-title";
import Custom_Select from "@/COMP/custom-select";
import Custom_Search from "@/COMP/custom-search";
import Custom_Table from "@/COMP/custom-table";
import { StaticData } from "@/common/types";

interface Company {
  Sno: number;
  name: string;
  Location: string;
  domain: string;
}

const Campus_Page = ({ staticData }: { staticData: StaticData }) => {
  const { Title, MetaData } = staticData;
  const { tableHeaders, batchOptions } = MetaData;
  const [batch, setBatch] = useState<string>("");
  const [nameFilter, setNameFilter] = useState<string>("");

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
    company.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
  return (
    <Left_Side_Bar>
      <div className="p-5">
        <Page_Title Title={Title ?? ""} />
        <div className="flex items-center justify-around mt-6 mb-6">
          <div className="w-1/3">
            <Custom_Select
              title="Batch"
              data={batchOptions}
              filter={batch}
              setFunction={setBatch}
            />
          </div>
          <div className="w-1/2">
            <Custom_Search
              placeHolder="Search company by name.."
              title="Company"
              searchTerm={nameFilter}
              setFunction={setNameFilter}
            />
          </div>
        </div>

        <Custom_Table
          type="faculty"
          headers={tableHeaders}
          data={filterCompany}
        />
      </div>
    </Left_Side_Bar>
  );
};

export default Campus_Page;
