import { customRedirect, getTokens, server } from "@/common/function";
import Student_Records_Page from "@/modules/student-records/index";
import { GetServerSidePropsContext } from "next";
import React from "react";

const Student_Records = () => {
  return <Student_Records_Page />;
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

export default Student_Records;
