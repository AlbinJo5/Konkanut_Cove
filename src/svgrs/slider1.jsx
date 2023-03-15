import * as React from "react";
const SvgSlider1 = ({clicked=true,tillSm,setClicked,...props}) => (
  <svg
    width={482.7}
    height={58.56}    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    transform={tillSm?"scale(0.6,1)":"none"}
    {...props}
  >
    
    <rect y={7.7}
      width={466}
      height={41.86}
      rx={6.794}
      fill={clicked?"#fff":"#00b894"}
      style={{
        stroke: "#00b894",
        strokeOpacity: 1,
        filter: "url(#slider1_svg__a)",
      }}
      x={7.7} onClick={clicked ? ()=>setClicked(false):null}
    />
    <g filter="url(#slider1_svg__b)" transform="translate(7.7 5.7)">
      <path
        d="M0 8.794A6.794 6.794 0 0 1 6.794 2h257.138l36.824 41.86H6.794A6.794 6.794 0 0 1 0 37.066Z"
        fill={clicked?"#00b894":"#fff"}
        onClick={!clicked ? ()=>setClicked(true):null}
      />
    </g>
      <defs>
      <filter
        id="slider1_svg__b"
        x={0}
        y={0.641}
        width={303.474}
        height={44.578}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={1.359} />
        <feGaussianBlur stdDeviation={0.679} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0_2835" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_0_2835"
          result="shape"
        />
      </filter>
      <filter
        style={{
          colorInterpolationFilters: "sRGB",
        }}
        id="slider1_svg__a"
        x={-0.017}
        y={-0.184}
        width={1.036}
        height={1.399}
      >
        <feFlood floodOpacity={0.498} floodColor="#000" result="flood" />
        <feComposite
          in="flood"
          in2="SourceGraphic"
          operator="in"
          result="composite1"
        />
        <feGaussianBlur in="composite1" stdDeviation={3} result="blur" />
        <feOffset dx={1.3} dy={1.3} result="offset" />
        <feComposite in="SourceGraphic" in2="offset" result="composite2" />
      </filter>
    </defs>

    <text
      xmlSpace="preserve"
      style={{
        fontSize: "17.8981px",
        fill: clicked?"#fff":"#00B894",
        strokeWidth: 1.4915,
      }}
      x={103.865}
      y={36.777}
      transform="scale(1.07881 .92695)"
    >
      <tspan
        x={103.865}
        y={36.777}
        style={{
          strokeWidth: 1.4915,
        }}
      >
        {"Hotel"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fontSize: "17.8981px",
        fill: clicked?"#00B894":"#fff",
        strokeWidth: 1.4915,
      }}
      x={308.85}
      y={36.777}
      transform="scale(1.07881 .92695)"
    >
      <tspan
        x={308.85}
        y={36.777}
        style={{
          strokeWidth: 1.4915,
        }}
      >
        {"HomeStay"}
      </tspan>
    </text>
  </svg>
);
export default SvgSlider1;

