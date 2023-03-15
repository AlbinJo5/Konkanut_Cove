import Page4Slider from '../components/page4-slider';
import React from 'react';
import MainHeader, { MainTitle,MainText } from '../components/main-header';
import { Wrapper } from './components/wrapper';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Page-4/Page4Slider-2',
  component: Page4Slider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  decorator:[
    (Story)=>{
      return <div className="p-20 w-min flex"><Story/></div>
    }
  ],
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Wrapper {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  widthTitle:600,
  widthText:800,
  widthSlider:100,
  ratioSlider:60,
  titleSize:"48px",
  title:"Enjoy Your Dream Vacation",
  text:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types",
  name1:"Hotels",
  name2:"Home Stay"
};
