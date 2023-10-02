"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";

import InvoicePage from "@/app/(mainpage)/(utility)/invoice/page";
import { ticketsTable } from "@/constant/table-data";

const MyTickets = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <>
      <div className="mb-[20px]">
        <div className="flex justify-between items-center">
          <div><h4 className="font-[600] mb-[20px]">My Tickets</h4></div>       
          <div>
            <span className="text-[#f6c75e]">Tickets </span> 
            <span>/ My Tickets</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-7">
          <div className="flex justify-between items-center px-[20px] py-[20px] bg-white rounded-[5px] cursor-pointer">
            <div className="tracking-[0.5px] text-[#7d858c]">Total Tickets</div>
            <div className="text-[30px] tracking-[0.5px] font-[600] text-[#0665d0]">14</div>
          </div>
          <div className="flex justify-between items-center px-[20px] py-[20px] bg-white rounded-[5px] cursor-pointer">
            <div className="tracking-[0.5px] text-[#7d858c]">My Open Tickets</div>
            <div className="text-[30px] tracking-[0.5px] font-[600] text-[#faaa43]">3</div>
          </div>
          <div className="flex justify-between items-center px-[20px] py-[20px] bg-white rounded-[5px] cursor-pointer">
            <div className="tracking-[0.5px] text-[#7d858c]">My Closed Tickets</div>
            <div className="text-[30px] tracking-[0.5px] font-[600] text-[#6f9a3f]">4</div>
          </div>
        </div>
      </div>
      {/* <div><InvoicePage a={advancedTable} /></div> */}
      <div><InvoicePage advancedTable={ticketsTable} /></div>
    </>
  );
};

export default MyTickets;