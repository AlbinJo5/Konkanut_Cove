import SvgSlider1 from '../svgrs/slider1'
import React, { useState } from 'react'

export default function Page4Slider({width,ratio,name1,name2}){
    const [clicked, setClicked] = useState(true)
  return (
    <div className="px-2"><SvgSlider1 className="cursor-default" clicked={clicked} setClicked={setClicked}/></div>      
  )
}
