import React from 'react'

export default function Page4Slider({width,ratio,name1,name2}){
    console.log({width,ratio,name1,name2})
  return (
    <div>
        <div  style={{width:width*0.6}} className="flex">
            <div className="relative text-white text-md w-full">
                <div className="bg-green-700 absolute left-[20%] top-0 z-10 px-3 py-2 w-full h-12">Just the right edge</div>
                <div className="bg-green-700 left-[10%] absolute top-0 z-0 w-full h-12 -skew-x-12"></div>
            </div>
        </div>
        <div  style={{width:width*0.4}}>
            <div className="relative text-green-800 text-md w-full">
                <div className="bg-white absolute left-[20%] top-0 z-10 px-3 py-2 w-full h-12">Just the</div>
                <div className="bg-white left-[10%] absolute top-0 z-0 w-full h-12 skew-x-12"></div>
            </div>
        </div>
    </div>
      
  )
}
