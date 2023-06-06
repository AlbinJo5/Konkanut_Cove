import Layout from '@/components/layout'
import React, { useEffect, useState } from 'react'
import Page4Panel3 from '@/components/page4-panel3';
import { ClothesCardigan, Fitness, ForkSpoon, Parking, SwimmingPool, Wifi } from "@icon-park/react"
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { getAllData, getDataById } from '@/utils/firebase_data_handler';
import InitialLoading from '@/admin_components/initialLoading';

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
  const id = useRouter().query.hotel
  const [props, setProps] = useState({
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
  })
  const [loading, setLoading] = useState(true)
  const hotelsData = useQuery(
    ['hotels', id],
    () => {
      return getDataById(`Hotels/${id}`)
    },
    {
      staleTime: 1000 * 60 * 5,
      enabled: !!id
    }
  )
  const roomsData = useQuery(
    ['hotels', id, 'rooms'],
    () => {
      return getAllData(`Hotels/${id}/Rooms`)
    },
    {
      staleTime: 1000 * 60 * 5,
      enabled: !!id
    }
  )

  const landmarksData = useQuery(
    ['hotels', id, 'landmarks'],
    () => {
      return getAllData(`Hotels/${id}/Landmarks`)
    },
    {
      staleTime: 1000 * 60 * 5,
      enabled: !!id
    }
  )

  useEffect(() => {
    if (hotelsData.isSuccess && roomsData.isSuccess && landmarksData.isSuccess) {
      const hotel = hotelsData.data.data
      const rooms = roomsData.data.data
      const landmarks = landmarksData.data.data
      const newImages = hotel.images.map((image) => {
        return {
          image: image
        }
      })
      const newBedTypes = rooms.map((room) => {
        return {
          image: room.image,
          type: room.title,
          view: room.view,
          beds: room.beds,
          desc: room.description,
          people: room.people,
        }
      })

      const newLandmarks = landmarks.map((landmark) => {
        return {
          distance: landmark.distance,
          placeName: landmark.name
        }
      })


      setProps((prev) => {
        return {
          ...prev,
          images: newImages,
          hotelName: hotel.title,
          address: hotel.address,
          landmarks: newLandmarks,
          bedTypes: newBedTypes,
          until: hotel.cancelTime,
          after: hotel.after,
          importantNotes: hotel.description,
          map: hotel.map,
          ac: hotel.ac,
          id: hotel.id,
          terms: hotel.terms,
        }
      })
      setLoading(false)
    }
  }, [
    hotelsData.isSuccess,
    roomsData.isSuccess,
    landmarksData.isSuccess,
    hotelsData.data,
    roomsData.data,
    landmarksData.data,
  ])

  return (
    <Layout>
      <div className="mt-24">
        {
          loading ? (
            <InitialLoading />
          ) : (
            <Page4Panel3 {...props} landmarks={props.landmarks} bedTypes={props.bedTypes} options={options} />
          )
        }
      </div>
    </Layout>
  )
}


