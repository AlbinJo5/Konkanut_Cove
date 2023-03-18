import React from 'react';
import StoryWrapper from './components/story_wrapper';

import * as NextImage from "next/image";
import CarouselLarge from '../components/carouselLarge';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
const CarouselData = [
  {
    title: "Sample Title 1",
    image:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    desc:"Donut icing macaroon cheesecake sesame snaps powder. Shortbread chocolate bar pie powder jujubes topping bonbon pie cupcake. Fruitcake cookie jelly cake toffee chocolate bar. Macaroon apple pie tootsie roll sweet roll sugar plum brownie."
  },
  {
    title: "Sample Title 2",
    image:
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
    desc:"Donut icing macaroon cheesecake sesame snaps powder. Shortbread chocolate bar pie powder jujubes topping bonbon pie cupcake. Fruitcake cookie jelly cake toffee chocolate bar. Macaroon apple pie tootsie roll sweet roll sugar plum brownie."
    },
  {
    title: "Sample Title 3",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    desc:"Donut icing macaroon cheesecake sesame snaps powder. Shortbread chocolate bar pie powder jujubes topping bonbon pie cupcake. Fruitcake cookie jelly cake toffee chocolate bar. Macaroon apple pie tootsie roll sweet roll sugar plum brownie."
    
  },
  {
    title: "Sample Title 4",
    image:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
      desc:"Donut icing macaroon cheesecake sesame snaps powder. Shortbread chocolate bar pie powder jujubes topping bonbon pie cupcake. Fruitcake cookie jelly cake toffee chocolate bar. Macaroon apple pie tootsie roll sweet roll sugar plum brownie."
  },
  {
    title: "Sample Title 5",
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      desc:"Donut icing macaroon cheesecake sesame snaps powder. Shortbread chocolate bar pie powder jujubes topping bonbon pie cupcake. Fruitcake cookie jelly cake toffee chocolate bar. Macaroon apple pie tootsie roll sweet roll sugar plum brownie."
  },
];
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  desc: 'Page-2/Carousel-Large',
  component: CarouselLarge,
  argTypes: {
  },
  decorators:[
    (Story)=>
      <StoryWrapper>
        <div className='pt-5'><Story/></div>
      </StoryWrapper>
  ]
};

const Template = (args) => <CarouselLarge {...args}/>;

export const Default = Template.bind({});
Default.args = {
  data:CarouselData
};

export const Right = Template.bind({});
Right.args = {
  data:CarouselData,
  isLeft:true
};