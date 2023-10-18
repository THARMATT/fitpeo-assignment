import React from "react";
import { TbNotes } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";

import { GoStack } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
export default function Dashboardstats() {
  return (
    <div className="flex gap-4 w-full flex-wrap p-2 sm:p-1 sm:flex-col md:flex-col  sm:items-center md:items-center  xs:text-sm">
      <BoxWrapper>
        {" "}
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-200">
          {" "}
          <AiOutlineDollar className="text-2xl text-green-500" />
        </div>{" "}
        <div className="pl-4 flex flex-col">
            <span className="text-gray-400 text-sm font-light" >Earning</span>
            <strong className="text-3xl  xs:text-sm">$456</strong>
           <p><span className="text-sm text-green-500">+37%</span> this month</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        {" "}
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-purple-200">
          {" "}
          <TbNotes className="text-2xl text-purple-500" />
        </div>{" "}
        <div className="pl-4 flex flex-col">
            <span className="text-gray-400 text-sm font-light" >Orders</span>
            <strong className="text-3xl  xs:text-sm">$2.4k</strong>
           <p><span className="text-sm text-red-500">-3%</span> this month</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        {" "}
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-200">
          {" "}
          <GoStack className="text-2xl text-indigo-500" />
        </div>{" "}
        <div className="pl-4 flex flex-col">
            <span className="text-gray-400 text-sm font-light  xs:text-sm" >Balance</span>
            <strong className="text-3xl xs:text-sm">$4.7K</strong>
           <p  xs:text-sm><span className="text-sm text-green-500  xs:text-sm">+7%</span> this month</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        {" "}
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-pink-200">
          {" "}
          <HiShoppingBag className="text-2xl  text-red-500" />
        </div>{" "}
        <div className="pl-4 flex flex-col">
            <span className="text-gray-400 text-sm font-light" >Total Sales</span>
            <strong className="text-3xl  xs:text-sm">$46</strong>
           <p><span className="text-sm text-red-500">-5%</span> this month</p>
        </div>
      </BoxWrapper>
    
    </div>
  );
}
function BoxWrapper({ children }) {
  return (
    <div className="bg-white  rounded-lg p-4  xs:p-1 xs:text-sm xs:w-[8rem]  xs:h-[2rem] flex-1 border border-gray-200 flex items-center  ">
      {children}
    </div>
  );
}
