import React from 'react';
import * as NextImage from "next/image";
import Page3PicPanel from '../components/page3-pic-panel';
import { Airplane, Car, Hotel } from '@icon-park/react';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export default {
  title: 'Page-3/Page3PicPanel',
  component: Page3PicPanel,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators:[
    (Story)=>
        <div className="w-full p-2"><Story/></div>
  ]
};

const Template = (args) => <Page3PicPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  duration:"3days,2nights",
  images:{
          image1:
          "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      
          image2:
          "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
      
          image3:
          "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      
          image4:
          "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
      
          image5:
          "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",        
          image6:"/assets/images/fort.png"
  },    
  imagesRemaining:7,
  desc:"All-Inclusive 3 Days Holiday - Flights, Sightseeing & Transfers ",
  startingPrice:20000,
  startingDate:Date(2,3,21),
  endingDate:Date(2,5,22)
};