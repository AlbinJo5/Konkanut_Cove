import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';


export default function ButtonPanel (){
    const optionList=['Accommodation', 'Activities', 'Transport'];
    const [options, setOptions] = useState(optionList.slice().concat(optionList.slice(0,2)));
    const [trans, setTrans] = useState(null)
    const [clickedIndex,setIndex]= useState(null)
    const [transOver, setTransOver] = useState(false)
    const trans1 ="translate-x-[-100%] transition-transform delay-750";
    const trans2 ="translate-x-[-200%] transition-transform delay-750";

    useEffect(()=>{
      if(transOver&&clickedIndex){
        let arr=options;
        let slice;
        slice=arr.splice(clickedIndex);
        arr.unshift(...slice);
        setIndex(null);
        setTrans(null);
        setOptions(arr);
        setTransOver(false);
      }
    },[transOver,clickedIndex])

    const handleClick = (index)=>{
      if (index===1){
        setTrans(trans1);
      }else if (index===2){
        setTrans(trans2);
      }
      setIndex(index);
    }

    const handleTransitionEnd = ()=>{
    if(clickedIndex){  
      setTransOver(true)
     } 
    }

    return(
      <div className="flex w-full">
        <ul className="bg-green-800 flex w-full px-5 rounded-full overflow-hidden cursor-pointer">
          {options.map((option,index)=>
              <li className={clsx(["text-white font-bold p-2 w-[33%] min-w-[33%] text-center "],trans,index==0?"text-md":"text-sm mt-[2px]")} key={index}
                onClick={()=>handleClick(index)}
                onTransitionEnd={handleTransitionEnd}
              >{option}</li>
            )}
        </ul>
      </div>
    )
  };