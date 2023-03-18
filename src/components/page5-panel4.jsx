import { Size } from '../constants/size';
import { useMediaQuery } from '../hooks/media-query';
import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Page5Panel4({images,iwidth=300,iheight=500}){
    const isMd = useMediaQuery(0,Size.md);
    const [showModal, setShowModal] = useState(false);
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 grid-rows-2 p-5 bg-white gap-4">
        {!isMd?images.map(({image},index)=>
          <div className="relative h-[300px] lg:h-[250px] sm:min-w-[350px]" key={index}>
              <Image src={image} fill className="object-fit" alt="" key={index} /> 
          </div>
        ):
        <div className="relative h-[300px] lg:h-[250px] rounded-md hover:scale-95 grow sm:min-w-[500px]" onClick={setShowModal}>
          <div className="absolute z-10  w-full h-full text-white text-5xl flex justify-center items-center font-medium">{images.length}+</div>
          <div className="absolute z-20 w-full h-full bg-black bg-opacity-50 rounded-md"></div>
          <Image fill src={images[0].image} alt="" className="absolute z-0"/>  
        </div>
        }
    </div>
  )
}
