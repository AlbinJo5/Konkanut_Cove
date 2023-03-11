import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import StoryWrapper from '@/stories/components/story_wrapper'
import Page3Panel from '@/components/page3-panel'
import { Airplane, Car, Hotel } from '@icon-park/react';

const inter = Inter({ subsets: ['latin'] })

const args={
  title: "Day 1 : Trip to Agra",
  includedList:[
    {
      title:"Airport",
      Icon:Airplane
    },{
      title:"Accomodation",
      Icon:Hotel     
    },{
      title:"Travel",
      Icon:Car 
    }
  ],
  title2:"Arrival at Kudal or Sawantwadi / Chipi Airport - Devgad",
  desc:["Arrival at Kudal or Sawantwadi Railway station or Chipi airport. Proceed to devgad and check into the hotel.",
        "Morning, Proceed to Devgad Fort, situated at the confluence of Devgad Creek and Arabian Sea. Placed strategically on a narrow strip of land jutting into the Arabian Sea & proceed to Devgad beach for Zip Lining.",
        "Later Proceed to Kunkeshwar temple by Beautiful coastal road. A pristine beach with a very long stretch of seashoreand white sand adds to the beauty of temple surroundings. Later in the evening, proceed to AcharaJetty for Mangrove Safari.", 
        "Also visit Gajba devi temple for panoramic view. Thenproceed back to the hotel for mesmerizing sunset.Overnight stay at hotel."
        ]
};

export default function Home() {
  return (
    <>
      <div className="w-full sm:w-[500px] ">
        <Page3Panel {...args}/>
      </div>
    </>
  )
}
