import clsx from "clsx";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import { Vector0,Vector1,Vector2,Vector3,Vector4 } from '../svgrs/carousels';

const vectors=[Vector0,Vector1,Vector2,Vector3,Vector4]

const Carousel3 = ({ data }) => {
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
  console.log(data)
  return (
    <div className="mt-8">
      <div className="max-w-lg flex relative">
      
        <div className="max-w-lg h-72 max-xs:h-64 flex overflow-hidden">
            <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
              {data.map((slide, index) => {
                return (
                  <Image
                    src={slide.image}
                    width="288"
                    height="288"
                    alt="This is a carousel slide"
                    key={index}
                    className={clsx(
                      index === currentSlide
                        ? "rounded-md block w-full h-auto object-cover"
                        : "hidden",
                    )}
                    onMouseEnter={() => {
                      setPaused(true);
                    }}
                    onMouseLeave={() => {
                      setPaused(false);
                    }}
                  />
                );
              })}
            </Swipe>
        </div>

        <div className="absolute w-full items-center flex justify-between xs:bottom-[-20%] bottom-0">
          {data.map((element, index) => {
            const Logo=vectors[index];
            return (
              <React.Fragment key={index}>
                <div key={index} className={"p-2 rounded-md "+(index === currentSlide?"bg-green-800":"bg-white")} onClick={() => {
                  setCurrentSlide(index);}}>
                  <Logo className={"cursor-pointer w-5 h-5  relative stroke-blue-500 "+(index === currentSlide?"bg-green-800":"bg-white")}/>
                </div>
                {(index<data.length-1) && <div className={" h-2 grow "+ (index === currentSlide?"bg-green-800 border-r-[20px] border-white":"bg-white border-r-[20px]")}></div>}
              </React.Fragment>
            );
            
          })}
        </div>

        
      </div>
    </div>
  );
};

export default Carousel3;
