import Navbar from '../components/navbar';
import React from 'react';
import StoryWrapper from './components/story_wrapper';

import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export default {
  title: 'Example/Navbar',
  component: Navbar,
  argTypes: {
    buttonNames: { control: 'array' },
    buttonUrls:{control: 'array'}
  },
  decorators:[
    (Story)=>
      <StoryWrapper>
        <Story/>
      </StoryWrapper>
  ]
};

const Template = ({buttonNames,buttonUrls}) => <Navbar buttonList={buttonNames.map((name,ind)=>({name,url:buttonUrls.length>ind?buttonUrls[ind]:"/"}))} />;

export const Default = Template.bind({});
Default.args = {
  buttonNames:[
    "Home",
    "Packages",
    "Experiences",
    "Hotels"
  ],
  buttonUrls:[]
};

Default.argTypes = {
  buttonNames: { control: 'array' },
  buttonUrls:{control: 'array'}
};