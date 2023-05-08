import InitialLoading from "@/admin_components/initialLoading";
import CarouselLarge from "@/components/carouselLarge";
import Layout from "@/components/layout";
import { getAllData } from "@/utils/firebase_data_handler";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Fade } from "react-reveal";


export default function Packages() {


  const placesData = useQuery(
    ["places"],
    () => {
      return getAllData("Places");
    },
    {
      staleTime: 1000 * 60 * 60,
    }
  )
  return (
    <Layout>
      {
        placesData.isLoading ? (
          <div className="w-full h-screen flex justify-center items-center">
            <InitialLoading />
          </div>
        ) : (
          placesData.isError ? (
            <div className="text-center text-2xl font-bold text-red-500">
              Error Fetching Data
            </div>
          ) : (
            <>
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
              <ul className="w-full  flex flex-col justify-center align-center items-center m-0 p-0	  my-5  ">
                {placesData.data?.data
                  // make the content of the array 3 times

                  .map((data, index) => (
                    <li className="my-5  max-w-fit    " key={index}>
                      <Fade {...(index % 2 == 0 ? { left: true } : { right: true })}>
                        <CarouselLarge
                          data={data.images[0]}
                          id={data.id}
                          title={data.title}
                          desc={"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla"}
                          isLeft={index % 2 == 0}
                          key={index}
                        />
                      </Fade>
                    </li>
                  ))}
              </ul>
            </>
          )
        )
      }

    </Layout>
  );
}


