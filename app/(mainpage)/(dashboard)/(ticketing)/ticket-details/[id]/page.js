"use client";

import Accordion from "@/components/ui/Accordion";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Textarea from "@/components/ui/Textarea";
import Link from "next/link";
import Comment from "@/components/partials/comment/comment";
import { commentData } from "@/constant/comment-data";
import { Icon } from "@iconify/react";

import Fileinput from "@/components/ui/Fileinput";
import DropZone from "@/components/partials/froms/DropZone";
import React, { useState } from "react";

// export function generateStaticParams() {
//   return [{ id: 'eqwe', }, { id: 'qweqwe' }, { id: 'weqeq' }]
// }

export default function Page({ params }) {
  const { id } = params;
  // ...
  const items = [
    {
      title: (
        <div>
          Priority: <span className="text-red-600 font-[600]">High</span>
        </div>
      ),
      content: (
        <div className="space-x-3 flex">
          <Select
            className="cursor-pointer"
            options={[" -select ", "High", "Medium", "Low", "Lorum"]}
          />
          <Button
            className="bg-green-600 px-[15px] py-[6px] text-white"
            href="#"
          >
            {" "}
            Save{" "}
          </Button>
          <Button
            className="bg-[#6c757d] px-[15px] py-[6px] text-white"
            href="#"
          >
            {" "}
            Add{" "}
          </Button>
        </div>
      ),
    },
    {
      title: (
        <div>
          Status: <span className="text-blue-600 font-[600]">In Progress</span>
        </div>
      ),
      content: (
        <div className="space-x-3 flex">
          <Select
            className="cursor-pointer"
            options={[" -select ", "High", "Medium", "Low", "Lorum"]}
          />
          <Button
            className="bg-green-600 px-[15px] py-[6px] text-white"
            href="#"
          >
            {" "}
            Save{" "}
          </Button>
        </div>
      ),
    },
    {
      title: (
        <div>
          Category: <span className="font-[600]">Condition-Based</span>
        </div>
      ),
      content: (
        <div className="space-x-3 flex">
          <Select
            className="cursor-pointer"
            options={[" -select ", "High", "Medium", "Low", "Lorum"]}
          />
          <Button
            className="bg-green-600 px-[15px] py-[6px] text-white"
            href="#"
          >
            {" "}
            Save{" "}
          </Button>
          <Button
            className="bg-[#6c757d] px-[15px] py-[6px] text-white"
            href="#"
          >
            {" "}
            Add{" "}
          </Button>
        </div>
      ),
    },
    {
      title: (
        <div>
          Assigned: <span className="font-[600]">Josh Aulozzi</span>
        </div>
      ),
      content: (
        <div className="space-x-3 flex">
          <Select
            className="cursor-pointer"
            options={[" -select ", "High", "Medium", "Low", "Lorum"]}
          />
          <Button
            className="bg-green-600 px-[15px] py-[6px] text-white"
            href="#"
          >
            {" "}
            Save{" "}
          </Button>
        </div>
      ),
    },
    {
      title: (
        <div>
          Property: <span className="font-[600]">Akins high School</span>
        </div>
      ),
      content: (
        <div className="space-x-3 flex">
          <Select
            className="cursor-pointer"
            options={[" -select ", "High", "Medium", "Low", "Lorum"]}
          />
          <Button
            className="bg-green-600 px-[15px] py-[6px] text-white"
            href="#"
          >
            {" "}
            Save{" "}
          </Button>
          <Button
            className="bg-[#6c757d] px-[15px] py-[6px] text-white"
            href="#"
          >
            {" "}
            Add{" "}
          </Button>
        </div>
      ),
    },
    {
      title: (
        <div>
          Location: <span className="font-[600]">ENtrance, Building B</span>
        </div>
      ),
      content: (
        <div className="space-x-3 flex">
          <Select
            className="cursor-pointer"
            options={[" -select ", "High", "Medium", "Low", "Lorum"]}
          />
          <Button
            className="bg-green-600 px-[15px] py-[6px] text-white"
            href="#"
          >
            {" "}
            Save{" "}
          </Button>
          <Button
            className="bg-[#6c757d] px-[15px] py-[6px] text-white"
            href="#"
          >
            {" "}
            Add{" "}
          </Button>
        </div>
      ),
    },
  ];

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccrodian = () => {
    if (activeIndex) {
      setActiveIndex(false);
    } else {
      setActiveIndex(true);
      // setOpen(!open);
    }
  };

  return (
    <>
      <div className="mb-[20px]">
        <div className="flex justify-between items-center mb-[35px] mt-[10px]">
          <div>
            <h4 className="font-[600]">Ticket Details</h4>
          </div>
          <div>
            <span className="text-[#f6c75e]">Tickets </span>
            <span>/ View</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-7">
          <div className="col-span-2 px-[20px] py-[20px] bg-white rounded-[5px]">
            <h5 className="font-[600] mb-[15px]">ID {id}:Broken Winow</h5>
            <p className="text-[18px] mb-[15px]">
              Seams the window broke at the front door of building B. Need to
              order replacement and install.
            </p>
            <div className="py-2 bg-[#e9ecef] rounded-[3px] mb-[15px]"></div>
            <div className="flex justify-between items-center mb-[15px] font-[600]">
              <lable className="">Attachment</lable>
              <button
                onClick={() => toggleAccrodian()}
                className="flex justify-between items-center bg-blue-100 rounded-[4px] px-4 py-2"
              >
                <Icon icon="ant-design:plus-outlined"></Icon>Add Attachment
              </button>
            </div>
            {activeIndex && (
              <div
                className={`${
                  activeIndex ? "" : "l"
                } text-sm text-slate-600 font-normal bg-white rounded-b-md`}
              >
                <div className="mb-[15px] w-3/5">
                  <Fileinput
                    name="basic"
                    selectedFile={selectedFile}
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            )}
            <div className="grid grid-cols-4 gap-4 mb-[15px]">
              <img
                src="/assets/images/ticket detail/ticket-photo-1.jpg"
                alt=""
                className=" w-full h-full  object-cover"
              />
              <img
                src="/assets/images/ticket detail/ticket-photo-2.jpg"
                alt=""
                className=" w-full h-full  object-cover"
              />
            </div>
            <div className="mb-[15px] font-[600]">
              <Textarea
                label="Ticket History"
                id="pn4"
                placeholder="Comment on the ticket..."
                className="mb-[20px] text-[16px] w-full"
              />
            </div>
            <div className="flex justify-end items-center">
              <Link
                href="#"
                className="px-9 py-1 bg-[#0665d0] rounded-[3px] text-[13px] text-white"
              >
                Save
              </Link>
            </div>
            <div className="mt-[20px]">
              <Comment commentData={commentData} />
            </div>
          </div>
          <div className="px-[1px] py-[20px] bg-white cursor-pointer">
            <Accordion items={items} className="mt-[100px]" />
          </div>
        </div>
      </div>
    </>
  );
  // return <div>My detail page: {id}</div>
}
