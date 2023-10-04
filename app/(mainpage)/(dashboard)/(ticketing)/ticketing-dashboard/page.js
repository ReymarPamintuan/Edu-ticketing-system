"use client";

import React, { useState } from "react";
import Link from "next/link";

import InvoicePage from "@/app/(mainpage)/(utility)/invoice/page";
import { dashboardTable } from "@/constant/table-data";

const TicketingDashboard = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <>
      <div className="mb-[20px]">
        <div className="flex justify-between items-center mb-[35px] mt-[10px]">
          <div>
            <h4 className="font-[600]">Tickets Dashboard</h4>
          </div>
          <div>
            <span className="text-[#f6c75e]">
              <Link href="ticketing-dashboard">Dashboard </Link>
            </span>
            <span>/ Tickets</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-7">
          <div className="flex justify-between items-center px-[20px] py-[20px] bg-white rounded-[5px] cursor-pointer">
            <div className="tracking-[0.5px] text-[#7d858c]">Total Tickets</div>
            <div className="text-[30px] tracking-[0.5px] font-[600] text-[#0665d0]">
              25
            </div>
          </div>
          <div className="flex justify-between items-center px-[20px] py-[20px] bg-white rounded-[5px] cursor-pointer">
            <div className="tracking-[0.5px] text-[#7d858c]">Open Tickets</div>
            <div className="text-[30px] tracking-[0.5px] font-[600] text-[#faaa43]">
              15
            </div>
          </div>
          <div className="flex justify-between items-center px-[20px] py-[20px] bg-white rounded-[5px] cursor-pointer">
            <div className="tracking-[0.5px] text-[#7d858c]">
              Closed Tickets
            </div>
            <div className="text-[30px] tracking-[0.5px] font-[600] text-[#6f9a3f]">
              10
            </div>
          </div>
          <div className="flex justify-between items-center px-[20px] py-[20px] bg-white rounded-[5px] cursor-pointer">
            <div className="tracking-[0.5px] text-[#7d858c]">Unassigned</div>
            <div className="text-[30px] tracking-[0.5px] font-[600] text-[#ffdd72]">
              5
            </div>
          </div>
        </div>
      </div>
      {/* <div><InvoicePage a={advancedTable} /></div> */}
      <div>
        <InvoicePage advancedTable={dashboardTable} />
      </div>
    </>
  );
};

export default TicketingDashboard;
