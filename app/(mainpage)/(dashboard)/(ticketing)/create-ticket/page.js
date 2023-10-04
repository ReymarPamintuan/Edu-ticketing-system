"use client";

import React, { useState } from "react";
import Textinput from "@/components/ui/Textinput";
import Textarea from "@/components/ui/Textarea";
import Flatpickr from "react-flatpickr";

//validation import
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@/components/ui/Button";

import Accordion from "@/components/ui/Accordion";

import DragDrop from "@/components/ui/DragDrop";
import Todo from "@/components/ui/Todo";

//selectbox-steps data begin
import Select from "react-select";

const furits = [
  { value: "Water Leak", label: "Water Leak" },
  { value: "Gas Leak", label: "Gas Leak" },
  { value: "Lorum", label: "Lorum" },
];
//selectbox-steps data end

//selectbox-ticket status data begin
const lables = [
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
  { value: "Low", label: "Low" },
  { value: "Lorum", label: "Lorum" },
];

const status = [
  { value: "Scheduled", label: "Scheduled" },
  { value: "Open", label: "Open" },
  { value: "In Progress", label: "In Progress" },
  { value: "Closed", label: "Closed" },
  { value: "Pending", label: "Pending" },
  { value: "Declined", label: "Declined" },
];

const category = [
  { value: "Corrective", label: "Corrective" },
  { value: "Preventive", label: "Preventive" },
  { value: "Condition-based", label: "Condition-based" },
  { value: "Closed", label: "Closed" },
  { value: "Pending", label: "Pending" },
  { value: "Predictive", label: "Predictive" },
  { value: "Predetermined", label: "Predetermined" },
  { value: "Cabinetry", label: "Predetermined" },
];

const assigned = [
  { value: "Performance Scoring", label: "Performance Scoring" },
  { value: "Justin Downey", label: "Justin Downey" },
  { value: "Richard Belding", label: "Richard Belding" },
  { value: "Trevor Baker", label: "Trevor Baker" },
  { value: "Mrs Simpson", label: "Mrs Simpson" },
];

const property = [
  { value: "Akins High School", label: "Akins High School" },
  { value: "Allison Elementary", label: "Allison Elementary" },
  {
    value: "Alternative Learning Center",
    label: "Alternative Learning Center",
  },
  { value: "Anderson High School", label: "Anderson High School" },
];

const location = [
  { value: "Admin Building", label: "Admin Building" },
  { value: "Art Room", label: "Art Room" },
  { value: "Band Room", label: "Band Room" },
  { value: "Baseball Field", label: "Baseball Field" },
];

const styles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: "14px",
  }),
};
//selectbox-ticket status data end

//form-validation begin
const FormValidationSchema = yup
  .object({
    ticketname: yup
      .string()
      .required("The Min Character field is required")
      .min(3),
    ticketdescrition: yup
      .string()
      .required("The Min Character field is required")
      .min(3),
  })
  .required();
//form-validation end

//drag and drop begin
const initTododata = [
  {
    id: "1",
    content: (
      <Todo
        todocontent="Do this thing"
        tododate="09-09-2022"
        todoimg="/assets/images/all-img/thumb-5.png"
      />
    ),
    order: 1,
  },
  {
    id: "2",
    content: (
      <Todo
        todocontent="Do this other thing"
        tododate="09-09-2022"
        todoimg="/assets/images/all-img/thumb-1.png"
      />
    ),
    order: 2,
  },
  {
    id: "3",
    content: (
      <Todo
        todocontent="Don't forget to do this too"
        tododate="09-09-2022"
        todoimg="/assets/images/all-img/thumb-4.png"
      />
    ),
    order: 3,
  },
  {
    id: "4",
    content: (
      <Todo
        todocontent="Don't forget to do this too"
        tododate="09-09-2022"
        todoimg="/assets/images/all-img/user-big.png"
      />
    ),
    order: 4,
  },
];

