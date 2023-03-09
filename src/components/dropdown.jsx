import { Direction, Down } from "@icon-park/react";
import { useState, useRef, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Dropdown = ({ width = "100px", name = "DropDown", options = [], direction = Direction.Left, isDatePicker }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const toggleDropdown = () => setIsOpen(!isOpen);

  const dirClass = direction === Direction.Left ? "left-0" : "right-0";
  const overlayRef = useRef(null);
  const menuRef = useRef(null)

  const handleClickOutside = (event) => {
    if(overlayRef?.current?.contains(event.target)){
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative bg-white z-0">
      <button
        onClick={toggleDropdown}
      >
        <span className=" font-bold text-green-800 w-full">{name}</span>
        <Down size={20} fill="#4b5563" className="mt-[1px]" />
      </button>
      {isOpen && 
          <>
          {!isDatePicker?<ul className={"absolute z-20 py-2 bg-white border rounded shadow-lg " + dirClass} ref={menuRef}>
            {options.map((option, index) => (
              <li key={index} className="px-4 py-2 w-80 hover:bg-gray-100 cursor-pointer">
                {option}
              </li>
            ))}
          </ul>:
          <div className="absolute z-20 py-2 bg-white border rounded shadow-lg "><ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></div>
          
          }
          <div
            ref={overlayRef}
            className="fixed inset-0 z-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          ></div>
        </>
      }
    </div>
  );
};


