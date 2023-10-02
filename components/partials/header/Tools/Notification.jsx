import React from "react";
import Dropdown from "@/components/ui/Dropdown";
// import Icon from "@/components/ui/Icon";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { notifications } from "@/constant/data";
import { Icon } from '@iconify/react';

const notifyLabel = () => {
  return (
    <span className="flex lg:h-[32px] lg:w-[62px] text-slate-900 lg:dark:bg-slate-900 text-white cursor-pointer rounded-full text-[20px] items-center justify-center mr-[22px]">
      <sapn><Icon icon="heroicons-outline:bell" className="animate-tada" /></sapn>
      <span className="h-4 w-4 bg-[#04448b] text-[10px] font-semibold flex items-center justify-center rounded-full text-white z-[99]">
        1
      </span>
    </span>
  );
};

const Notification = () => {
  return (
    <Dropdown classMenuItems="md:w-[300px] top-[52px]" label={notifyLabel()}>
      <div className="text-center px-4 py-4 border-b border-slate-100 bg-[#022954] text-white">
        <div className="text-[16px] text-white  font-medium leading-6">
          Inbox
        </div>
        {/* <div className="text-slate-800 dark:text-slate-200 text-xs md:text-right">
          <Link href="/notifications" className="underline">
            View all
          </Link>
        </div> */}
      </div>
      <div className="divide-y border-b border-slate-100 divide-slate-100 dark:divide-slate-800">
        {notifications?.map((item, i) => (
          <Menu.Item key={i}>
            {({ active }) => (
              <div
                className={`${
                  active
                    ? "bg-slate-100 dark:bg-slate-700 dark:bg-opacity-70 text-slate-800"
                    : "text-slate-600 dark:text-slate-300"
                } block w-full px-4 py-2 text-sm  cursor-pointer`}
              >
                <div className="flex ltr:text-left rtl:text-right">
                  <div className="flex-none ltr:mr-3 rtl:ml-3">
                      <div className='text-[21px] text-green-600 mr-[5px] cursor-pointer'><Icon icon="icon-park-solid:check-one" /></div>
                  </div>
                  <div className="flex-1">
                    <div
                      className={`${
                        active
                          ? "text-slate-600 dark:text-slate-300"
                          : " text-slate-600 dark:text-slate-300"
                      } text-sm`}
                    >
                      {item.title}
                    </div>
                    {/* <div
                      className={`${
                        active
                          ? "text-slate-500 dark:text-slate-200"
                          : " text-slate-600 dark:text-slate-300"
                      } text-xs leading-4`}
                    >
                      {item.desc}
                    </div> */}
                    <div className="text-slate-400 dark:text-slate-400 text-xs mt-1">
                      3 min ago
                    </div>
                  </div>
                  {item.unread && (
                    <div className="flex-0">
                      <span className="h-[10px] w-[10px] bg-danger-500 border border-white dark:border-slate-400 rounded-full inline-block"></span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </Menu.Item>
        ))}
      </div>
      <div className="text-center px-2 py-2"><Link className="flex justify-center items-center gap-2 px-4 py-2 bg-[#f8f9fa] font-[600]" href="#"><Icon icon="fa-solid:eye"></Icon><span>View All</span></Link></div>
    </Dropdown>
  );
};

export default Notification;
