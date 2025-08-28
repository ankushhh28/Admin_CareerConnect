import React from "react";

const Page_Title = ({ Title, CSS }: { Title: string; CSS?: string }) => {
  return (
    <h1 className={`text-3xl font-bold mb-6 text-[#111827] ${CSS}`}>{Title}</h1>
  );
};

export default Page_Title;
