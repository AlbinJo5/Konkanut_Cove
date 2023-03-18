import React, { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import { LeftC, RightC } from "@icon-park/react";
import Image from "next/image";
import clsx from "clsx";

const Carousel1 = ({ data,scale=false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const CarouselData=data;
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
      <div className="flex w-full h-72 sm:w-[400px] lg:w-[512px] lg:h-[360px] overflow-hidden relative">
      
        <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
          {data.map((slide, index) => {
            return (
              <Image
                    src={slide.image}
                    fill
                    alt="This is a carousel slide"
                    key={index}
                    className={clsx(
                      index === currentSlide
                        ? "rounded-md block w-full h-auto object-cover"
                        : "hidden",
                      "object-fit",
                      "h-[unset]"
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

        <div className="absolute w-full flex justify-center bottom-0">
          {data.map((element, index) => {
            return (
              <div
                className={
                  index === currentSlide
                    ? "h-1 w-10 bg-blue-700 rounded-lg mx-2 mb-2 cursor-pointer"
                    : "h-1 w-10 bg-white rounded-lg mx-2 mb-2 cursor-pointer"
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

export default Carousel1;
