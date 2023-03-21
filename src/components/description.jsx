import { Fade } from "react-reveal";
import { Size } from "../constants/size";
import { useMediaQuery } from "../hooks/media-query";
import Carousel1 from "./carousel1";
import Carousel2 from "./carousel2";
import Carousel3 from "./carousel3";
import DescriptionComp from "./description-comp";
import ScrollProgress from "./scroll-progress";

const DescriptionSmall = ({sections})=>{
    return(
        <div className="flex">
            <Fade bottom>
                <ScrollProgress height="450px" n={sections.length*2}/>
            </Fade>
            
            <div className="flex flex-col grow">
                {sections.map(({desc,carousel},index)=>{
                    const ctype = carousel.type;
                    const Carousel = (ctype===1)?Carousel1:
                                     (ctype===2)?Carousel2:
                                                 Carousel3;

                    return(<Fade right key={index}><div className="flex flex-col w-full">
                        <div className="flex items-center min-h-[450px]" >
                            <DescriptionComp {...desc} button={{ name:"View Packages",onClick:()=>alert("hi") }} classNames={["ml-5"]} alignLeft={true}/>
                        </div>
                        <div className="flex items-center min-h-[450px] w-full" >
                            <Carousel data={carousel.images}/>
                        </div>
                    </div></Fade>
                    )
                })}
            </div>
        </div>
    )
}

const DescriptionLarge = ({sections})=>{
    const desc = sections.map(({desc})=>desc);
    const carousel = sections.map(({carousel})=>carousel)
    return(
        <div className="flex justify-center items-center">
            <ul className="flex flex-col mr-10">
            {sections.map(({desc,carousel},i)=>{
                const ctype = carousel.type;
                const Carousel = (ctype===1)?Carousel1:
                                    (ctype===2)?Carousel2:
                                                Carousel3;

                if(i%2===0) return(
                    <Fade left key={i}>
                        <li className="flex items-center min-h-[450px]">
                            <DescriptionComp {...desc} button={{ name:"View Packages",onClick:()=>alert("hi") }} classNames={["ml-5"]} alignLeft={true}/>
                        </li>
                    </Fade>)
                else return (
                    <Fade right key={i}>
                        <li className="flex items-center min-h-[450px] w-full" >
                            <Carousel data={carousel.images}/>
                        </li>
                    </Fade>)
            })}
               
            </ul>
            
            <Fade bottom>
                <ScrollProgress height="450px" n={sections.length}/>
            </Fade>
            

            <ul className="flex flex-col ml-10">
            {sections.map(({desc,carousel},i)=>{
                const ctype = carousel.type;
                const Carousel = (ctype===1)?Carousel1:
                                    (ctype===2)?Carousel2:
                                                Carousel3;

                if(i%2!==0) return(
                    <Fade left>
                        <li className="flex items-center min-h-[450px]" >
                            <DescriptionComp {...desc} button={{ name:"View Packages",onClick:()=>alert("hi") }} classNames={["ml-5"]} alignLeft={false}/>
                        </li>
                    </Fade>)
                else return (
                    <Fade right>
                        <li className="flex items-center min-h-[450px] w-full" >
                            <Carousel data={carousel.images}/>
                        </li>
                    </Fade>)
            })}
               
            </ul>
        </div>
    )
}

export default function Description({sections}){
    const isSmall = useMediaQuery(0,Size.sm); 
    if(isSmall){
        return(
            <DescriptionSmall sections={sections}/>
        )
    }
    return(
        <DescriptionLarge sections={sections}/>
    );
}