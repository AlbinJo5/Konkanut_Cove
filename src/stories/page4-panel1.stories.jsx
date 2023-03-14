import React from 'react';

import * as NextImage from "next/image";
import Page4Panel1 from '../components/page4-panel1';
import { Select } from '../constants/select-status';


const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'PAGE-4/Page4Panel1',
  component: Page4Panel1,
  argTypes: {
  },
  decorators:[
    (Story)=>
      <div className='w-full'>
        <div className='md:p-10'><Story/></div>
      </div>
  ]
};

const subPanelDatas=[
  {
    image:"https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    D:3,N:2,
    location:"Tarkarli - Devbagh",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is ",
    price:5499
  },
  {
    image:"https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
    D:3,N:2,
    location:"Tarkarli - Devbagh",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is ",
    price:5499
  },
  {
    image:"https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    D:3,N:2,
    location:"Tarkarli - Devbagh",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is ",
    price:5499
  },
]

const Template = (args) => <Page4Panel1 {...args}/>;

export const Default = Template.bind({});
Default.args = {
  subPanelDatas
}