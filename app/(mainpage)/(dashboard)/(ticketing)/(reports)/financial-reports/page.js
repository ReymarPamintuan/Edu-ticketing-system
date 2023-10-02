"use client";
import React, { useState } from "react";

import InvoicePage from "@/app/(mainpage)/(utility)/invoice/page";
import { ticketsTable } from "@/constant/table-data";
import MixedChart from "@/components/partials/chart/appex-chart/Mixed";
import Stacked from "@/components/partials/chart/appex-chart/Stacked";
import Column from "@/components/partials/chart/appex-chart/HorizontalBar";

const FinancialReports = () => {
  return (
    <>
      <div className="mb-[20px]">
        <div className="flex justify-between items-center mb-[35px] mt-[10px]">
          <div><h4 className="font-[600]">Financial Reports</h4></div>       
          <div>
            <span className="text-[#f6c75e]">Tickets </span> 
            <span>/ My Tickets</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7">
          <div className="col-span-1 px-[20px] py-[20px] bg-white rounded-[5px]">
            <div className="font-[600]"><label>Utilities</label></div>
            <div><MixedChart /></div>
          </div>
          <div className="col-span-1 px-[20px] py-[20px] bg-white rounded-[5px]">
            <div className="font-[600]"><label>Materials</label></div>
            <MixedChart />
          </div>
          <div className="col-span-2 px-[20px] py-[20px] bg-white rounded-[5px]">
            <div className="font-[600]"><label>Costs by Location</label></div>
            <Stacked />
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialReports;