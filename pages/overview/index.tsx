import { customRedirect, getTokens, server } from "@/common/function";
import Overview_Page from "@/modules/overview";
import { GetServerSidePropsContext } from "next";
import React from "react";

const Overview = () => {
  return <Overview_Page />;
};

export const getServerSideProps = server(
  async (context: GetServerSidePropsContext) => {
    const { isUser, role } = getTokens(context);
    if (!isUser || role != "Admin") {
      return customRedirect("/");
    }
    return { props: {} };
  }
);

export default Overview;
