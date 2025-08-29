import React from "react";
import LoginPage from "@/modules/login-page";
import { customRedirect, getTokens, server } from "@/common/function";
import { GetServerSidePropsContext } from "next";

const Home = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

// export const getServerSideProps = server(
//   async (context: GetServerSidePropsContext) => {
//     const token = getTokens(context);

//     if (token.accessToken && token.role == "Admin") {
//       return customRedirect("/overview");
//     }
//     return { props: {} };
//   }
// );

export default Home;
