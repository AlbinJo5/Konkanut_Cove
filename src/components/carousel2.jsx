import { useMediaQuery } from "../hooks/media-query";
import clsx from "clsx";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import { Size } from "../constants/size";

const Carousel2 = ({ data, scale = null }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const isXS = useMediaQuery(0, Size.xs);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!paused) {
        let newSlide = currentSlide === data.length - 1 ? 0 : currentSlide + 1;
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
    let newSlide = currentSlide === 0 ? data.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className={clsx("mt-8 flex justify-center", scale)}>
      <div className={clsx("max-w-lg w-full relative flex flex-col")}>
        <div className="max-w-lg h-full mb-5 max-xs:h-64 flex overflow-hidden">
          <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
            {data.map((slide, index) => {
              return (
                <Image
                  src={slide.image}
                  alt="This is a carousel slide"
                  key={index}
                  className={clsx(
                    index === currentSlide
                      ? "rounded-md block w-full h-auto object-cover"
                      : "hidden",
                    "object-fit min-w-[350px] min-h-[28px] max-w-[350px] max-h-[288px]"
                  )}
                  width="288"
                  height="288"
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

        <div className="w-full items-center flex justify-between ">
          {data.map((element, index) => {
            return (
              <div
                className={clsx(
                  index === currentSlide
                    ? "border-blue-700 border-4 mb-3 cursor-pointer w-[60px] h-[40px] relative rounded-sm overflow-hidden"
                    : "border-none mb-3 cursor-pointer w-[60px] h-[40px] relative rounded-md overflow-hidden",
                  "object-fit"
                )}
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                }}
              >
                <Image src={element.image} fill alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel2;
