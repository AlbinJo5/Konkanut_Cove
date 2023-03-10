import { convertToPixels } from "../utils/convert-pixels";
import { createRef, useState, useEffect, useRef, useCallback } from "react";

export  default function ScrollProgress({n=6,height="200px",fromAbove=15}){
    
    const refs = Array(n+1).fill(0).map(() => createRef());
    console.log(refs)
    const [index, setIndex] = useState(0);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(null);
    const heightRef = useRef(height);

    const handleScroll  = useCallback(()=>{
        const height=convertToPixels(heightRef.current)
        console.log(refs,index)
        const ref = refs[index];
        if (ref.current===null)return;

        const scrollTop = window.pageYOffset+window.innerHeight * 0.05;
        const elementTop = ref.current.offsetTop;
        const distance = elementTop - scrollTop;
        console.log(distance)
         // Determine scroll direction
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos > prevScrollPos) {
        setScrollDirection('down');
        } else if (currentScrollPos < prevScrollPos) {
        setScrollDirection('up');
        }
        setPrevScrollPos(currentScrollPos);

        // Update index based on scroll direction
        if (distance < 0 && index <= n && scrollDirection === 'down') {
            setIndex(index+1);
        } else if (distance > (height+25) && index > 0 && scrollDirection === 'up') {
            setIndex(index-1);
        }

    },[index,prevScrollPos, scrollDirection,n,refs])

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return ()=>window.removeEventListener('scroll',handleScroll);
    },[handleScroll])

    return(
        <div className="flex flex-col justify-center h-full">
            {Array(n).fill(0).map((_,ind)=>
                <div className="flex flex-col justify-center items-center" style={{minHeight:height}} key={ind}>
                    <div className={"rounded-full border-4 border-green-800 w-5 h-5 "+(index===ind && "bg-green-800")} ref={refs[ind]}></div>
                    <div className="w-1 bg-green-800" style={{height:height}}></div>
                </div>
            )}
            <div className="flex flex-col justify-center items-center">
                <div className={"rounded-full border-4 border-green-800 w-5 h-5 "+(index===n && "bg-green-800")} ref={refs[n]}></div>
            </div>
        </div>
    )
}