"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import Dropdown from "@/components/ui/Dropdown";
import { useState } from "react";

export default function Todo({ todocontent, tododate, todoimg }) {
  const [activeRBtn, setActiveRBtn] = useState(null);
  const [activeLBtn, setActiveLBtn] = useState(null);

  const handleAcitveRBtnClicked = () => {
    if (activeRBtn) {
      setActiveRBtn(false);
    } else {
      setActiveRBtn(true);
    }
  };

  const handleAcitveLBtnClicked = () => {
    if (activeLBtn) {
      setActiveLBtn(false);
    } else {
      setActiveLBtn(true);
    }
  };

  return (
    <div className="grid grid-cols-12  px-[10px] py-[10px] rounded-[1px]">
      <div className="col-span-9 flex justify-between border-r outline outline-1 outline-[#d8dfed] px-[10px] py-[10px]">
        <div className="flex">
          <div
            className="text-[23px]  mr-[5px] cursor-pointer"
            onClick={() => handleAcitveRBtnClicked()}
          >
            {activeRBtn ? (
              <div className="text-blue-600">
                <Icon icon="icon-park-solid:check-one" />
              </div>
            ) : (
              <div className="text-blue-100">
                <Icon icon="ic:round-lens" />
              </div>
            )}
          </div>
          <div
            className="text-[23px]  mr-[20px] cursor-pointer"
            onClick={() => handleAcitveLBtnClicked()}
          >
            {activeLBtn ? (
              <div className="text-blue-600">
                <Icon icon="icon-park-solid:check-one" />
              </div>
            ) : (
              <div className="text-green-300">
                <Icon icon="ic:round-lens" />
              </div>
            )}
          </div>
          <div>{todocontent}</div>
        </div>
        <div>
          <img
            src={todoimg}
            alt=""
            className="block w-[25px] object-cover rounded-full cursor-pointer"
          />
        </div>
      </div>
      <div className="col-span-3 flex justify-between items-center outline outline-1 outline-[#d8dfed] border-r-0  px-[20px]">
        <div>{tododate}</div>
        <div className="text-[30px] text-green-700 cursor-pointer">
          <Dropdown
            classMenuItems=" w-[130px]"
            label={
              <span className="text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400">
                <Icon icon="heroicons-outline:dots-vertical" />
              </span>
            }
          >
            <div>
              <Menu.Item
                onClick={() =>
                  dispatch(
                    toggleEditModal({
                      editModal: true,
                      task,
                    })
                  )
                }
              >
                <div
                  className="hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white
                                w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm dark:text-slate-300  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center
                                    capitalize rtl:space-x-reverse"
                >
                  <span className="text-base">
                    <Icon icon="heroicons-outline:pencil-alt" />
                  </span>
                  <span>Edit</span>
                </div>
              </Menu.Item>
              <Menu.Item onClick={() => dispatch(deleteTask(id))}>
                <div
                  className="hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white
                                w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm dark:text-slate-300  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center
                                    capitalize rtl:space-x-reverse"
                >
                  <span className="text-base">
                    <Icon icon="heroicons-outline:trash" />
                  </span>
                  <span>Delete</span>
                </div>
              </Menu.Item>
            </div>
          </Dropdown>
        </div>
        <div className="cursor-pointer">
          <Dropdown
            classMenuItems=" w-[130px]"
            label={
              <span className="text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400">
                <Icon icon="heroicons:bars-4-20-solid" />
              </span>
            }
          >
            <div>
              <Menu.Item
                onClick={() =>
                  dispatch(
                    toggleEditModal({
                      editModal: true,
                      task,
                    })
                  )
                }
              >
                <div
                  className="hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white
                                w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm dark:text-slate-300  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center
                                    capitalize rtl:space-x-reverse"
                >
                  <span className="text-base">
                    <Icon icon="heroicons-outline:pencil-alt" />
                  </span>
                  <span>Edit</span>
                </div>
              </Menu.Item>
              <Menu.Item onClick={() => dispatch(deleteTask(id))}>
                <div
                  className="hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white
                                w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm dark:text-slate-300  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center
                                    capitalize rtl:space-x-reverse"
                >
                  <span className="text-base">
                    <Icon icon="heroicons-outline:trash" />
                  </span>
                  <span>Delete</span>
                </div>
              </Menu.Item>
            </div>
          </Dropdown>
          {/* <Icon icon="heroicons:bars-4-20-solid" /> */}
        </div>
      </div>
    </div>
  );
}
