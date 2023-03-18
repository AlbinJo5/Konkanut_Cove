import React from 'react';
import StoryWrapper from './components/story_wrapper';

import * as NextImage from "next/image";
import Page5Panel4 from '../components/page5-panel4';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const ImageData = [
  {
    image:"/assets/images/photo-gallery-1/image_4.png"
  },{
    image:"/assets/images/photo-gallery-1/image_5.png"
  },{
    image:"/assets/images/photo-gallery-1/image_6.png"
  },
  ];
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Page-5/Page5Panel4',
  component: Page5Panel4,
  argTypes: {
  },
  decorators:[
    (Story)=>
        <div className='w-full'><Story/></div>
  ]
};

const Template = (args) => <Page5Panel4 {...args}/>;

export const Default = Template.bind({});
Default.args = {
  images:ImageData,
};