import React from "react";
import Student_Status_Page from "@/modules/student-status";
import { customRedirect, getTokens, server } from "@/common/function";
import { GetServerSidePropsContext } from "next";

const Student_Status = () => {
  return <Student_Status_Page />;
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

export default Student_Status;
