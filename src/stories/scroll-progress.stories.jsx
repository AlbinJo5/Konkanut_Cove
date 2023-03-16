import React from 'react';
import StoryWrapper from './components/story_wrapper';

import * as NextImage from "next/image";
import ScrollPages from '../components/scroll-progress';


const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Page-1/ScrollPages',
  component: ScrollPages,
  argTypes: {
  },
  decorators:[
    (Story)=>
      <StoryWrapper>
        <div className="fixed w-full h-[15vh] bg-red-800 opacity-40"></div>
        <div className='p-5'><Story/></div>
        <div className="h-[100vh]"></div>
      </StoryWrapper>
  ]
};

const Template = (args) => <ScrollPages {...args}/>;

export const Default = Template.bind({});
Default.args = {

};