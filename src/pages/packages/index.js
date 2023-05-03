import CarouselLarge from "@/components/carouselLarge";
import Layout from "@/components/layout";
import { getAllData } from "@/utils/firebase_data_handler";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Fade } from "react-reveal";


export default function Packages() {


  const packagesData = useQuery(
    ["packages"],
    () => {
      return getAllData("Packages");
    },
    {
      staleTime: 1000 * 60 * 60,
    }
  )

  console.log(packagesData.data?.data);
  return (
    <Layout>
      <Fade top>
        <div
          className="w-full h-[375px] bg-cover contrast-125"
          style={{ backgroundImage: "url('/assets/images/back22.png')" }}
        >
          <div className="w-full h-full bg-black bg-opacity-20 flex flex-col justify-center items-center">
            <p className="text-6xl text-green-800 font-bold mb-5">
              FLEXI PACKAGES
            </p>
            <button className="bg-green-800 hover:bg-green-600 text-white text-xl px-4 py-3 rounded-md">
              Book Now {"\u2794"}
            </button>
          </div>
        </div>
      </Fade>
      <ul className="w-full bg-gray-400 flex flex-col justify-center align-center items-center m-0 p-0	  my-5  ">
        {/* {datas.map((data, index) => (
          <li className="my-5  max-w-fit    " key={index}>
            <Fade {...(index % 2 == 0 ? { left: true } : { right: true })}>
              <CarouselLarge
                data={data.images}
                title={data.title}
                desc={data.desc}
                isLeft={index % 2 == 0}
                key={index}
              />
            </Fade>
          </li>
        ))} */}

        {packagesData.data?.data
          // make the content of the array 3 times
          .map((data) => [data, data, data])
          // flatten the array
          .flat()
          .map((data, index) => (
            <li className="my-5  max-w-fit    " key={index}>
              <Fade {...(index % 2 == 0 ? { left: true } : { right: true })}>
                <CarouselLarge
                  data={data.images}
                  title={data.title}
                  desc={data.description}
                  isLeft={index % 2 == 0}
                  key={index}
                />
              </Fade>
            </li>
          ))}
      </ul>
    </Layout>
  );
}


