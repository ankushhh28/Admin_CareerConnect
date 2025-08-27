import React from "react";
import Student_Records_Page from "@/modules/student-records/index";
import { customRedirect, getTokens, server } from "@/common/function";
import { GetServerSidePropsContext } from "next";
import { getStaticData } from "@/common/api";
import { StaticData } from "@/common/types";

const Student_Records = ({ staticData }: { staticData: StaticData }) => {
  const { Title = "", MetaData = {} } = staticData;
  return <Student_Records_Page Title={Title} MetaData={MetaData} />;
};

export const getServerSideProps = server(
  async (context: GetServerSidePropsContext) => {
    // const { isUser, role } = getTokens(context);
    // if (!isUser || role != "Admin") {
    //   return customRedirect("/");
    // }
    const staticData = await getStaticData("student-record");
    return { props: { staticData } };
  }
);

export default Student_Records;
