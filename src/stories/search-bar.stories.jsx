import React from 'react';
import StoryWrapper from './components/story_wrapper';

import * as NextImage from "next/image";
import SearchBar from '../components/search-bar';


const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Example/SearchBar',
  component: SearchBar,
  argTypes: {
  },
  decorators:[
    (Story)=>
      <StoryWrapper>
        <div className='p-5'><Story/></div>
      </StoryWrapper>
  ]
};

const Template = (args) => <SearchBar {...args}/>;

export const Default = Template.bind({});
Default.args = {

};