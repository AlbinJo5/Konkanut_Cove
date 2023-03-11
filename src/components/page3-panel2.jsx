import { Calendar } from '@icon-park/react'
import moment from 'moment/moment';
import Image from 'next/image';
import React from 'react'

export default function Page3Panel2({image,imageWidth=150,imageHeight=100,title,location,distance,fromLocation,fromDate,toDate,includes=null,room_type=null}){
  const fromDateFmt = moment(fromDate).format("MMM Do YY");
  const toDateFmt = moment(toDate).format("MMM Do YY");
  return (
    <div className="flex items-center bg-white border-[1px] shadow-xl border-gray-200 px-5 py-3 rounded-md">
            <Image src={image} width={""+imageWidth} height={""+imageHeight} className="rounded-md"/>
        <div className="flex flex-col ml-3">
            <div className="text-lg">{title}</div>
            <div className="text-sm text-gray-200">{location}</div>
            <div className="text-sm text-gray-200 mb-3">{distance} from {fromLocation}</div>
            <div className="flex items-center mb-3">
                <Calendar/>
                <span className="text-sm mx-2 border-box">{fromDateFmt}</span>
                <Calendar/>
                <span className="text-sm mx-2 border-box">{toDateFmt}</span>
            </div>
            {includes && <div className="flex flex-col">
                <div className="text-sm text-gray-200">Includes:{includes.map((include)=>include+" ")}</div>
                <div className="text-sm text-gray-200 mb-3">Room type:{room_type}</div>
            </div>}           

        </div>
    </div>
  )
}
