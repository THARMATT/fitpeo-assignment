import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",

    Income: 8400,
  },
  {
    name: "Feb",

    Income: 6398,
  },
  {
    name: "Mar",

    Income: 9800,
  },
  {
    name: "Apr",

    Income: 7908,
  },
  {
    name: "May",

    Income: 5800,
  },
  {
    name: "Jun",

    Income: 8800,
  },
  {
    name: "July",

    Income: 9300,
  },
  {
    name: "Aug",

    Income: 9800,
  },
  {
    name: "Sep",

    Income: 8908,
  },
  {
    name: "Oct",

    Income: 9800,
  },
  {
    name: "Nov",

    Income: 7800,
  },
  {
    name: "Dec",

    Income: 6300,
  },
];

export default function TransactionChart() {
  return (
    <div className="h-[20rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-semibold">Overview</strong>
      <p className="text-gray-400">Monthly Earning</p>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={300}
            height={200}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid stroke="none" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              height={30}
            ></XAxis>

            <Tooltip />

            <Bar
              onClick={(entry) => setSelectedBar(entry.name)}
              dataKey="Income"
              fill="#0ea5e9"
              radius={[10, 10, 10, 10]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
