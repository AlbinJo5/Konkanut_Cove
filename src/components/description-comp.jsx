import Link from "next/link";

export default function DescriptionComp({
  heading,
  children,
  button = {},
  alignLeft = true,
  maxWidth,
  paragraphs = [],
  classNames = [],
}) {
  const textAlign = alignLeft
    ? "text-left justify-start"
    : "text-right justify-end items-end mr-5";
  return (
    <div
      className={
        "flex flex-col mx-2 font-sansation opacity-90 w-4/5  lg:max-w-[450px]  " +
        (alignLeft ? "justify-start " : "justify-end") +
        classNames.join(" ")
      }
    >
      <div
        className={
          "textxl max-lg:text-2xl sm:text-xl font-bold text-slate-50 mb-5 " +
          textAlign
        }

        style={{
          fontSize: "clamp(1.5rem, 2vw, 2rem)",
        }}
      >
        {heading}
      </div>
      {paragraphs.map((para, ind) => (
        <p
          className={"text-slate-50 max-lg:text-xs  " + textAlign}
          key={ind}
        >
          {para}
        </p>
      ))}
      {children && (
        <div className={"text-slate-50 mb-5" + textAlign}>{children}</div>
      )}
      <Link href={button.href}>
        <button
          className={
            " mt-5 py-3 px-5 w-max text-slate-50 bg-green-800 hover:bg-green-600 font-mullish text-sm rounded-md font-bold ripple-bg-green-700 " +
            textAlign
          }
        >
          {button.name}
        </button>
      </Link>
    </div>
  );
}
