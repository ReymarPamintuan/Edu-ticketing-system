"use client";
import React, { useState } from "react";

import ProgressBar from "@/components/ui/ProgressBar";
import dynamic from "next/dynamic";
import Link from "next/link";

const BasicMap = dynamic(() => import("@/components/partials/map/basic-map"), {
  ssr: false,
});

export default function Page({ params }) {
  const { id } = params;
  // ...

  return (
    <>
      <div className="mb-[20px]">
        <div className="flex justify-between items-center mb-[35px] mt-[10px]">
          <div>
            <h4 className="font-[600]">Broken Window #{id}</h4>
          </div>
          <div>
            <span className="text-[#f6c75e]">My Tickets </span>
            <span>/ Address</span>
          </div>
        </div>
        {/* <div>My address page: {id}</div> */}
        <div className="mb-[20px]">
          <ProgressBar
            value={10}
            className="bg-danger-500"
            striped
            showValue
            backClass="h-6 rounded-[5px] text-[21px]"
            animate
          />
        </div>
        <div className="flex justify-between items-center px-4 py-4 bg-[#dfdfdf]">
          <div className="font-[600] text-[#000] text-[18px]">Get Started</div>
          <Link href="#">Next</Link>
        </div>
        <BasicMap />
      </div>
    </>
  );
}