const MyTickets = () => {
  const [tododata, setTodoData] = useState(initTododata);

  // const [len, setLen] = useState(tododata.length);
  // let len = tododata.length;

  // console.log("len2:", len);
  // console.log("tododata:", tododata);

  const [dragId, setDragId] = useState();
  const [boxes, setBoxes] = useState(initTododata);

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {
    const dragBox = boxes.find((box) => box.id === dragId);
    const dropBox = boxes.find((box) => box.id === ev.currentTarget.id);

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;

    const newBoxState = boxes.map((box) => {
      if (box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.id === ev.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });

    setBoxes(newBoxState);
  };
  //drag and drop end

  const [picker, setPicker] = useState(new Date());
  // const [picker2, setPicker2] = useState(new Date());

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
    mode: "all",
  });

  const onSubmit = (values) => {
    // event.preventDefault();
    console.log("submit-value:", values);
    // len += 1;

    // setLen((len) => len + 1);
    console.log("picker:", picker);

    setTodoData([
      ...tododata,
      {
        id: (tododata.length + 1).toString(),
        content: (
          <Todo
            todocontent={values.ticketdescrition}
            tododate="09-09-2022"
            todoimg="/assets/images/all-img/user-big.png"
          />
        ),
        order: tododata.length + 1,
      },
    ]);

    setBoxes([
      ...tododata,
      {
        id: (tododata.length + 1).toString(),
        content: (
          <Todo
            todocontent={values.ticketdescrition}
            tododate="09-09-2022"
            todoimg="/assets/images/all-img/user-big.png"
          />
        ),
        order: tododata.length + 1,
      },
    ]);
    // alert("Saved successfully");
  };

  const items = [
    {
      title: "Lable:",
      content: (
        <div className="space-x-3 flex">
          <Select
            className="react-select"
            classNamePrefix="select"
            defaultValue={lables[0]}
            options={lables}
            styles={styles}
            id="hh"
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
      title: "Status:",
      content: (
        <div className="space-x-3 flex">
          <Select
            className="react-select"
            classNamePrefix="select"
            defaultValue={status[0]}
            options={status}
            styles={styles}
            id="hh"
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
      title: "Category",
      content: (
        <div className="space-x-3 flex">
          <Select
            className="react-select"
            classNamePrefix="select"
            defaultValue={category[0]}
            options={category}
            styles={styles}
            id="hh"
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
      title: "Assigned",
      content: (
        <div className="space-x-3 flex">
          <Select
            className="react-select"
            classNamePrefix="select"
            defaultValue={assigned[0]}
            options={assigned}
            styles={styles}
            id="hh"
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
      title: "Property:",
      content: (
        <div className="space-x-3 flex">
          <Select
            className="react-select"
            classNamePrefix="select"
            defaultValue={property[0]}
            options={property}
            styles={styles}
            id="hh"
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
      title: "Location:",
      content: (
        <div className="">
          <div className="grid grid-cols-2 gap-3 mb-[15px]">
            <div className="col-span-1">
              <Select
                className="react-select"
                classNamePrefix="select"
                defaultValue={location[0]}
                options={location}
                styles={styles}
                id="hh"
              />
            </div>
            <div className="col-span-1">
              <Textinput
                label=""
                type="text"
                placeholder="Area/Number"
                name="length"
                register={register}
                error={errors.length}
              />
            </div>
          </div>
          <div className="flex gap-3">
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
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="mb-[20px]">
        <div className="flex justify-between items-center mb-[35px] mt-[10px]">
          <div>
            <h4 className="font-[600]">Create Ticket</h4>
          </div>
          <div>
            <span className="text-[#f6c75e]">Tickets </span>
            <span>/ Create</span>
          </div>
        </div>
        <div className="flex gap-7">
          <div className="w-2/3 h-full px-[20px] py-[20px] bg-white rounded-[5px]">
            <form
              onSubmit={handleSubmit(onSubmit, (err) => {
                console.log(err);
              })}
              className="w-full"
            >
              <Textinput
                label="Ticket Name"
                type="text"
                placeholder="Ticket Name"
                name="ticketname"
                register={register}
                error={errors.ticketname}
              />
              <Textarea
                label="Ticket description"
                id="pn4"
                placeholder="Short description of the issue..."
                className="mb-[20px] text-[16px]"
                name="ticketdescrition"
                register={register}
                error={errors.ticketdescrition}
              />
              <div>
                <label
                  className="form-label text-[16px] font-[600] cursor-default"
                  for="hf-picker"
                >
                  Promised Date and Time
                </label>
                <Flatpickr
                  className="form-control py-2"
                  value={picker}
                  onChange={(date) => setPicker(date)}
                  id="default-picker"
                />
              </div>
              <div className="grid grid-cols-12 items-center mt-[50px] mb-[15px]">
                <label
                  htmlFor=" hh"
                  className="col-span-12 form-label text-[16px] font-[600]"
                  for="hf-picker"
                >
                  Steps to Resolve
                </label>
                <div className="col-span-8 mb-[35px]">
                  <Select
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={furits[0]}
                    options={furits}
                    styles={styles}
                    id="hh"
                  />
                </div>
                <div className="col-span-4 flex flex-row-reverse mb-[35px]">
                  <Button
                    type="submit"
                    className="bg-[#6c757d] px-[15px] py-[6px] text-white"
                    href="#"
                  >
                    Add Task
                  </Button>
                </div>
                <div className="col-span-10">
                  {boxes
                    .sort((a, b) => a.order - b.order)
                    .map((box) => (
                      <DragDrop
                        key={box.id}
                        boxNumber={box.id}
                        handleDrag={handleDrag}
                        handleDrop={handleDrop}
                        boxdata={box.content}
                      />
                    ))}
                </div>
              </div>
              <Button className="bg-[#82b54b] px-[20px] py-[8px] text-white">
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
