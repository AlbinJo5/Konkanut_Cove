import React, { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import { ArrowLeft, ArrowRight } from "@icon-park/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { routes } from "@/routes";

const CarouselLarge = ({ data, id, isLeft = false, title, desc }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (!paused) {
  //       let newSlide = currentSlide === data.length - 1 ? 0 : currentSlide + 1;
  //       setCurrentSlide(newSlide);
  //     }
  //   }, 3000);
  //   return () => clearInterval(intervalId);
  // }, [currentSlide, paused, data]);

  // const nextSlide = () => {
  //   let newSlide = currentSlide === data.length - 1 ? 0 : currentSlide + 1;
  //   setCurrentSlide(newSlide);
  // };

  // const prevSlide = () => {
  //   let newSlide = currentSlide === 0 ? data.length - 1 : currentSlide - 1;
  //   setCurrentSlide(newSlide);
  // };

  const router = useRouter();

  return (
    <div
      className={
        "min-w-[80vw]  sm:px-4 px-2   items-center      " +
        (isLeft ? "sm:pl-20" : "sm:pr-20")
      }
      onClick={() => {
        router.push(routes.packages_palces + id);
      }
      }
    >
      <div className=" h-[300px] max-w-[1000px]  relative ">
        {/* <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}> */}
        {/* {data.map((slide, index) => {
            return (
              <Image
                src={slide}
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
          })} */}
        <Image
          src={data}
          fill
          alt="This is a carousel slide"
          className={
            "   rounded-md block w-full h-auto object-cover"
          }
          onMouseEnter={() => {
            setPaused(true);
          }}
          onMouseLeave={() => {
            setPaused(false);
          }}
        />

        {/* </Swipe> */}
        <div
          className={
            "absolute h-full z-50  " +
            (isLeft
              ? "sm:left-[-20px] left-[-10px]"
              : "sm:right-[-20px] right-[-10px]")
          }
        >
          <div
            className={
              " flex items-end sm:items-center h-full " +
              (isLeft ? "justify-start" : "justify-end")
            }
          >
            <div
              className=" p-2 sm:p-5 rounded-md sm:rounded-full bg-green-500"
            >
              {isLeft ? (
                <ArrowLeft size="30" fill="white" />
              ) : (
                <ArrowRight size="30" fill="white" />
              )}
            </div>
          </div>
        </div>


        <div
          className={
            "absolute w-full sm:max-w-[60%] sm:bottom-[15%] z-10 " +
            (isLeft ? "sm:left-[30%]" : "sm:left-[10%]")
          }
        >
          <div className="flex flex-col max-sm:p-3 px-5">
            <div className="text-4xl font-bold text-white mb-5 "
              style={{
                textShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
              }}
            >
              {title}
            </div>
            <div
              className={
                "text-sm text-white mb-4 break-all max-xs:grow" +
                (isLeft ? "sm:max-w-[70%]" : "sm:max-w-[70%]")
              }
              style={{
                textShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
              }}
            >
              {desc}
            </div>
            <div className="flex w-min">
              {/* {data.map((element, index) => {
                return (
                  <div
                    className={
                      index === currentSlide
                        ? "h-5 w-5 bg-gray-500 rounded-full mx-2 mb-2 cursor-pointer"
                        : "h-5 w-5 bg-gray-400 rounded-full mx-2 mb-2 cursor-pointer"
                    }
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                    }}
                  ></div>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselLarge;
