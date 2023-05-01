import Layout from '@/components/layout'
import MainHeader, { MainText, MainTitle } from '@/components/main-header'
import Page4Panel1 from '@/components/page4-panel1'
import Page4Panel4 from '@/components/page4-panel4'
import SearchBar from '@/components/search-bar'
import React from 'react'
import { Fade } from 'react-reveal'
import { ClothesCardigan, Fitness, ForkSpoon, Parking, SwimmingPool, Wifi } from "@icon-park/react"
import Page4Slider from '@/components/page4-slider'
import { routes } from '@/routes'
import { getAllSubcollections } from '@/utils/firebase_data_handler'
import { useQuery } from '@tanstack/react-query'

const options = [
    {
        name: "Wi-fi",
        icon: Wifi
    }, {
        name: "Poolside",
        icon: SwimmingPool
    }, {
        name: "Parking",
        icon: Parking
    }, {
        name: "Restaurant",
        icon: ForkSpoon
    },
]

const subPanelDatas = [
    {
        image: "/assets/images/packages/image1.png",
        D: 3, N: 2,
        location: "Tarkarli - Devbagh",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is ",
        price: 5499
    },
    {
        image: "/assets/images/packages/image2.png",
        D: 3, N: 2,
        location: "Tarkarli - Devbagh",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is ",
        price: 5499
    },
    {
        image: "/assets/images/packages/image3.png",
        D: 3, N: 2,
        location: "Tarkarli - Devbagh",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is ",
        price: 5499
    },
];

const imageDatas = [].concat(...Array(1).fill(
    {
        images: [

            {
                image: "/assets/images/beds/bed_5.png",
            },
            {
                image: "/assets/images/beds/bed_5.png",
            },
            {
                image: "/assets/images/beds/bed_5.png",
            },
            {
                image: "/assets/images/beds/bed_5.png",
            },
            {
                image: "/assets/images/beds/bed_5.png",
            },
            {
                image: "/assets/images/beds/bed_5.png",
            },
            {
                image: "/assets/images/beds/bed_5.png",
            },
            {
                image: "/assets/images/beds/bed_6.png",
            },
            {
                image: "/assets/images/beds/bed_7.png",
            },
        ],
        hotelName: "LP2 Residency",
        address: "45 Road Devbag,Maharashtra",
        until: Date(4, 2, 23),
        after: Date(6, 2, 23),
        landmarks: [
            {
                distance: "0.1km",
                placeName: "Aero city Metro Station"
            },
            {
                distance: "0.5km",
                placeName: "Pune Express Railway Station"
            },

        ],
    }));

const data = {
    title: "Enjoy Your Dream Vacation",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum  is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types",
    subPanelDatas,
    imageDatas,
};



export default function Hotels() {

    const hotelsFullData = useQuery(
        ['hotelsFullData'],
        () => getAllSubcollections('Hotels', ["Rooms", "Landmarks"]),
        {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
        }
    )
    return (
        <Layout>
            <Fade top>
                <div className="w-full bg-cover relative" style={{ backgroundImage: "url('/assets/images/back33.png')" }}>
                    <div className="absolute z-50 md:-bottom-12 -bottom-32 flex w-full justify-center">


                        <div className="lg:w-[60%] md:w-[90%] w-full max-sm:mx-3">
                            <SearchBar />
                        </div>

                    </div>
                    <div className="pt-52 pb-36 w-full bg-black bg-opacity-20">
                        <MainHeader>
                            <MainTitle width="600px">
                                {data.title}
                            </MainTitle>
                            <MainText width="600px">{data.desc}</MainText>
                        </MainHeader>
                        <div className="flex w-full justify-center">

                            <Page4Slider />

                        </div>

                    </div>

                </div>
            </Fade>
            <div className="flex flex-col mt-40  sm:mt-25 md:mt-20">
                <Page4Panel1 subPanelDatas={data.subPanelDatas} />
                <ul className="grid lg:grid-cols-2 grid-cols-1 gap-2 mt-20">{
                    hotelsFullData.isLoading ? <div>Loading...</div> : hotelsFullData.data?.data.map((d, i) =>
                        <Page4Panel4 {...d} options={options} key={i} />
                    )
                }
                    {data.imageDatas.map((d, i) =>
                        <Page4Panel4 {...d} options={options} key={i} />
                    )}
                </ul>
            </div>
        </Layout>
    )
}