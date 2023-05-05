import { Size } from "@/constants/size";
import { useMediaQuery } from "@/hooks/media-query";
import { routes } from "@/routes";
import { Airplane, ForkSpoon, SingleBed, TourBus } from "@icon-park/react"
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";

const options = [
    {
        name: "Meals",
        icon: ForkSpoon
    }, {
        name: "Optional",
        icon: Airplane
    }, {
        name: "Accomodation",
        icon: SingleBed
    }, {
        name: "Sightseeing",
        icon: TourBus
    }
]

const ImagePanel = ({ image, width, height, top }) => {
    const imgWidth = "" + width;
    const imgHeight = "" + height;
    const leftWidth = width - 76;
    return (
        <>
            <div className="min-[640px]:hidden">
                <Image src={image} width={imgWidth} height={imgHeight} alt="" className="shadow-md mb-2 rounded-md object-cover" />
            </div>
            <div className={`flex flex-col relative w-full max-[640px]:hidden  `}>
                <div className="absolute height-[1000px]" style={{ top: top }}>
                    <Image src={image} width={imgWidth} height={40000} alt="" className="shadow-md mb-2 rounded-md object-cover" />
                </div>

                <ul className="absolute bottom-5   shadow-md rounded-md flex -left-5" style={{ width: width - '10px' }}>
                    {options.map((option, ind) => {
                        const Icon = option.icon;
                        return (<li key={ind} className="px-2 py-1 text-green-800 flex flex-col justify-center items-center grow cursor-pointer
                   hover:bg-gray-200">
                            <div className="text-green-800 text-xs">{option.name}</div>
                            <Icon size="20" className="stroke-current text-green-800" />
                        </li>)
                    })}
                </ul>
            </div>
        </>
    )
}

export default function Page2Panel({ n = 2, width, height, top = -35, textWidth = "sm:w-[60%] md:w-[80%] lg:w-[80%]", data }) {
    const router = useRouter();

    return (
        <div className="flex max-sm:justify-center max-sm:flex-col bg-white shadow-2xl border-[2px] border-gray-100 rounded-lg px-5 py-5 max-sm:w-full">
            <ImagePanel image={data?.images[0]} width={width} height={height} top={top} />
            <div className="grow"></div>
            <div className={clsx("flex flex-col text-green-800 sm:pr-4 mt-2", textWidth)}>
                <div className="flex">
                    <div className="font-bold text-xl mb-3 grow">{data?.title}</div>
                    <div className="border-[1px] border-green-800 w-min h-min px-2">{n}N</div>
                </div>
                <div className="font-bold text-lg mb-2">
                    {
                        data?.days + " Days " + data?.nights + " Nights"
                    }
                </div>
                <div className="text-md">{data?.description}</div>
                <div className="text-lg">{"\u20b9"}{
                    data?.price
                }</div>
                <div className="flex mb-4 items-center">
                    <div className="text-lg text-gray-400 line-through mr-2">{"\u20b9"}
                        {
                            data?.price * 1.3
                        }
                    </div>
                    <div className="text-green-600 text-sm font-bold">30% off</div>
                </div>
                <button className="bg-green-800 hover:bg-green-600 mb-3 text-white font-bold py-2 rounded-sm"
                    onClick={() => {
                        router.push(routes.package_details + data?.id);
                    }}
                >View More</button>
            </div>
        </div>
    )
}