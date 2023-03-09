import Image from "next/image";
import React, { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";

const Carousel2 = ({ data }) => {
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
    <div className="mt-8 flex justify-center">
      <div className="max-w-lg w-full h-[370px] xs:w-[512px] xs:h-[370px] overflow-hidden relative">
      
        <div className="max-w-lg w-full xs:w-[512px] h-72 flex overflow-hidden relative">
            <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
              {data.map((slide, index) => {
                return (
                  <Image
                    src={slide.image}
                    fill
                    alt="This is a carousel slide"
                    key={index}
                    className={
                      index === currentSlide
                        ? "rounded-md block w-full h-auto object-cover"
                        : "hidden"
                    }
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

        <div className="absolute w-full items-center flex justify-between bottom-0">
          {data.map((element, index) => {
            return (
              <div
                className={
                  index === currentSlide
                    ? "border-blue-700 border-4 mb-3 cursor-pointer w-[80px] h-[60px] xs:w-[80px] xs:h-[60px] relative rounded-sm overflow-hidden"
                    : "border-none mb-3 cursor-pointer w-[80px] h-[60px] xs:w-[80px] xs:h-[60px] relative rounded-md overflow-hidden"
                }
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                }}
              >
                <Image src={element.image} fill alt=""/>
              </div>
            );
          })}
        </div>

        
      </div>
    </div>
  );
};

export default Carousel2;
