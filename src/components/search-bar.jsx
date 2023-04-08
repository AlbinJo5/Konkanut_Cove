import ReactDatePicker from "react-datepicker";
import Dropdown from "react-dropdown";
import { useState } from "react";
import { Calendar } from "@icon-park/react";

const dropdowns = [
  "Location",
  // "Check In",
  // "Check Out",
  "No of People",
  "Rooms",
];
const text = [
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
];
const options = [
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
];

export default function SearchBar({
  locationOptions = [],
  checkInOptions,
  width = "100%",
}) {
  const [startDate, setStartDate] = useState(new Date());
  const [index, setIndex] = useState(null);
  return (
    <div className="  grid grid-cols-2 shadow-2xl max-md:grid-rows-2 md:grid-cols-4  w-full rounded-md justify-items-center gap-0 px-1 py-5 bg-white ">
      {dropdowns.map((dd, ind) =>
        (() => {
          if (["Check In", "Check Out"].includes(dd))
            return (
              <div
                className="flex flex-col max-md:mb-3 w-full px-3  relative"
                key={ind}
              >
                <div
                  className="flex justify-center items-center mt-2"
                  onClick={() => setIndex(ind)}
                >
                  <div className="font-bold text-green-800 grow">{dd}</div>
                  <Calendar />
                </div>
                {index === ind ? (
                  <>
                    <div
                      className="fixed z-0 w-full h-screen inset-0"
                      onClick={() => setIndex(null)}
                    ></div>
                    <div className="absolute z-20">
                      <div className="p-3 bg-white">
                        <div
                          className="flex justify-center items-center mt-2"
                          onClick={() => setIndex(ind)}
                        >
                          <div className="font-bold text-green-800 grow">
                            {dd}
                          </div>
                          <Calendar />
                        </div>
                        <ReactDatePicker
                          key={ind}
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          className="w-[150px] rounded-md border-2 border-gray-400"
                        />
                      </div>
                    </div>
                  </>
                ) : null}
                <div className="text-slate-500 w-max text-sm">{text[ind]}</div>
              </div>
            );
          else
            return (
              <div className="flex  flex-col max-md:mb-3 w-full px-3" key={ind}>
                <Dropdown options={options} value={null} placeholder={dd} />
                <div className="text-slate-500 w-max text-sm  ">
                  sss
                  {text[ind]}
                </div>
              </div>
            );
        })()
      )}
      <div className=" flex w-full justify-start items-center">
        <button className="max-sm:mx-5 max-sm:mt-4 bg-green-800 hover:bg-green-600 rounded-lg font-bold text-white h-min px-5 py-2">
          Search
        </button>
      </div>
    </div>
  );
}
