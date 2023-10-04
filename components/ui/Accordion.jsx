import { useState } from "react";
import Icon from "@/components/ui/Icon";
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const [open, setOpen] = useState(false);

  const toggleAccrodian = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
      // setOpen(!open);
    }
  };

  return (
    <div>
      <div className="font-[600] text-[18px] mb-[15px] ml-[35px]">
        <label>Ticket Status</label>
      </div>
      {items.map((item, index) => (
        <div className="accordion shadow-base rounded-md" key={index}>
          <div
            className={`flex justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 px-8 py-4 ${
              activeIndex === index
                ? "bg-slate-50 rounded-t-md "
                : "bg-white rounded-md"
            }`}
            onClick={() => toggleAccrodian(index)}
          >
            <span>{item.title} </span>
            <span
              className={`text-slate-900 text-[22px] transition-all duration-300 h-5 ${
                activeIndex === index ? "rotate-180 transform" : ""
              }`}
            >
              <Icon icon="tabler:chevron-right" />
            </span>
          </div>

          {activeIndex === index && (
            <div
              className={`${
                index === activeIndex ? "" : "l"
              } text-sm text-slate-600 font-normal bg-white rounded-b-md`}
            >
              <div className="px-8 py-4"> {item.content} </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Accordion;
