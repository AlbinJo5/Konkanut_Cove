import Layout from '@/components/layout'
import MainHeader, { MainText, MainTitle } from '@/components/main-header'
import Page4Panel1 from '@/components/page4-panel1'
import Page4Panel4 from '@/components/page4-panel4'
import SearchBar from '@/components/search-bar'
import React from 'react'
import { Fade } from 'react-reveal'
import {  ClothesCardigan, Fitness, ForkSpoon, Parking, SwimmingPool,  Wifi } from "@icon-park/react"
import Page4Slider from '@/components/page4-slider'
import { routes } from '@/routes'

const options=[
    {
        name:"Wi-fi",
        icon:Wifi
    },{
        name:"Poolside",
        icon:SwimmingPool
    },{
        name:"Parking",
        icon:Parking
    },{
        name:"Restaurant",
        icon:ForkSpoon
    },
  ]

export default function Hotels({subPanelDatas,imageDatas,title,desc}) {
  return (
    <Layout>
        <Fade top>
            <div className="w-full bg-cover relative" style={{backgroundImage:"url('/assets/images/back33.png')"}}> 
                
                <div className="absolute z-50 md:-bottom-12 -bottom-32 flex w-full justify-center">

                    
                    <div className="lg:w-[60%] md:w-[90%] w-full max-sm:mx-3">
                        <SearchBar/>
                    </div>
                    
                </div>
                <div className="pt-52 pb-36 w-full bg-black bg-opacity-20">
                    <MainHeader>
                        <MainTitle width="600px">
                            {title}
                        </MainTitle>
                        <MainText width="600px">{desc}</MainText>
                    </MainHeader>
                    <div className="flex w-full justify-center">
                        <Page4Slider/>
                    </div>
                    
                </div>
                
            </div>
        </Fade>
        <div className="flex flex-col mt-40  sm:mt-25 md:mt-20">
            <Page4Panel1 subPanelDatas={subPanelDatas} />
            <ul className="grid lg:grid-cols-2 grid-cols-1 gap-2 mt-20">
                {imageDatas.map((d,i)=>
                    <Page4Panel4 {...d} options={options} key={i}/>
                )}
            </ul>
        </div>
    </Layout>
  )
}


export async function getStaticProps(){
    const res = await fetch(process.env.URL+'/api/v1/hotels');
    if(!res.ok){
        return {
            redirect: {
                destination: routes.page404,
                permanent: false,
              },
        }
    }
    const data = await res.json()

    return {
        props:{
            ...data
        }
    }
}