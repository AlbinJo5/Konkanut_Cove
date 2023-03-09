import { Airplane, ForkSpoon, SingleBed, TourBus } from "@icon-park/react"
import Image from "next/image";

const options=[
    {
        name:"meals",
        icon:ForkSpoon
    },{
        name:"Optional",
        icon:Airplane
    },{
        name:"Accomodation",
        icon:SingleBed
    },{
        name:"Sightseeing",
        icon:TourBus
    }
]

const ImagePanel = (image)=>{
    return(<div className="flex flex-col w-[300px] h-[200px]">
        <Image src={image} alt="" fill className="shadow-md mb-2"/>
        <ul className="shadow-md rounded-md">
            {options.map((option)=>{
                const Icon = option.icon;
                <div className="px-3 py-2 text-green-800 flex flex-col justify-center items-center">
                    <div className="text-green-800">{option.name}</div>
                    <Icon size="24" className="stroke-current text-green-800"/>
                </div>
            })}
        </ul>
    </div>)
}

export default  function Page2Panel({image,title,duration,desc,discounted_rate,actual_rate,percent_off,width}){
    return(
        <div className="flex bg-white]">
            <ImagePanel image={image}/>
            <div className="flex flex-col text-green-800 w-[40%]">
                <div className="text-bold text-lg mb-3">{title}</div>
                <div className="text-bold text-md mb-2">{duration}</div>
                <div className="text-md">{desc}</div>
                <div className="text-lg">{discounted_rate}</div>
                <div className="flex">
                    <div className="text-lg text-gray-400 underline">{actual_rate}</div>
                    <div className="text-green-600">{percent_off}% off</div>
                </div>
            </div>
        </div>
    )
}