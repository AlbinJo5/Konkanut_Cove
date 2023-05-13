import Layout from '@/components/layout'
import React from 'react'
import Page4Panel3 from '@/components/page4-panel3';
import { ClothesCardigan, Fitness, ForkSpoon, Parking, SwimmingPool, Wifi } from "@icon-park/react"

const imageDatas = [
  {
    image: "/assets/images/beds/bed_1.png",
  },
  {
    image: "/assets/images/beds/bed_2.png",
  },
  {
    image: "/assets/images/beds/bed_3.png",
  },
  {
    image: "/assets/images/beds/bed_4.png",
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
]

const landmarks = [
  {
    distance: "0.5km",
    placeName: "Aero city Metro Station"
  },
  {
    distance: "0.5km",
    placeName: "Pune Express Railway Station"
  },
  {
    distance: "1.0km",
    placeName: "Pune International Airport"
  },
]


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
  {
    name: "Fitness",
    icon: Fitness
  }, {
    name: "Laundry",
    icon: ClothesCardigan
  }
]

const bedTypes = [
  {
    image: "/assets/images/beds/bed_1.png",
    type: 'Classic Deluxe 1',
    view: 'No view',
    beds: 'Double bed',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesLorem Ipsum"
  }, {
    image: "/assets/images/beds/bed_1.png",
    type: 'Classic Deluxe 2',
    view: 'No view',
    beds: 'Double bed',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesLorem Ipsum"
  }, {
    image: "/assets/images/beds/bed_1.png",
    type: 'Classic Deluxe 3',
    view: 'No view',
    beds: 'Double bed',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesLorem Ipsum"
  }, {
    image: "/assets/images/beds/bed_1.png",
    type: 'Classic Deluxe 4',
    view: 'No view',
    beds: 'Double bed',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesLorem Ipsum"
  }, {
    image: "/assets/images/beds/bed_1.png",
    type: 'Classic Deluxe 5',
    view: 'No view',
    beds: 'Double bed',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesLorem Ipsum"
  },

]

export default function HotelInfo() {

  const props = {
    images: imageDatas,

    hotelName: "RP Residency",
    address: "45 Road Devbag , Maharashtra",
    landmarks: landmarks,
    until: Date(3, 4, 2023),
    after: Date(9, 12, 2023),
    importantNotes: [
      "Couples are Welcome",
      "Guests can check in using any local or outstation ID proof (pan card not accepted)",
      "As a complementary benefit, your stay is now insured by Acho"
    ],

  }
  return (
    <Layout>
      <div className="mt-24">
        <Page4Panel3 {...props} landmarks={landmarks} bedTypes={bedTypes} options={options} />
      </div>
    </Layout>
  )
}


