import ReactDatePicker from "react-datepicker";
import Dropdown from "react-dropdown";
import { useState } from "react";
import { Calendar } from "@icon-park/react";
import { useQuery } from "@tanstack/react-query";
import { getAllData } from "@/utils/firebase_data_handler";
import { useEffect } from "react";
import { useRouter } from "next/router";



export default function SearchBar({
  locationOptions = [],
  checkInOptions,
  width = "100%",
}) {
  const [startDate, setStartDate] = useState(new Date());
  const [index, setIndex] = useState(null);

  const router = useRouter();
  const dropdowns = [
    "Location",
    "For",
  ];
  // const text = [
  //   "dssdsd"
  // ];


  const options = {
    0: [
    ],
    1: [
      {
        value: "hotels",
        label: "Hotels",
      },
      {
        value: "packages",
        label: "Packages",
      },
    ],
  }

  const places = useQuery(
    ['places'],
    () => {
      return getAllData('Places')
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  )

  options[0] = places.data?.data?.map((place) => {
    return {
      value: place.id,
      label: place.title
    }
  })

  useEffect(() => {
    // get current location and for from session storage
    sessionStorage.getItem('location') === null ?
      // do nothing
      sessionStorage.setItem('location', "")
      : sessionStorage.getItem('location')
    sessionStorage.getItem('for') === null ? sessionStorage.setItem('for', 'hotels') : sessionStorage.getItem('for')
  }, [])


  return (
    <div className="  grid grid-cols-2 shadow-2xl max-md:grid-rows-1 md:grid-cols-3  w-full rounded-md justify-items-center gap-0  px-3 py-2 bg-white ">
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
                {/* <div className="text-slate-500 w-max text-sm">{text[ind]}</div> */}
              </div>
            );
          else
            return (
              <div className="flex  flex-col max-md:mb-3 w-full px-3" key={ind}>
                {
                  places.isLoading ? <div className="text-slate-500 w-max text-sm  ">Loading...</div> : <Dropdown options={options[ind]}
                    onChange={(data) => {
                      // use session storage to store the data
                      if (ind === 0) {
                        sessionStorage.setItem('location', data.value)
                      }
                      else {
                        sessionStorage.setItem('for', data.value)
                      }
                    }} value={
                      ind === 0 ? sessionStorage.getItem('location') : sessionStorage.getItem('for')
                    } placeholder={dd} />
                }

                {/* <div className="text-slate-500 w-max text-sm  ">
                  sss
                  {text[ind]}
                </div> */}
              </div>
            );
        })()
      )}
      <div className=" flex w-full justify-start items-center">
        <button className="max-sm:mx-5 max-sm:mt-4 bg-green-800 hover:bg-green-600 rounded-lg font-bold text-white h-min px-5 py-2" onClick={() => {
          // router.push(
          //   `/${sessionStorage.getItem('for')}`
          // )

          // if for is hotels then redirect to hotels page
          if (sessionStorage.getItem('for') === 'hotels') {
            router.push(
              `/hotels`
            )
          }
          else {
            // if location is not selected then redirect to packages page , else redirect to place/[location]
            if (sessionStorage.getItem('location') === null) {
              router.push(
                `/packages`
              )
            }
            else {
              router.push(
                `/packages/place/${sessionStorage.getItem('location')}`
              )
            }
          }
        }} >
          Search
        </button>
      </div>
    </div>
  );
}
