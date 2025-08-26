import { customRedirect, getTokens, server } from "@/common/function";
import Campus_Updates_Page from "@/modules/campus-updates/index";
import { GetServerSidePropsContext } from "next";
import React from "react";

const Campus_Updates = () => {
  return <Campus_Updates_Page />;
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

export default Campus_Updates;
