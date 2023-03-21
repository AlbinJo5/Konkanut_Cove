import Layout from '@/components/layout'
import MainHeader, { MainText, MainTitle } from '@/components/main-header';
import SearchBar from '@/components/search-bar';
import { routes } from '../../routes';
import React, { useEffect, useRef } from 'react'
import { Fade } from 'react-reveal';
import Page2Panel from '@/components/page2-panel';

const datas = [{
    image:"/assets/images/page3/image_7.png",
    title:"Sample Title 1",
    duration:"3 days 5 nights",
    desc:"Lorem Ipsum is simply dummy text of theprinting and typesetting Lorem Ipsum is ",
    discounted_rate:1900,actual_rate:2200,percent_off:5,
},
{
    image:"/assets/images/page3/image_8.png",
    title:"Sample Title 1",
    duration:"3 days 5 nights",
    desc:"Lorem Ipsum is simply dummy text of theprinting and typesetting Lorem Ipsum is ",
    discounted_rate:1900,actual_rate:2200,percent_off:5,
},
{
    image:"/assets/images/page3/image_9.png",
    title:"Sample Title 1",
    duration:"3 days 5 nights",
    desc:"Lorem Ipsum is simply dummy text of theprinting and typesetting Lorem Ipsum is ",
    discounted_rate:1900,actual_rate:2200,percent_off:5,
},
{
    image:"/assets/images/page3/image_10.png",
    title:"Sample Title 1",
    duration:"3 days 5 nights",
    desc:"Lorem Ipsum is simply dummy text of theprinting and typesetting Lorem Ipsum is ",
    discounted_rate:1900,actual_rate:2200,percent_off:5,
},
{
    image:"/assets/images/page3/image_11.png",
    title:"Sample Title 1",
    duration:"3 days 5 nights",
    desc:"Lorem Ipsum is simply dummy text of theprinting and typesetting Lorem Ipsum is ",
    discounted_rate:1900,actual_rate:2200,percent_off:5,
},
{
    image:"/assets/images/page3/image_13.png",
    title:"Sample Title 1",
    duration:"3 days 5 nights",
    desc:"Lorem Ipsum is simply dummy text of theprinting and typesetting Lorem Ipsum is ",
    discounted_rate:1900,actual_rate:2200,percent_off:5,
},
];


export default function Packages ({datas,title,desc})  {
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
                    </div>
                    
                </div>
            </Fade>

            <ul className="pt-36 pb-5 grid min-[1250px]:grid-cols-2 grid-cols-1 gap-4 bg-repeat w-full" style={{backgroundImage:"url('/assets/images/back3.png')"}}>
                {datas.map((d,i)=>
                    <li className="mb-28 max-w-[600px] md:w-[700px] lg:w-[600px]" key={i}>
                        <Fade bottom><Page2Panel {...d} width={300} height={150} top="-50px" key={i} /></Fade>
                    </li>                    
                )}
            </ul>      
        </Layout>
    )
}


export async function getServerSideProps(context){

    const {locationname} = context.params;
    
    const sampleLocations = ["DEVBAG","TARKALI","AACHRA","SAWANTWADI","MALWAN","KUDAL","VENGURLA","REDI","DEVGAD","VIJAYDURG","DONDAVLI"]
    const sampleData = {}

    sampleLocations.forEach((loc)=>{
        sampleData[loc.toLowerCase()] = {
            title:`<p style="color:#22543d;">${loc}</p>`,
            desc:"Donut icing macaroon cheesecake sesame snaps powder. Shortbread chocolate bar pie powder jujubes topping bonbon pie cupcake. Fruitcake cookie jelly cake toffee chocolate bar. Macaroon apple pie tootsie roll sweet roll sugar plum brownie.",
            datas:datas
        }
    })

    if (!sampleData[locationname]){
        return {
            redirect: {
              destination: routes.page404,
              permanent: false,
            },
          };
    }
    
    return {
        props:{
            ...sampleData[locationname],
        }
    }
}