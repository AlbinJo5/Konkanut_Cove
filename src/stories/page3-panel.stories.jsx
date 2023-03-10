import React from 'react';
import * as NextImage from "next/image";
import Page3Panel from '../components/page3-panel';
import SvgAirport from '../svgrs/Airport';
import SvgOrganization from '../svgrs/Organization';
import SvgVector from '../svgrs/Vector';
import { Airplane, Car, Hotel } from '@icon-park/react';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export default {
  title: 'Page-3/Page3Panel',
  component: Page3Panel,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators:[
    (Story)=>
        <div className="w-[800px]"><Story/></div>
  ]
};

const Template = (args) => <Page3Panel {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Day 1 : Trip to Agra",
  includedList:[
    {
      title:"Airport",
      Icon:Airplane
    },{
      title:"Accomodation",
      Icon:Hotel     
    },{
      title:"Travel",
      Icon:Car 
    }
  ]
};