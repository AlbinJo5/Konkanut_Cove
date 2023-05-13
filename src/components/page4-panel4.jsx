import { LocalTwo } from "@icon-park/react"
import moment from "moment"
import Image from "next/image"
import { useState } from "react"
import ImageModal from "./image-modal"
import { Cancellations, ImageGrid, Landmarks } from "./page4-panel3"
import { useRouter } from "next/router"


const OptionGrid = ({ options, mainOptions }) => {
  return (
    <ul className="flex h-fit mb-5 max-sm:mt-5 grow">
      {options.filter(
        (option) => {
           // mainoptions is an object with keys as the name of the option
          if (mainOptions[option.name]) {
            return false;
          }
          return true;
        }
      ).map((option, ind) => {
        const Icon = option.icon;
        return (
          <li key={ind} className="mx-2 flex flex-col justify-center items-center grow">
            <div key={ind} className="border-gray-400 border-[1px] rounded-lg px-3 py-2">
              <Icon size="24" className="stroke-current text-gray-400 " />
            </div>
            <div className="text-gray-400 text-xs mt-1">{
              option.name.toUpperCase()
            }</div>
          </li>
        )
      })}
    </ul>
  )
}

const MapAC = ({ url, ac }) => {
  const router = useRouter();
  return (
    <div className="flex flex-row-reverse" >
      <div className="ml-5 flex flex-col items-center">
        {
          !ac ? (


            <div className="relative w-12 h-6">
              <div className="absolute z-0 w-10 bg-gray-300 h-5"></div>
              <div className="absolute z-10 top-[-4px] left-0 bg-gray-400 rounded-sm w-5 h-7"></div>
            </div>
          ) : (

            <div className="relative w-12 h-6">
              <div className="absolute z-0 w-10 bg-green-300 h-5"></div>
              <div className="absolute z-10 top-[-4px] right-0 bg-green-700 rounded-sm w-5 h-7"></div>
            </div>

          )
        }


        <div className="text-green-800 text-xs pl-1">AC</div>
      </div>
      <div className="ml-5 flex flex-col" onClick={() => {
        router.push(url)
      }}>
        <LocalTwo size="24" className="stroke-current text-green-800 " />
        <div className="text-green-800 text-xs">Map</div>
      </div>
    </div>
  );
}

export default function Page4Panel4({ mainOptions, ac, hotelName, images, name, address, until, after, options, map }) {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  return (
    <div className="flex flex-col border-[1px] border-gray-200 shadow-2xl py-5 rounded-lg px-10">
      <h3>{hotelName}</h3>
      <ImageModal images={images} showModal={showModal} setShowModal={setShowModal} />
      <ImageGrid images={images} name={name} address={address} noCol setShowModal={setShowModal}>
        <MapAC url={map} ac={ac} />
      </ImageGrid>

      <div className="flex max-sm:flex-col">
        <div className="flex flex-col mt-4 grow">
          <div className="flex mb-2">
            <Cancellations until={until} after={after} />
          </div>
          {/* <Landmarks landmarks={landmarks} /> */}
        </div>
        <div className="flex flex-col items-center justify-center">
          <OptionGrid options={options} mainOptions={mainOptions} />
          <button onClick={() => {
            router.push("/hotels/rp_residency")
          }} className="bg-green-800 hover:bg-green-600 h-[50px] min-w-[200px] font-bold text-white px-5 py-2 rounded-md hover:transition-transform hover:scale-110 hover:duration-750">Know More</button>
        </div>
      </div>

    </div >
  )
}