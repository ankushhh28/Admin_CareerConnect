import React from "react";
import Campus_Updates_Page from "@/modules/campus/index";
import { customRedirect, getTokens, server } from "@/common/function";
import { GetServerSidePropsContext } from "next";

const Campus_Updates = () => {
  return <Campus_Updates_Page />;
};

// export const getServerSideProps = server(
//   async (context: GetServerSidePropsContext) => {
//     const { isUser, role } = getTokens(context);
//     if (!isUser || role != "Admin") {
//       return customRedirect("/");
//     }
//     return { props: {} };
//   }
// );

export default Campus_Updates;
