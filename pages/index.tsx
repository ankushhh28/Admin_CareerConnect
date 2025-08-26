import { customRedirect, getTokens, server } from "@/common/function";
import LoginPage from "@/modules/login-page";
import { GetServerSidePropsContext } from "next";
import React from "react";

const Home = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export const getServerSideProps = server(
  async (context: GetServerSidePropsContext) => {
    const token = getTokens(context);

    if (token.accessToken && token.role == "Admin") {
      return customRedirect("/overview");
    }
    return { props: {} };
  }
);

export default Home;
