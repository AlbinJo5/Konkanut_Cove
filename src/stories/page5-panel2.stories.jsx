import React from 'react';
import StoryWrapper from './components/story_wrapper';

import * as NextImage from "next/image";
import Page5Panel2 from '../components/page5-panel2';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const ImageData = [
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
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Page-5/Page5Panel2',
  component: Page5Panel2,
  argTypes: {
  },
  decorators:[
    (Story)=>
        <div className='w-full'><Story/></div>
  ]
};

const Template = (args) => <Page5Panel2 {...args}/>;

export const Default = Template.bind({});
Default.args = {
  title:"Why Konkanut Cove?",
  featureData:ImageData,
  videoLink:"https://www.youtube.com/embed/EngW7tLk6R8"
};