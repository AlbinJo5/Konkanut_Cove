import Layout from '@/components/layout'
import Page5Panel1 from '@/components/page5-panel1';
import Page5Panel2 from '@/components/page5-panel2';
import React from 'react'

const imageData = [
  {
    image:"/assets/images/photo-gallery-1/image_4.png"
  },{
    image:"/assets/images/photo-gallery-1/image_5.png"
  },{
    image:"/assets/images/photo-gallery-1/image_6.png"
  },
  ];

  const featureData = [
    {
      image:"/assets/images/feature/image_6.png",
      title:"50+ Flexi Packages",
      desc:"We give you more of what you want and less of what you don\u2019t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
      color:"bg-green-300",
      imwidth:150,
      imheight:150
    },{
      image:"/assets/images/feature/image_7.png",
      title:"100+ Hotel Bookings",
      desc:"We give you more of what you want and less of what you don\u2019t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
      color:"bg-amber-300"
    },{
      image:"/assets/images/feature/image_8.png",
      title:"100+ Exquisite place",
      desc:"We give you more of what you want and less of what you don\u2019t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
      color:"bg-blue-300"
    },
];

export default function Experiences({imageData,count,title,featureData,videoLink}) {
  return (
    <Layout>
        <div className="my-12"></div>
        <Page5Panel1 imageData={imageData} count={count}/>
        <Page5Panel2 title={title} featureData={featureData} videoLink={videoLink}/>

    </Layout>
  )
}


export async function getStaticProps(){
    return {
        props:{
            imageData,
            count:30,
            featureData,
            videoLink:"https://www.youtube.com/embed/EngW7tLk6R8",

        }
    }
}