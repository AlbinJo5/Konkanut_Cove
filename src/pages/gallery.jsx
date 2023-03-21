import Layout from '@/components/layout'
import Page5Panel4 from '@/components/page5-panel4'
import React from 'react'

const ImageData = [
    {
      image:"/assets/images/gallery/image_5.png"
    },{
      image:"/assets/images/gallery/image_6.png"
    },{
      image:"/assets/images/gallery/image_8.png"
    },{
      image:"/assets/images/gallery/image_10.png"
    },{
      image:"/assets/images/gallery/image_11.png"
    }
    ];

export default function Gallery({images}) {
  return (
    <Layout>
        <div className="container mx-auto mt-28 flex justify-center">
            <div className="w-full lg:w-[70%]">
                <Page5Panel4 images={images}/>
            </div>
            
        </div>
    </Layout>
  )
}

export async function getStaticProps(){
    return {
        props:{
            images:ImageData
        }
    }
}
