import Page2Panel from '../components/page2-panel';
import React from 'react';


export default {
  title: 'Example/Page2Panel',
  component: Page2Panel,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators:[
    (Story)=>
        <div className="w-[350px]"><Story/></div>
  ]
};

const Template = (args) => <Page2Panel {...args} />;

export const Default = Template.bind({});
Default.args = {
    image:"https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title:"Sample Title 1",
    duration:"3 days 5 nights",
    desc:"Lorem Ipsum is simply dummy text of theprinting and typesetting Lorem Ipsum is ",
    discounted_rate:1900,actual_rate:2200,percent_off:5
};
