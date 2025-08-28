import React from "react";
import { customRedirect, getTokens, server } from "@/common/function";
import { GetServerSidePropsContext } from "next";
import Campus_Page from "@/modules/campus/index";
import { getStaticData } from "@/common/api";
import { StaticData } from "@/common/types";

const Campus_Updates = ({ staticData }: { staticData: StaticData }) => {
  return <Campus_Page staticData={staticData} />;
};

export const getServerSideProps = server(
  async (context: GetServerSidePropsContext) => {
    // const { isUser, role } = getTokens(context);
    // if (!isUser || role != "Admin") {
    //   return customRedirect("/");
    // }
    const staticData = await getStaticData("campus");
    return { props: { staticData } };
  }
);

export default Campus_Updates;
