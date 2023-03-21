import CarouselLarge from '@/components/carouselLarge';
import Layout from '@/components/layout'
import React from 'react'
import { Fade } from 'react-reveal';

const CarouselData = [
    {
      title: "Sample Title 1",
      image:
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
      },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      
    },
    {
      image:
        "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
  ];

const sampleDatas = ["DEVBAG","TARKALI","AACHRA","SAWANTWADI","MALWAN","KUDAL","VENGURLA","REDI","DEVGAD","VIJAYDURG","DONDAVLI"].map((data,index)=>({
    title:data,
    images:CarouselData,
    desc:"Donut icing macaroon cheesecake sesame snaps powder. Shortbread chocolate bar pie powder jujubes topping bonbon pie cupcake. Fruitcake cookie jelly cake toffee chocolate bar. Macaroon apple pie tootsie roll sweet roll sugar plum brownie."
}))

export default function Packages ({datas})  {
  return (
    <Layout>
        <Fade top>
            <div className="w-full h-[375px] bg-cover contrast-125" style={{backgroundImage:"url('/assets/images/back22.png')"}}>
                <div className="w-full h-full bg-black bg-opacity-20 flex flex-col justify-center items-center">
                    <p className="text-6xl text-green-800 font-bold mb-5">FLEXI PACKAGES</p>
                    <button className="bg-green-800 hover:bg-green-600 text-white text-xl px-4 py-3 rounded-md">Book Now  {"\u2794"}</button>
                </div>
            </div>
        </Fade>
        <ul className="flex flex-col my-5 s px-10">
            {datas.map((data,index)=>
                <li className="my-5 box-border" key={index}>
                    <Fade {...(index%2==0)?{left:true}:{right:true}}>
                        <CarouselLarge data={data.images} title={data.title} desc={data.desc} isLeft={index%2==0} key={index}/>
                    </Fade>
                </li>
            )}
        </ul>
        
    </Layout>
  )
}


export async function getStaticProps(){    
    return {
        props:{
            datas:sampleDatas,
        }
    }
}