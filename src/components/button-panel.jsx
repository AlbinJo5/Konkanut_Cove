import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';


export default function ButtonPanel ({optionList}){
    const [options, setOptions] = useState(0);
    
    const handleClick = (index)=>{
      setOptions(index);
    }

    return(
      <div className="flex w-full">
        <ul className="flex w-full cursor-pointer max-sm:scale-90 max-sm:text-xs">
          {optionList.map((option,index)=>
              <li className={clsx(["text-white font-bold p-2 w-[33%] min-w-[33%] text-center transition-transform"],{"rounded-l-full":index===0,"rounded-r-full":index===optionList.length-1},options===index ? "scale-[1.15] bg-green-600 shadow-sm shadow-green-500":"bg-green-800")} key={index}
                onClick={()=>handleClick(index)}
              >{option}</li>
            )}
        </ul>
      </div>
    )
  };