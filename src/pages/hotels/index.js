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
import { getAllData, getAllSubcollections } from '@/utils/firebase_data_handler'
import { useQuery } from '@tanstack/react-query'
import InitialLoading from '@/admin_components/initialLoading'

const options = [
    {
        name: "wifi",
        icon: Wifi
    }, {
        name: "pool",
        icon: SwimmingPool
    }, {
        name: "parking",
        icon: Parking
    }, {
        name: "restaurant",
        icon: ForkSpoon
    }, {
        name: "fitness",
        icon: Fitness
    }, {
        name: "laundry",
        icon: ClothesCardigan
    }
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



const data = {
    title: "Enjoy Your Dream Vacation",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum  is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types",
    subPanelDatas,
};



export default function Hotels() {

    const [type, setType] = React.useState("hotel")

    const hotelsFullData = useQuery(
        ['hotels'],
        () => getAllData('Hotels'),
        {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
        }
    )

    const flexiPackagesData = useQuery(
        ['packages'],
        () => getAllData('Packages'),
        {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
        }
    )


    // covert this hotelsFullData to above data format

    const hotelsFullDataConverted = hotelsFullData.data?.data.map((d, i) => {
        return {
            images: d.images.map((map_d, i) => {
                return {
                    image: map_d,
                }
            }),
            hotelName: d.title,
            address: d.address,
            map: d.map,
            // until: d.cancel_day. covert to date format
            until: d.cancelTime,
            ac: d.ac,
            mainOptions: {
                wifi: d.wifi,
                pool: d.pool,
                parking: d.parking,
                restaurant: d.restaurant,
                fitness: d.fitness,
                laundry: d.laundry,
            },
            type: d.type,
            id: d.id,

        }
    })

    const flexiPackagesDataConverted = flexiPackagesData.data?.data.map((d, i) => {
        return {
            image: d.images[0],
            D: d.days,
            N: d.nights,
            location: d.title,
            desc: d.description,
            price: d.price,
            id: d.id,
        }
    })




    return (
        <Layout>
            {
                hotelsFullData.isLoading && flexiPackagesData.isLoading ? <InitialLoading /> : null
            }
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

                            <Page4Slider setType={(type) => setType(type)} />

                        </div>

                    </div>

                </div>
            </Fade>
            <div className="flex flex-col mt-40  sm:mt-25 md:mt-20">
                {
                    flexiPackagesData.isLoading ? <div>Loading...</div> : (
                        <Page4Panel1 subPanelDatas={flexiPackagesDataConverted} />
                    )
                }

                <ul className="grid lg:grid-cols-2 grid-cols-1 gap-2 mt-20">
                    {/* {
                        hotelsFullData.isLoading ? <div>Loading...</div> : hotelsFullData.data?.data.map((d, i) =>
                            <Page4Panel4 {...d} data={d} options={options} key={i} />
                        )
                    } */}
                    {hotelsFullDataConverted?.filter(x => x.type === type).map((d, i) =>
                        <Page4Panel4 {...d} options={options} key={i} />
                    )}
                </ul>
            </div>
        </Layout>
    )
}