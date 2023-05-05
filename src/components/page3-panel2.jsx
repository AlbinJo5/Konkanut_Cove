import { Calendar } from '@icon-park/react'
import moment from 'moment/moment';
import Image from 'next/image';
import React, { useState } from 'react'
import { Selector } from './selector';

export default function Page3Panel2({ selected, image, id, imageWidth = 150, imageHeight = 100, title, handleSelect }) {
  return (
    <div className="flex max-sm:flex-col items-center bg-white border-[1px] shadow-xl border-gray-200 px-5 py-3 rounded-md max-sm:w-fit"
      onClick={() => {
        if (selected) return
        handleSelect(id, title)
      }}
    >
      <Image src={image} alt="picture" width={"" + imageWidth} height={"" + imageHeight} className="rounded-md" />
      <div className="flex flex-col ml-3 mt-3">
        <div className="flex  gap-3 ">
          <div className="text-lg grow">{title}</div>
          <Selector selected={selected} />
        </div>
        {/* <div className="text-sm text-gray-300">{location}</div> */}
        {/* <div className="text-sm text-gray-300 mb-3">{distance} from {fromLocation}</div> */}
        {/* <div className="flex items-center mb-3">
                <Calendar/>
                <span className="text-sm mx-2 border-box">{fromDateFmt}</span>
                <Calendar/>
                <span className="text-sm mx-2 border-box">{toDateFmt}</span>
            </div> */}
        {/* {includes && <div className="flex flex-col">
                <div className="text-sm text-gray-300">Includes: <span className="text-sm text-gray-700">{includes.map((include)=>include+" ")}</span></div>
                <div className="text-sm text-gray-300 mb-3">Room type: <span className="text-sm text-gray-700">{room_type}</span></div>
            </div>}            */}

      </div>
    </div>
  )
}
