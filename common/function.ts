import * as cookie from "cookie";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

export const server = (
  getData: (
    context: GetServerSidePropsContext
  ) => Promise<GetServerSidePropsResult<any>>
) => {
  return async (context: GetServerSidePropsContext) => {
    try {
      const result = await getData(context);

      if ("redirect" in result || "notFound" in result || "props" in result) {
        return result;
      }

      return { props: result };
    } catch (error) {
      return { props: {} };
    }
  };
};

export const getTokens = (context: GetServerSidePropsContext) => {
  const { req } = context;
  let isUser = false;
  const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};

  const accessToken = cookies.accessToken || null;
  const refreshToken = cookies.refreshToken || null;
  const role = cookies.role || null;

  if (accessToken) {
    isUser = true;
  }

  return { accessToken, refreshToken, role, isUser };
};

export const customRedirect = (path: string) => {
  return { redirect: { destination: `${path}`, permanent: false } };
};
