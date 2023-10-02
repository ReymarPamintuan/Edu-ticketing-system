"use client";

import React, { useState } from "react";
import Textinput from "@/components/ui/Textinput";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";

import Flatpickr from "react-flatpickr";
import Todo from "@/components/ui/Todo";

//validation import
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@/components/ui/Button";

import Accordion from "@/components/ui/Accordion";

  //validation code
  const FormValidationSchema = yup
  .object({
    username: yup.string().required(),
    number: yup.number().required().positive(),
    betweenNumber: yup
      .number()
      .required("The Number between field is required")
      .positive()
      .min(1)
      .max(10),

    alphabetic: yup
      .string()
      .required()
      .matches(/^[a-zA-Z]+$/, "Must only consist of alphabetic characters"),
    length: yup.string().required("The Min Character field is required").min(3),

    password: yup.string().required().min(8),
    url: yup.string().required("The URL field is required").url(),
    message: yup.string().required("The Message field is required"),
  })
  .required();

const MyTickets = () => {
  const [filterMap, setFilterMap] = useState("usa");
  const [picker, setPicker] = useState(new Date());

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
    mode: "all",
  });

  const onSubmit = (data) => {
    //console.log(data);
  };

  const items = [
    {
      title: "Lable:",
      content:
        <div className="space-x-3 flex">
          <Select className="cursor-pointer" options={[" -select ", "High", "Medium", "Low", "Lorum"]}/>
          <Button className="bg-green-600 px-[15px] py-[6px] text-white" href="#"> Save </Button>
          <Button className="bg-[#6c757d] px-[15px] py-[6px] text-white" href="#"> Add </Button>
        </div>
    },
    {
      title: "Status:",
      content:
        <div className="space-x-3 flex">
          <Select className="cursor-pointer" options={[" -select ", "High", "Medium", "Low", "Lorum"]}/>
          <Button className="bg-green-600 px-[15px] py-[6px] text-white" href="#"> Save </Button>
        </div>
    },
    {
      title: "Category",
      content:
        <div className="space-x-3 flex">
          <Select className="cursor-pointer" options={[" -select ", "High", "Medium", "Low", "Lorum"]}/>
          <Button className="bg-green-600 px-[15px] py-[6px] text-white" href="#"> Save </Button>
          <Button className="bg-[#6c757d] px-[15px] py-[6px] text-white" href="#"> Add </Button>
        </div>
    },
    {
      title: "Assigned",
      content:
        <div className="space-x-3 flex">
          <Select className="cursor-pointer" options={[" -select ", "High", "Medium", "Low", "Lorum"]}/>
          <Button className="bg-green-600 px-[15px] py-[6px] text-white" href="#"> Save </Button>
        </div>
    },
    {
      title: "Property:",
      content:
        <div className="space-x-3 flex">
          <Select className="cursor-pointer" options={[" -select ", "High", "Medium", "Low", "Lorum"]}/>
          <Button className="bg-green-600 px-[15px] py-[6px] text-white" href="#"> Save </Button>
          <Button className="bg-[#6c757d] px-[15px] py-[6px] text-white" href="#"> Add </Button>
        </div>
    },
    {
      title: "Location:",
      content:
        <div className="space-x-3 flex">
          <Select className="cursor-pointer" options={[" -select ", "High", "Medium", "Low", "Lorum"]}/>
          <Button className="bg-green-600 px-[15px] py-[6px] text-white" href="#"> Save </Button>
          <Button className="bg-[#6c757d] px-[15px] py-[6px] text-white" href="#"> Add </Button>
        </div>
    },
  ];

  return (
    <>
      <div className="mb-[20px]">
        <div className="flex justify-between items-center mb-[35px] mt-[10px]">
          <div><h4 className="font-[600]">Create Ticket</h4></div>       
          <div>
            <span className="text-[#f6c75e]">Tickets </span> 
            <span>/ Create</span>
          </div>
        </div>
        <div className="flex gap-7">
          <div className="w-2/3 h-full px-[20px] py-[20px] bg-white rounded-[5px]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full"
            >
                  <Textinput
                    label="Ticket Name"
                    type="text"
                    placeholder="Ticket Name"
                    name="username"
                    register={register}
                    error={errors.username} 
                    className="text-[16px] mb-[20px]"
                  />
                  <Textarea
                    label="Ticket description"
                    id="pn4"
                    placeholder="Short description of the issue..."
                    className="mb-[20px] text-[16px]"
                  />
                  <div>
                    <label className="form-label text-[16px] font-[600] cursor-default" for="hf-picker">
                      Promised Date and Time
                    </label>
                    <Flatpickr
                      value={picker}
                      id="hf-picker"
                      className="form-control py-2 text-[16px] mb-[20px]"
                      onChange={(date) => setPicker(date)}
                      placeholder="mm/dd/yyyy --:-- --"
                      options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        dateFormat: "Y-m-d",
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-12 items-center mt-[50px] mb-[15px]">
                    <label className="col-span-12 form-label text-[16px] font-[600]" for="hf-picker">
                      Steps to Resolve
                    </label>
                    <div className="col-span-8 mb-[35px]">
                      <Select 
                        className="cursor-pointer"
                        options={[" - copy from existing - ", "Water Leak", "Gas Leak", "Lorum"]}
                      />
                    </div>
                    <div className="col-span-4 flex flex-row-reverse mb-[35px]">
                      <Button
                        className="bg-[#6c757d] px-[15px] py-[6px] text-white"
                        href="#"
                      >
                        Add Task
                      </Button>
                    </div>
                    <Todo />
                    <Todo />
                    <Todo />
                    <Todo />
                  </div>
                  <Button
                    className="bg-[#82b54b] px-[20px] py-[8px] text-white"
                    href="#"
                  >
                    CREATE TICKET
                  </Button>
            </form>
          </div>
          <div className="w-1/3 h-full py-[20px] bg-white cursor-pointer">
            <Accordion items={items} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTickets;