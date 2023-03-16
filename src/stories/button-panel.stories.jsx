import React from 'react';
import StoryWrapper from './components/story_wrapper';

import * as NextImage from "next/image";
import ButtonPanel from '../components/button-panel';


const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'PAGE-3/ButtonPanel',
  component: ButtonPanel,
  argTypes: {
  },
  decorators:[
    (Story)=>
      <StoryWrapper>
        <div className='py-5 sm:p-9'><Story/></div>
      </StoryWrapper>
  ]
};

const optionList=['Accommodation', 'Activities', 'Transport'];

const Template = (args) => <ButtonPanel {...args}/>;

export const Default = Template.bind({});
Default.args = {
  optionList,
};