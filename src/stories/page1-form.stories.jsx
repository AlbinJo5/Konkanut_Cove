import React from 'react';
import StoryWrapper from './components/story_wrapper';

import * as NextImage from "next/image";
import Page1Form from '../components/page1-form';


const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Example/Page1Form',
  component: Page1Form,
  argTypes: {
  },
  decorators:[
    (Story)=>
      <StoryWrapper>
        <div className='p-0'><Story/></div>
      </StoryWrapper>
  ]
};

const Template = (args) => <Page1Form {...args}/>;

export const Default = Template.bind({});
Default.args = {

};