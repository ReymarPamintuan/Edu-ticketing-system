import * as React from "react";
import Dropdown from "@/components/ui/Dropdown";
import Icon from "@/components/ui/Icon";
import { Menu } from "@headlessui/react";
import { CompanyName } from "@/constant/data";
import { useState } from "react";
import Link from "next/link";

export default function SelectCompany() {

  const [dropBoxValue, setDropBoxValue] = React.useState(CompanyName[2].value);
  const [activeIndex, setActiveIndex] = useState(2);

  const handleClick = (item, i) => {
    setDropBoxValue(item.value);
    setActiveIndex(i);
  };

  const desplayName = () => {
    return (
      <span className="lg:h-[32px] lg:w-[32px] text-white cursor-pointer text-[16px] flex items-center justify-center mr-[30px]">
        <span className="mr-[10px]">
          <Icon icon="fa-regular:building" />
        </span>
        <span className="font-[600]">{ dropBoxValue }</span>
        <span className="text-base inline-block ltr:ml-[10px] rtl:mr-[10px]">
          <Icon icon="heroicons-outline:chevron-down"></Icon>
        </span>
      </span>
    );
  };

  return (
    <Dropdown classMenuItems="md:w-[200px] w-min top-[52px]" label={desplayName()}>
        {CompanyName?.map((item, i) => {
          return (
            <Menu.Item key={i}>
              {({ active }) => (
                <div className={`${ active ? "bg-slate-100 text-slate-800" : "text-slate-600" } block w-full px-4 py-4 text-sm  cursor-pointer`}>
                  <div className="flex items-center gap-2 text-slate-800 text-sm tracking-[1px] font-medium mb-1`"
                       onClick={() => handleClick(item, i)}>
                    <Icon icon="ri:check-fill" className={`${ activeIndex === i ? "text-black" : "text-white" } text-[21px]`} />
                    <div className="item_name">{ item.name }</div>
                  </div>
              </div>
              )}
            </Menu.Item>
          );
        })}
        <div className="border-t border-slate-100 px-4 py-4 flex items-center gap-2 tracking-[1px]">
          <Icon icon="mdi:plus" className="text-[21px]" />
          <Link href="#">create company</Link>
        </div>
    </Dropdown>
  );
};
