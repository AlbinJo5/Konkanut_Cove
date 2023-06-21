import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page5Panel3({
  image,
  iwidth = 600,
  iheight = 500,
  heading,
  title,
  children,
  button = {},
  alignLeft = true,
  maxWidth,
  href,
  paragraphs = [],
  classNames = [],
}) {
  const textAlign = alignLeft ? "text-left" : "text-right";
  return (
    <div
      className={clsx(
        "flex sm:mx-20 max-xs:mx-5 justify-center items-center",
        !alignLeft && "flex-row-reverse"
      )}
    >
      <div
        className={
          "flex sm:mr-5 flex-col font-sansation  " +
          (alignLeft ? "items-start " : "items-end ") +
          classNames.join(" ")
        }
        style={{ maxWidth: maxWidth }}
      >
        <div
          className={
            "sm:text-xl text-5xl font-medium text-black mb-5 sm:mb-5 grow " +
            textAlign
          }
        >
          {heading}
        </div>
        <Image
          alt=""
          src={image}
          width={iwidth + ""}
          height={iheight + ""}
          className="lg:hidden"
        />
        {/* <div className={"text-3xl font-light text-black mb-5 " + textAlign}>
          {title}
        </div> */}
        {paragraphs.map((para, ind) => (
          <p className={"text-black mb-5 " + textAlign} key={ind}>
            {para}
          </p>
        ))}
        {children && (
          <div className={"text-black mb-5" + textAlign}>{children}</div>
        )}
        <Link href={href}>
          <button
            className={
              "mt-5 py-3 px-5 text-white bg-green-800 hover:bg-green-600 font-mullish text-sm rounded-md font-bold ripple-bg-green-700 " +
              textAlign
            }
          >
            {button.name}
          </button>
        </Link>
      </div>
      <Image
        alt=""
        src={image}
        width={iwidth + ""}
        height={iheight + ""}
        className="max-lg:hidden"
      />
    </div>
  );
}
