import { StaticData } from "@/common/types";
import Left_Side_Bar from "@/COMP/Left-side-bar/leftSideBar";
import Page_Title from "./components/page-title";
import Dept_Card from "./components/dept-card";
import Stats_Card from "./components/stat-card";

const Overview_Page = ({ staticData }: { staticData: StaticData }) => {
  const {
    Title,
    MetaData: { departments },
  } = staticData;

  const stats = [
    {
      title: "Total Students",
      value: 1200,
      color: "text-blue-600",
      href: "dashboard/student-records",
    },
    { title: "Placed Students", value: 445, color: "text-green-600" },
    { title: "Campus Drives", value: 25, color: "text-purple-600" },
  ];

  return (
    <Left_Side_Bar>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {stats.map((stat, idx) => (
              <Stats_Card stat={stat} key={idx} />
            ))}
          </div>

          <Page_Title CSS="text-center" Title={Title ?? ""} />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {departments.map((dept: any) => (
              <Dept_Card dept={dept} key={dept.name} />
            ))}
          </div>
        </div>
      </div>
    </Left_Side_Bar>
  );
};

export default Overview_Page;
