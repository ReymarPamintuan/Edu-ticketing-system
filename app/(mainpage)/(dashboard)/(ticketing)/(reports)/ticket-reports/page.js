"use client";
import React, { useState } from "react";
import Pie from "@/components/partials/chart/appex-chart/Pie";
import BasicBar from "@/components/partials/chart/appex-chart/Basicbar";
import Column from "@/components/partials/chart/appex-chart/HorizontalBar";

const TicketReports = () => {
  return (
    <>
      <div className="mb-[20px]">
        <div className="flex justify-between items-center mb-[35px] mt-[10px]">
          <div>
            <h4 className="font-[600]">Ticketing Reports</h4>
          </div>
          <div>
            <span className="text-[#f6c75e]">Tickets </span>
            <span>/ My Tickets</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-7">
          <div className="px-[20px] py-[20px] bg-white rounded-[5px]">
            <div className="font-[600]">
              <label>Status</label>
            </div>
            <div>
              <Pie />
            </div>
          </div>
          <div className="col-span-2 px-[20px] py-[20px] bg-white rounded-[5px]">
            <div className="font-[600]">
              <label>Categories</label>
            </div>
            <Column />
          </div>
          <div className="col-span-3 px-[20px] py-[20px] bg-white rounded-[5px]">
            <div className="font-[600]">
              <label>Tickets Per Member</label>
            </div>
            <BasicBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketReports;
