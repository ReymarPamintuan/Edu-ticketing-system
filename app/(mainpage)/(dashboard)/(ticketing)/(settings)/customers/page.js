"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import InvoiceChanged3Page from "@/app/(mainpage)/(utility)/invoice-changed3/page";
import { customersTable } from "@/constant/table-data";

const Customers = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <>
      <div className="mb-[20px]">
        <div className="flex justify-between items-center px-[25px] py-[35px] bg-[url('/assets/images/all-img/back.png')] bg-cover">
          <div><h4 className="font-[600]">Customers</h4></div>       
          <div>
            <span className="text-[#f6c75e]">Tickets </span> 
            <span>/ Settings</span>
            <span>/ CRM</span>
          </div>
        </div>
      </div>
      <div><InvoiceChanged3Page advancedTable={customersTable} /></div>
    </>
  );
};

export default Customers;