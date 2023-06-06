import InitialLoading from '@/admin_components/initialLoading';
import Layout from '@/components/layout'
import Page5Panel4 from '@/components/page5-panel4'
import { getAllData } from '@/utils/firebase_data_handler';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

const images = [
  {
    image: "/assets/images/gallery/image_5.png"
  }, {
    image: "/assets/images/gallery/image_6.png"
  }, {
    image: "/assets/images/gallery/image_8.png"
  }, {
    image: "/assets/images/gallery/image_10.png"
  }, {
    image: "/assets/images/gallery/image_11.png"
  }
];



export default function Gallery() {

  const gallery = useQuery(["gallery"],
    () => getAllData("Gallery"),
    {
      staleTime: 1000 * 60 * 10,
    }
  );
  return (
    <Layout>
      <div className="container mx-auto mt-28 flex justify-center">
        <div className="w-full lg:w-[70%]">
          {
            gallery.isLoading ? <div className="flex justify-center"><InitialLoading /></div> : <Page5Panel4 images={gallery?.data?.data} />
          }

        </div>

      </div>
    </Layout>
  )
}

