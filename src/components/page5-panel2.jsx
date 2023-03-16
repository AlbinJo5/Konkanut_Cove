import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

export default function Page5Panel2({title,featureData,videoLink}){
  return (
    <div className="flex flex-col sm:mx-20 max-xs:mx-5 justify-center items-center">
        <div className="text-lg font-bold text-center py-3">{title}</div>
        <ul className="flex max-sm:flex-col">
          {featureData.map(({image,title,desc,color,imwidth=null,imheight=null},index)=>
            <li className={clsx("grow flex flex-col justify-center items-center",index!==0 && "sm:ml-10")} key={index}>
              <div className="relative w-[142px] h-[142px]">
                  <div className={clsx("z-0 absolute rounded-full w-[142px] h-[142px]",color)}></div>
                  <div className="z-10 absolute w-[142px] h-[142px] flex justify-center items-center">
                      <Image width={imwidth ?? 91} height={imheight ?? 91} src={image} alt=""/>
                  </div>
              </div>
                <p className="text-green-800 font-bold text-md py-4">{title}</p>
                <p className="text-sm max-xs:mx-5 max-sm:mx-10">{desc}</p>
            </li>
          )}
        </ul>
        <iframe width="1120" height="630" src={videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="my-10 max-md:w-full max-md:h-[315px]" allowfullscreen></iframe>
    </div>
  )
}
