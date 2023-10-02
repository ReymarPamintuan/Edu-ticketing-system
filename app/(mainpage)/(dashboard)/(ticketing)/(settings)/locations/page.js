"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";

import InvoiceChanged2Page from "@/app/(mainpage)/(utility)/invoice-changed2/page";
import { locationsTable } from "@/constant/table-data";

const Locations = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <>
      <div className="mb-[20px]">
        <div className="flex justify-between items-center px-[25px] py-[35px] bg-[url('/assets/images/all-img/back.png')] bg-cover">
          <div><h4 className="font-[600]">Locations</h4></div>       
          <div>
            <span className="text-[#f6c75e]">Tickets </span> 
            <span>/ Settings</span>
            <span>/ Locations</span>
          </div>
        </div>
      </div>
      <div><InvoiceChanged2Page advancedTable={locationsTable} /></div>
    </>
  );
};

export default Locations;