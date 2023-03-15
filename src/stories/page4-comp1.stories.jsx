import Page4Slider from '../components/page4-slider';
import React from 'react';
import { Wrapper } from './components/wrapper';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Page-4/Page4Slider',
  component: Wrapper,
  argTypes: {
  },
};

const Template = (args) => <Wrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  widthTitle:600,
  widthText:800,
  widthSlider:400,
  ratioSlider:60,
  titleSize:"48px",
  title:"Enjoy Your Dream Vacation",
  text:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types",
  name1:"Hotels",
  name2:"Home Stay"
};
