import { useEffect, useRef, useState } from "react";
import Carousel1 from "./carousel1";

export default function ImageModal({images,showModal,setShowModal}){
    const ref = useRef(null);
    const closeModal = (e)=>{
        if (ref.current && !ref.current.contains(e.target)) {
            setShowModal(false);
          }
    }
    
    if(!showModal)return null;
    return(
        <div className="fixed z-50 inset-0 flex justify-center items-center px-1 bg-black bg-opacity-25" onClick={closeModal}>
            <div className="max-sm:w-[100vh]" ref={ref}><Carousel1 data={images} scale/></div>
        </div>
    )
}