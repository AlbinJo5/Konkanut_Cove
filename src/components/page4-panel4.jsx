import { LocalTwo } from "@icon-park/react"
import moment from "moment"
import Image from "next/image"
import { Cancellations, Landmarks } from "./page4-panel3"


export default function Page4Panel4 ({images,hotelName,address,until,after,importantNotes,bedTypes,landmarks,options}) {
    if (images.length<7)throw Error("Not enough images!")
  return(
      <div className="flex flex-col border-[1px] border-gray-200 shadow-2xl py-5 rounded-lg px-10">
          <div className="grid grid-rows-2 grid-flow-col gap-4 w-full h-[250px]">
            <div className="row-span-2 col-span-3 relative"><Image src={images[0].image} alt="grid pictures" fill className="rounded-md"/></div>
            {images.slice(1,images.length).map(({image},index)=>
                <div className="col-span-2 relative"  key={index}><Image src={image} alt="grid pictures" fill className="rounded-md"/></div>
            )}
          </div>
            <div className="flex items-start mt-4 w-full">
              <div className="flex flex-col w-full">
                <div className="text-xl font-bold">{hotelName}</div>
                <div className="text-sm text-gray-500">{address}</div>
              </div>

              <div className="flex flex-row-reverse w-full">
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

            </div>

            <div className="flex">
              <div className="flex flex-col mt-4 grow">
                  <div className="flex mb-2">
                    <Cancellations until={until} after={after}/>
                  </div>
                  <Landmarks landmarks={landmarks}/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <ul className="flex h-fit mb-5 grow">
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
                <button className="bg-green-800 h-[50px] min-w-[200px] font-bold text-white px-5 py-2 rounded-md hover:transition-transform hover:scale-110 hover:duration-750">Know More</button>
            </div>
            </div>

      </div>
  )
}