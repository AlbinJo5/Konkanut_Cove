import React from 'react';

import * as NextImage from "next/image";
import Page4Panel3 from '../components/page4-panel3';
import {  ClothesCardigan, Fitness, ForkSpoon, Parking, SwimmingPool,  Wifi } from "@icon-park/react"
import SvgNoView from '../svgrs/svgr-no-view';
import SvgDoubleBed from '../svgrs/double-bed';


const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'PAGE-4/Page4Panel3',
  component: Page4Panel3,
  argTypes: {
  },
  decorators:[
    (Story)=>
      <div className='w-full'>
        <div className='md:p-10'><Story/></div>
      </div>
  ]
};

const imageDatas=[
  {
    image:"/assets/images/beds/bed_1.png",
  },
  {
    image:"/assets/images/beds/bed_2.png",
  },
  {
    image:"/assets/images/beds/bed_3.png",
  },
  {
    image:"/assets/images/beds/bed_4.png",
  },
  {
    image:"/assets/images/beds/bed_5.png",
  },
  {
    image:"/assets/images/beds/bed_6.png",
  },
  {
    image:"/assets/images/beds/bed_7.png",
  },
]

const landmarks=[
  {
    distance:"0.5km",
    placeName:"Aero city Metro Station"
  },
  {
    distance:"0.5km",
    placeName:"Pune Express Railway Station"
  },
  {
    distance:"1.0km",
    placeName:"Pune International Airport"
  },
]


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
  {
    name:"Fitness",
    icon:Fitness
  },{
    name:"Laundry",
    icon:ClothesCardigan
  }
]

const bedTypes=[
  {
    image:"/assets/images/beds/bed_1.png",
    type:'Classic Deluxe 1',
    view:'No view',
    ViewIcon:SvgNoView,
    BedIcon:SvgDoubleBed,
    beds:'Double bed',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesLorem Ipsum"
  },{
    image:"/assets/images/beds/bed_1.png",
    type:'Classic Deluxe 2',
    view:'No view',
    ViewIcon:SvgNoView,
    BedIcon:SvgDoubleBed,
    beds:'Double bed',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesLorem Ipsum"
  },{
    image:"/assets/images/beds/bed_1.png",
    type:'Classic Deluxe 3',
    view:'No view',
    ViewIcon:SvgNoView,
    BedIcon:SvgDoubleBed,
    beds:'Double bed',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesLorem Ipsum"
  },{
    image:"/assets/images/beds/bed_1.png",
    type:'Classic Deluxe 4',
    view:'No view',
    ViewIcon:SvgNoView,
    BedIcon:SvgDoubleBed,
    beds:'Double bed',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesLorem Ipsum"
  },{
    image:"/assets/images/beds/bed_1.png",
    type:'Classic Deluxe 5',
    view:'No view',
    ViewIcon:SvgNoView,
    BedIcon:SvgDoubleBed,
    beds:'Double bed',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesLorem Ipsum"
  },
  
]

const Template = (args) => <Page4Panel3 {...args}/>;

export const Default = Template.bind({});
Default.args = {
  images:imageDatas,
  hotelName:"Hotel LP Residency",
  address:"45 Road Devbag , Maharashtra",
  landmarks:landmarks,
  until:Date(3,4,2023),
  after: Date(9,12,2023),
  options: options,
  importantNotes:[
    "Couples are Welcome",
    "Guests can check in using any local or outstation ID proof (pan card not accepted)",
    "As a complementary benefit, your stay is now insured by Acho"
  ],
  bedTypes:bedTypes,
  checkIn:Date(2,3,23),
  checkOut:(4,3,23),
}