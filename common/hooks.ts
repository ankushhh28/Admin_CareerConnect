import { GetServerSidePropsContext } from 'next';

// higher order function for commonize server-side props
export const useServer = (
  getData: (context: GetServerSidePropsContext) => Promise<any>
) => {
  return async (context: GetServerSidePropsContext) => {
    const data = await getData(context);
    return { props: data };
  };
};
