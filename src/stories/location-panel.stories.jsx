import React from 'react';
import StoryWrapper from './components/story_wrapper';

import * as NextImage from "next/image";
import LocationPanel from '../components/location-panel';


const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Page-1/LocationPanel',
  component: LocationPanel,
  argTypes: {
  },
  decorators:[
    (Story)=>
     <>
      <div className="h-[150vh] w-full " style={{
            backgroundImage:"url('/assets/images/background.png')"
        }}></div>
      <LocationPanel/>
     </>
  ]
};

const Template = (args) => <LocationPanel {...args}/>;

export const Default = Template.bind({});
Default.args = {

};