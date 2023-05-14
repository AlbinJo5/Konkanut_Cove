import SvgDoubleBed from "@/svgrs/double-bed"
import SvgNoView from "@/svgrs/svgr-no-view"
import { Calendar, LocalTwo } from "@icon-park/react"
import clsx from "clsx"
import moment from "moment"
import Image from "next/image"
import { useState } from "react"
import ImageModal from "./image-modal"
import EnquireModal from "./modal/enquireModal"
import { useRouter } from "next/router"
import HotelModal from "./modal/hotelModal"


export const Landmarks = ({ landmarks }) => {
  console.log(landmarks);
  return (
    <div className="">
      <p className="text-md font-bold">Nearby Landmarks</p>
      <table className="table-auto text-sm text-gray-500">
        <thead>
          <tr>
            <th className="font-normal border-r-[1px] border-b-[1px]  border-gray-400 box-border p-3">Distance</th>
            <th className="font-normal border-b-[1px]  border-gray-400 box-border p-3 text-left">Name of the place</th>
          </tr>
        </thead>
        <tbody>
          {landmarks?.map(({ distance, placeName }, index) =>
            <tr key={index} className="border-gray-400 box-border">
              <td className="border-r-[1px] border-b-[1px]  border-gray-400 box-border p-3">{distance} km</td>
              <td className="border-b-[1px]  border-gray-400 box-border p-3">{placeName}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export const Cancellations = ({ until, after, refund1 = "100%", refund2 = "No" }) => {

  return (
    <div className="flex flex-col max-sm:mt-2 h-max">
      <div className="flex mb-2">
        <div className="bg-green-400 w-2 h-[45px] mr-4 "></div>
        <div className="flex flex-col">
          <div className="text-md">Until {until ?? "24"} hours from check in</div>
          <div className="text-sm text-green-400">{refund1} refund</div>
        </div>
      </div>
      <div className="flex">
        <div className="bg-red-400 w-2 h-[45px] mr-4"></div>
        <div className="flex flex-col">
          <div className="text-md">After </div>
          <div className="text-sm text-red-400">{refund2} refund</div>
        </div>
      </div>
    </div>
  )
}

export const ImageGrid = ({ images, setShowModal, name, address, children, noCol = false }) => {

  return (
    <>
      <div className="grid sm:grid-rows-2 sm:grid-flow-col sm:gap-4 w-full h-[250px]">
        <div className="row-span-2 col-span-3 relative">
          <Image style={{
            objectFit: "cover",
          }} src={images[0].image} alt="grid pictures" fill className="rounded-md" />
          <div className="sm:hidden z-0 absolute w-full h-full flex justify-center items-center text-4xl text-white font-bold">{images.length}+</div>
          <div className="sm:hidden absolute w-full h-full z-10 bg-black bg-opacity-25 hover:bg-opacity-20" onClick={() => setShowModal(true)}></div>
        </div>
        {images
          // reverse the array so that the first image is not repeated
          .reverse()
          .slice(1, images.length).map((image, index) =>
            <div className="max-sm:hidden sm:col-span-2 relative" key={index}><Image src={image.image} alt="grid pictures" fill className="rounded-md" /></div>
          )}
      </div>
      <div className={clsx("flex items-start mt-4", { "max-sm:flex-col": !noCol })}>
        <div className="flex flex-col grow">
          <div className="text-xl font-bold">{name}</div>
          <div className="text-sm text-gray-500">{address}</div>
        </div>
        {children}
      </div>
    </>
  )
}

const BedTypePanel = ({ bedTypes }) => {
  return (
    <div className="grid sm:grid-cols-3 w-full rounded-md mt-4 overflow-hidden border-[1px] border-gray-200 box-border">
      {bedTypes?.map(({ people, image, type, view, ViewIcon, beds, BedIcon, desc }, ind) =>
        <div className="flex flex-col p-2 border-[1px] m-2 border-gray-200" key={ind}>
          <Image src={image} width="414" height="200" alt="" />
          <p className="text-md font-bold py-1">{type}</p>
          <div className="flex mb-2">
            <SvgNoView />
            <p className="text-sm text-gray-400 mx-2">{
              view ? " Landscape" : "No View"
            }</p>
            <SvgDoubleBed />
            <p className="text-sm text-gray-400 mx-2 -mt-[1px]">{
              beds ? "Double Bed" : "Single Bed"
            }</p>
          </div>
          <p className="text-xs text-gray-800">
            Total number of people: {people}
          </p>
          <p className="text-xs text-gray-400 ">{desc}</p>
        </div>
      )}
    </div>
  )
}

const OptionsList = ({ options, map, ac }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-start mt-5">
      <ul className="grid grid-cols-6 gap-2 max-xs:grid-cols-4 md:max-lg:grid-cols-4 mb-5 max-sm:mt-4" >
        {options.map((option, ind) => {
          const Icon = option.icon;
          return (
            <li key={ind} className="mx-2 flex flex-col justify-center items-center sm:grow">
              <div key={ind} className="border-gray-400 border-[1px] rounded-lg px-3 py-2">
                <Icon size="24" className="stroke-current text-gray-400 " />
              </div>
              <div className="text-gray-400 text-xs mt-1">{option.name}</div>
            </li>
          )
        })}
      </ul>
      <div className="flex flex-row-reverse w-full">
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
          router.push(map)
        }}>
          <LocalTwo size="24" className="stroke-current text-green-800 " />
          <div className="text-green-800 text-xs">Map</div>
        </div>
      </div>

    </div>
  )
}

export default function Page4Panel1({ images, hotelName, address, until, after, importantNotes, bedTypes, landmarks, options, map, ac }) {
  const [showModal, setShowModal] = useState(false);
  // if (images.length<7)throw Error("Not enough images!")


  return (
    <div className="flex flex-col border-[1px] border-gray-200 shadow-2xl py-5 rounded-lg sm:px-10 px-3">
      <ImageModal images={images} showModal={showModal} setShowModal={setShowModal} />


      <ImageGrid images={images} name={hotelName} address={address} setShowModal={setShowModal}>
        <HotelModal />
      </ImageGrid>

      <div className="flex max-md:flex-col mt-4 grow">
        <div className="flex max-sm:flex-col">
          <Landmarks landmarks={landmarks} />
          <div className="flex flex-col sm:py-0 sm:ml-12 grow">
            <Cancellations until={until} after={after} />
            <div className="text-md font-bold mt-5">Important to note</div>
            <ul className="text-sm list-disc ml-3">
              {importantNotes?.split("*")
                .map((note, index) => {
                  if (index === 0) return null;
                  return <li className="" key={index}>{note}</li>
                })}

            </ul>
          </div>
        </div>

        <OptionsList map={map} ac={ac} options={options} />

      </div>

      <BedTypePanel bedTypes={bedTypes} />
    </div>
  )
}