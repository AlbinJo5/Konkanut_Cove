import Image from 'next/image'
import React, { useState } from 'react'
import ImageModal from './image-modal';

export default function Page5Panel1({imageData,count}){
    const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col sm:mx-10 max-xs:mx-5">
        <ImageModal images={imageData} showModal={showModal} setShowModal={setShowModal}/>
        <div className="text-md font-bold">
            One Experience is all it takes
        </div>
        <div className="text-sm max-w-[840px]">
            We give you more of what you want and less of what you don’t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ,We give you more of what you want and less of what you don’t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ,
        </div>
        <div className="my-4 font-bold">Our Photo gallery on trip</div>
        <ul className="flex">
            <div className="relative h-[300px] lg:h-[250px] rounded-md hover:scale-95 grow sm:min-w-[500px]" onClick={setShowModal}>
                <div className="absolute z-10  w-full h-full text-white text-5xl flex justify-center items-center font-medium">{count}+</div>
                <div className="absolute z-20 w-full h-full bg-black bg-opacity-50 rounded-md"></div>
                <Image fill src={imageData[0].image} alt="" className="absolute z-0"/>  
            </div>
            
            {imageData.slice(1).map((image,index)=>
                <li className="h-[300px] lg:h-[250px] relative grow rounded-md flex ml-3 max-[900px]:hidden" key={index}>
                    <Image fill src={image.image} alt=""/>
                </li>
            )}
        </ul>
    </div>
  )
}
