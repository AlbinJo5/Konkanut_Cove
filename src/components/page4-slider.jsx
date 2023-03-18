import SvgSlider1 from '../svgrs/slider1'
import React, { useState } from 'react'
import { useMediaQuery } from '../hooks/media-query'
import { Size } from '../constants/size'

export default function Page4Slider({width,ratio,name1,name2}){
    const [clicked, setClicked] = useState(true)
    const tillSm = useMediaQuery(0,Size.sm);
  return (
    <div className="px-2 max-sm:scale-x-[0.6]"><SvgSlider1 className="cursor-default" clicked={clicked} setClicked={setClicked} tillSm={tillSm}/></div>      
  )
}
