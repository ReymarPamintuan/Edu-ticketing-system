"use client";
import React, { useState } from "react";

import Select from "@/components/ui/Select";
import Flatpickr from "react-flatpickr";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const ExportFinancials = () => {
  const [picker, setPicker] = useState(new Date());
  return (
    <>
      <div className="mb-[20px]">
        <div className="flex justify-between items-center px-[25px] py-[35px] bg-[url('/assets/images/all-img/back.png')] bg-cover">
          <div>
            <h4 className="font-[600]">Export Financials</h4>
          </div>
          <div>
            <span className="text-[#f6c75e]">Tickets / </span>
            <span className="text-[#f6c75e]">Financial / </span>
            <span>/ Export</span>
          </div>
        </div>
        <div className="px-[20px] py-[20px]">
          <div>
            <lable>
              Select a date range and the financial data type and click download
              to export all the data as a CSV
            </lable>
          </div>
          <div>
            <div className="">
              <label className="form-label" for="range-picker">
                Range
              </label>
            </div>
            <div className="grid grid-cols-12 gap-7">
              <div className="col-span-5">
                <Flatpickr
                  value={picker}
                  id="range-picker"
                  className="form-control py-2"
                  onChange={(date) => setPicker(date)}
                  options={{
                    mode: "range",
                    defaultDate: ["2020-02-01", "2020-02-15"],
                  }}
                />
              </div>
              <div className="col-span-5">
                <Select
                  className="cursor-pointer"
                  options={[" Utilities ", "Materials", "Vendors", "All"]}
                />
              </div>
              <div className="col-span-2">
                <Button
                  className="bg-[#82b54b] px-[60px] py-[8px] text-white"
                  href="#"
                >
                  <div className="flex items-center gap-1">
                    <div className="text-[15px]">
                      <Icon icon="fa-solid:download" />{" "}
                    </div>
                    <div>Download </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExportFinancials;
