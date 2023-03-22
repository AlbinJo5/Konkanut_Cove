import { convertToPixels } from "../utils/convert-pixels";
import { createRef, useState, useEffect, useRef, useCallback } from "react";

export  default function ScrollProgress({n=6,height="200px",fromAbove=15}){
    
    const refs = Array(n+1).fill(0).map(() => createRef());
    const [index, setIndex] = useState(0);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(null);
    const heightRef = useRef(height);

    const handleScroll  = useCallback(()=>{
        const height=convertToPixels(heightRef.current)
    
        const scrollTop = window.pageYOffset-window.innerHeight * 0.5;
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos > prevScrollPos) {
        setScrollDirection('down');
        } else if (currentScrollPos < prevScrollPos) {
        setScrollDirection('up');
        }
        setPrevScrollPos(currentScrollPos);

        const nearestRefIndex = refs.reduce((minIndex, ref, currentIndex, array) =>{
            if(!ref?.current)return currentIndex;
            const elementTop = ref.current.offsetTop;
            const prevTop = array[minIndex].current.offsetTop
            const scrollTop = window.pageYOffset+window.innerHeight * 0.5;            
            //const distance = Math.abs(elementTop - scrollTop);
            console.log(currentIndex,elementTop,scrollTop);
           return Math.abs(elementTop - scrollTop)<Math.abs(elementTop - prevTop)?minIndex:currentIndex}, 0);
           setIndex(nearestRefIndex)

    },[prevScrollPos, refs])

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return ()=>window.removeEventListener('scroll',handleScroll);
    },[handleScroll])
    
    return(
        <div className="flex flex-col justify-center h-full">
            {Array(n).fill(0).map((_,ind)=>
                <div className="flex flex-col justify-center items-center overflow-hidden" style={{minHeight:height,maxHeight:height}} key={ind}>
                    <div className={"rounded-full border-4 border-green-800 w-5 h-5 "+(index===ind && "bg-green-800")} ref={refs[ind]}></div>
                    <div className="w-1 bg-green-800 h-full" style={{height}}></div>
                </div>
            )}
            <div className="flex flex-col justify-center items-center">
                <div className={"rounded-full border-4 border-green-800 w-5 h-5 "+(index===n && "bg-green-800")} ref={refs[n]}></div>
            </div>
        </div>
    )
}