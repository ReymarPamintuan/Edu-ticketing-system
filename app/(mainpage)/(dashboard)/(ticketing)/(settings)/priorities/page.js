"use client";
import React, { useState } from "react";

const priorities = () => {
  const [picker, setPicker] = useState(new Date());
  return (
    <>
      <div className="mb-[20px]">
        <div className="flex justify-between items-center px-[25px] py-[35px] bg-[url('/assets/images/all-img/back.png')] bg-cover">
          <div>
            <h4 className="font-[600]">Blank Template</h4>
          </div>
          <div>
            <span className="text-[#f6c75e]">Engagement </span>
            <span>/ Blank</span>
          </div>
        </div>
        <div className="px-[20px] py-[20px]">
          <h4 className="font-[600] mb-[20px]">Oops. It's Blank.</h4>
          <p className="mb-[20px]">
            We couldn't mockup EVERY page, so we created a "blank template" for
            building new mockups and to minimize 404 errors (though we're sure
            there are still some).
          </p>
          <p>
            If the page you were trying to get to needs to be mocked-up here,
            just blame our intern or let us know.
          </p>
        </div>
      </div>
    </>
  );
};

export default priorities;
