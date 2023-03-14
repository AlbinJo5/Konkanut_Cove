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
        <div className='p-5'><Story/></div>
      </StoryWrapper>
  ]
};

const Template = (args) => <ButtonPanel {...args}/>;

export const Default = Template.bind({});
Default.args = {

};