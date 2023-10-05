"use client";
import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@/components/ui/Button";

import Textinput from "@/components/ui/Textinput";

//select code
import Select from "react-select";

const furits = [
  { value: "Akins High School", label: "Akins High School" },
  { value: "Allison Elementary", label: "Allison Elementary" },
  {
    value: "Alternative Learning Center",
    label: "Alternertive Learning Center",
  },
  { value: "Anderson High School", label: "Anderson High School" },
  { value: "Andrews Elementary", label: "Andrews Elementary" },
  { value: "Ann Richards", label: "Ann Richards" },
  { value: "Austin High School", label: "Austin High School" },
];

const styles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: "14px",
  }),
};

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

const categories = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
    mode: "all",
  });

  const onSubmit = (data) => {
    // event.preventDefault();
    console.log(data);
    alert("Added successfully");
  };

  return (
    <>
      <div className="mb-[20px]">
        <div className="flex justify-between items-center mb-[20px] px-[25px] py-[35px] bg-[url('/assets/images/all-img/back.png')] bg-cover">
          <div>
            <h4 className="font-[600]">Create Location</h4>
          </div>
          <div>
            <span className="text-[#f6c75e]">Tickets </span>
            <span>/ Settings</span>
            <span className="text-[#f6c75e]">Location </span>
            <span>/ Create</span>
          </div>
        </div>
        <div className="flex gap-7">
          <div className="w-2/3 h-full px-[20px] py-[20px] bg-white rounded-[5px]">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <Textinput
                label="Location"
                type="text"
                placeholder="Ticket Name"
                name="username"
                register={register}
                error={errors.username}
                className="text-[16px] mb-[20px]"
              />
              <div></div>
              <div className="items-center mt-[50px] mb-[15px]">
                <label
                  htmlFor=" hh"
                  className="col-span-12 form-label text-[16px] font-[600]"
                  for="hf-picker"
                >
                  Campus
                </label>
                <div className=" mb-[35px]">
                  <Select
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={furits[0]}
                    options={furits}
                    styles={styles}
                    id="hh"
                  />
                </div>
              </div>
              <Button
                className="bg-[#82b54b] px-[20px] py-[8px] text-white"
                type="submit"
              >
                CREATE TICKET
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default categories;
