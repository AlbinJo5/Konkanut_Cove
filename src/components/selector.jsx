import { Correct } from "@icon-park/react"
import clsx from "clsx"

export const  Selector = ({selected,callback=null,borderColor="border-green-600",fillColor="bg-green-600",radius=18,fontSize="10"})=>{

    const handleSelect = ()=>{
        if(!selected){
            callback ?? callback();
        }
    }

    return(
        <div className={clsx("rounded-full flex justify-center items-center border-2 p-3",borderColor)} style={{width:radius,height:radius}}>
            <Correct theme="filled" size={fontSize} className={clsx("stroke-current text-white rounded-full p-1",fillColor)}/>
        </div>
    )
}