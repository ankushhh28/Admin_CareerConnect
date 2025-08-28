import React from "react";
import Overview_Page from "@/modules/overview";
import { customRedirect, getTokens, server } from "@/common/function";
import { GetServerSidePropsContext } from "next";
import { getStaticData } from "@/common/api";
import { StaticData } from "@/common/types";

const Overview = ({ staticData }: { staticData: StaticData }) => {
  return <Overview_Page staticData={staticData} />;
};

export const getServerSideProps = server(
  async (context: GetServerSidePropsContext) => {
    // const { isUser, role } = getTokens(context);
    // if (!isUser || role != "Admin") {
    //   return customRedirect("/");
    // }
    const staticData = await getStaticData("overview");
    return { props: { staticData } };
  }
);

export default Overview;
