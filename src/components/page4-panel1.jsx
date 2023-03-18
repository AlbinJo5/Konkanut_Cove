import React, { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import Image from "next/image";
import { useMediaQuery } from '../hooks/media-query';
import { Size } from "../constants/size";

function SubPanel({image,N,D,location,desc,price,showFull=false,showMd=true}){
  console.log(showMd,showFull)
    return(
        <div className="flex flex-col justify-center rounded-md overflow-hidden shadow-2xl" style={{maxWidth:(showMd||showFull)?300:200}}>
            <Image src={image} alt="" width={(showMd||showFull)?"300":"200"} height={(showMd||showFull)?"86":"50"} className="mb-3 object-cover"
            style={{maxHeight:(showMd||showFull)?86:50}}/>
            <div className="flex mb-5 px-5">
                <div className="flex text-sm lg:text-md grow">{location}</div>
                <div className="flex text-xs lg:text-sm">{D}D {N}N</div>
            </div>
            <div className="flex flex-col items-center mx-3">
                <div className="text-gray-500 text-xs lg:text-sm">
                    {desc}
                </div>
                <div className="flex w-full mb-5 items-end">
                    <button className="mr-5 lg:mr-10 rounded-lg py-3 bg-green-800 text-white font-bold disabled:bg-slate-500 grow text-xs lg:text-md">View Package</button>
                    <div className="flex flex-col text-green-800">
                        <div className="text-sm lg:text-lg font-bold">{price}</div>
                        <div className="text-xs lg:text-sm">per person</div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const PanelCarousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!paused) {
        let newSlide =
          currentSlide === data.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentSlide, paused, data]);

  const nextSlide = () => {
    let newSlide = currentSlide === data.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    let newSlide =
      currentSlide === 0 ? data.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };
  
  
  return (
    <div className="mt-8">
      <div className="max-w-lg flex overflow-hidden relative max-xs:justify-center ">
      
        <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
          {data.map((slide, index) => {
            return (
            <div className={
              index === currentSlide
                ? "rounded-md block w-full h-auto object-cover"
                : "hidden"
            } key={index} onMouseEnter={() => {
              setPaused(true);
            }}
            onMouseLeave={() => {
              setPaused(false);
            }}>
                <SubPanel {...slide} key={index}/>
            </div>
            );
          })}
        </Swipe>

        <div className="absolute w-full flex justify-center bottom-0">
          {data.map((element, index) => {
            return (
              <div
                className={
                  index === currentSlide
                    ? "h-1 w-10 bg-blue-700 rounded-lg mx-2 mb-2 cursor-pointer"
                    : "h-1 w-10 bg-gray-400 rounded-lg mx-2 mb-2 cursor-pointer"
                }
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function Page4Panel1 ({subPanelDatas}) {
  const showMd = useMediaQuery(0,Size.md+120)
 const showFull = useMediaQuery(Size.md+121,Infinity);
 console.log("-----",showFull)
  return (
    <div className="flex max-xs:flex-col max-xs:items-center border-[1px] border-gray-100 shadow-2xl w-full py-5 pt-10">
        <div className="flex flex-col max-xs:items-center text-green-800 ml-5 mr-16">
            <div className="text-sm grow">INTRODUCING</div>
            <div className="text-4xl font-bold mt-3 box-border">FLEXI</div>
            <div className="text-4xl font-bold mb-3">PACKAGES</div>
            <div className="text-sm text-gray-400 my-2">Now Travel without any hassles!</div>
            <button className="w-full mt-2 rounded-lg py-3 bg-green-800 text-white font-bold disabled:bg-slate-500 grow max-xs:hidden">View Package</button>
        </div>
        {showMd ? <PanelCarousel data={subPanelDatas}/>: subPanelDatas.map((data,index)=>
            <div className="flex grow" key={index}>
                <SubPanel {...data} key={index} showMd={showMd} showFull={showFull}/>
            </div>
        )}
        <button className="w-[70%] mt-3 rounded-lg py-3 bg-green-800 text-white font-bold disabled:bg-slate-500 grow xs:hidden">View Package</button>
    </div>
  )
}
