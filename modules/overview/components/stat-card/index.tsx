import Automate_Count from "@/COMP/automate-count";
import Link from "next/link";
import React from "react";

interface statsType {
  title: string;
  value: number;
  color: string;
  href?: string;
}
const Stats_Card = ({ stat }: { stat: statsType }) => {
  return (
    <Link
      href={stat.href || "#"}
      className="bg-gray-50 border rounded-lg h-32 flex flex-col justify-center items-center shadow-sm hover:shadow-md transition"
    >
      <h3 className="text-lg font-bold">{stat.title}</h3>
      <p className={`text-2xl font-bold ${stat.color}`}>
        <Automate_Count end={stat.value} duration={0.0001} />
      </p>
    </Link>
  );
};

export default Stats_Card;
