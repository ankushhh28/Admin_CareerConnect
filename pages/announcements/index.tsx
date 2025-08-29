import Announcements_Page from "@/modules/announcement/index";
import React from "react";
import { customRedirect, getTokens, server } from "@/common/function";
import { GetServerSidePropsContext } from "next";

const Announcements = () => {
  return <Announcements_Page />;
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

export default Announcements;
