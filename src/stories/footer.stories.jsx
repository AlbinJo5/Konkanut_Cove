import React from 'react';
import StoryWrapper from './components/story_wrapper';

import * as NextImage from "next/image";
import Footer from '../components/footer';
import LocationPanel from '../components/location-panel';


const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Example/Footer',
  component: Footer,
  argTypes: {
  },
  decorators:[
    (Story)=>
     <>
      <div className="h-[150vh] w-full " style={{
            backgroundImage:"url('/assets/images/background.png')"
        }}></div>
      <LocationPanel/>
      <Footer/>
     </>
  ]
};

const Template = (args) => <Footer {...args}/>;

export const Default = Template.bind({});
Default.args = {

};