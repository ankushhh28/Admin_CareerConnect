import React from "react";
import Faculty_Details_PAGE from "@/modules/faculty-details";
import { customRedirect, getTokens, server } from "@/common/function";
import { GetServerSidePropsContext } from "next";

const Faculty_Details = () => {
  return <Faculty_Details_PAGE />;
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

export default Faculty_Details;
