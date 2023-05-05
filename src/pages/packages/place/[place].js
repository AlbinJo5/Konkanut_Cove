import Layout from "@/components/layout";
import MainHeader, { MainText, MainTitle } from "@/components/main-header";
import SearchBar from "@/components/search-bar";
import { routes } from "@/routes";
import React, { useEffect, useRef } from "react";
import { Fade } from "react-reveal";
import Page2Panel from "@/components/page2-panel";
import { useQuery } from "@tanstack/react-query";
import { getDataById } from "@/utils/firebase_data_handler";
import { useRouter } from "next/router";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";
import InitialLoading from "@/admin_components/initialLoading";

const getPackages = async (id) => {
  const q = query(collection(db, "Packages"), where("place", "==", id));
  var output = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    output.push({
      id: doc.id,
      ...doc.data(),

    });
  });
  return {
    message: "success",
    data: output,
  };

}

export default function Packages() {
  const router = useRouter();
  const { place } = router.query;
  const placeData = useQuery(
    ["places", place],
    () => getDataById(`Places/${place}`),
    {
      staleTime: 1000 * 60 * 5,
      enabled: !!place
    }
  );

  const packagesData = useQuery(
    ["packages", place],
    () => getPackages(place),
    {
      staleTime: 1000 * 60 * 5,
      enabled: !!place
    }

  );

  console.log(packagesData.data?.data);


  return (
    <Layout>
      {
        placeData.isLoading || packagesData.isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <InitialLoading />
          </div>
        ) :
          placeData.isError || packagesData.isError ? (
            <div className="flex justify-center items-center h-screen">
              <p className="text-2xl text-red-500">
                {placeData.error?.message || packagesData.error?.message}
              </p>
            </div>
          ) : (
            <>
              <Fade top>
                <div
                  className="w-full bg-cover relative"
                  style={{ backgroundImage: `url(${placeData.data?.data.images[0]})` }}
                >
                  <div className="absolute z-50 md:-bottom-12 -bottom-32 flex w-full justify-center">
                    <div className="lg:w-[60%] md:w-[90%] w-full max-sm:mx-3">
                      <SearchBar />
                    </div>
                  </div>
                  <div className="pt-52 pb-36 w-full bg-black bg-opacity-20">
                    <MainHeader>
                      <MainTitle width="600px">{placeData.data?.data.title}</MainTitle>
                      <MainText width="600px">{
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
                      }</MainText>
                    </MainHeader>
                  </div>
                </div>
              </Fade>

              <ul
                className="pt-36 pb-5 grid min-[1250px]:grid-cols-2 grid-cols-1 gap-4 bg-repeat w-full  place-items-center "
                style={{ backgroundImage: "url('/assets/images/back3.png')" }}
              >
                {
                  packagesData.data?.data.map((item, index) => (
                    <li className="mb-28 max-w-[600px] md:w-[700px] lg:w-[600px]" key={index}>
                      <Fade bottom>
                        <Page2Panel data={item} width={300} height={550} top="-50px" />
                      </Fade>
                    </li>
                  ))
                }
              </ul>
            </>
          )
      }

    </Layout>
  );
}

