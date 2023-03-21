import { LocalTwo } from "@icon-park/react"
import moment from "moment"
import Image from "next/image"
import { useState } from "react"
import ImageModal from "./image-modal"
import { Cancellations, ImageGrid, Landmarks } from "./page4-panel3"


const OptionGrid = ({options})=>{
  return(
    <ul className="flex h-fit mb-5 max-sm:mt-5 grow">
      {options.map((option,ind)=>{
          const Icon = option.icon;
        return( 
          <li key={ind} className="mx-2 flex flex-col justify-center items-center grow">
            <div key={ind} className="border-gray-400 border-[1px] rounded-lg px-3 py-2">
                  <Icon size="24" className="stroke-current text-gray-400 "/>
            </div>
            <div className="text-gray-400 text-xs mt-1">{option.name}</div>
          </li>
          )
      })}
  </ul>
  )
}

const MapAC = ()=>{
  return(
    <div className="flex flex-row-reverse">
      <div className="ml-5 flex flex-col items-center">
        
        <div className="relative w-12 h-6">
          <div className="absolute z-0 w-10 bg-gray-300 h-5"></div>
          <div className="absolute z-10 top-[-4px] bg-gray-400 rounded-sm w-5 h-7"></div>
        </div>  
        <div className="text-green-800 text-xs pl-1">AC</div>
      </div>
      <div className="ml-5 flex flex-col">
        <LocalTwo size="24" className="stroke-current text-green-800 "/>
        <div className="text-green-800 text-xs">Map</div>
      </div>
    </div>
  );
}

export default function Page4Panel4 ({images,hotelName,address,until,after,landmarks,options}) {
  const [showModal, setShowModal] = useState(false);

    if (images.length<7)throw Error("Not enough images!")
  return(
      <div className="flex flex-col border-[1px] border-gray-200 shadow-2xl py-5 rounded-lg px-10">
          <ImageModal images={images} showModal={showModal} setShowModal={setShowModal}/>
          <ImageGrid images={images}  hotelName={hotelName} address={address} noCol setShowModal={setShowModal}>
            <MapAC/>
          </ImageGrid>
            
            <div className="flex max-sm:flex-col">
              <div className="flex flex-col mt-4 grow">
                  <div className="flex mb-2">
                    <Cancellations until={until} after={after}/>
                  </div>
                  <Landmarks landmarks={landmarks}/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <OptionGrid options={options}/>
                <button className="bg-green-800 hover:bg-green-600 h-[50px] min-w-[200px] font-bold text-white px-5 py-2 rounded-md hover:transition-transform hover:scale-110 hover:duration-750">Know More</button>
            </div>
            </div>

      </div>
  )
}