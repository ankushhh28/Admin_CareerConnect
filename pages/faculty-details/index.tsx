import { customRedirect, getTokens, server } from "@/common/function";
import Faculty_Registration_Form from "@/modules/faculty-details";
import { GetServerSidePropsContext } from "next";
import React from "react";

const Faculty_Details = () => {
  return <Faculty_Registration_Form />;
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

export default Faculty_Details;
