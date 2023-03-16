import React from 'react';
import StoryWrapper from './components/story_wrapper';
import Page5Panel3 from '../components/page5-panel3';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Page-5/Page5Panel3',
  component: Page5Panel3,
  argTypes: {
    heading:{control:"text"},
    maxWidth:{control:"text"},
    button:{control:"object"},
    paragraphs:{controls:"Array"},
    classNames:{controls:"Array"}
   },
  decorators:[
    (Story)=>
      <div className="bg-[#F9FCEE] pt-16">
        <Story/>
      </div>
  ]
};

const Template = (args) =>
    <Page5Panel3 {...args}/>

export const Default = Template.bind({});
Default.args = {
  image:"/assets/images/sample.png",
  heading:"DEVBAG",
  title:"GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
  maxWidth:"350px",
  button:{name:"View Package",onClick:()=>alert("clicked!")},
  paragraphs:["It is famous for Scuba Diving, serene beaches, beautiful temples, historical forts and its delicious cuisine. Sindhudurg is the only official Scuba Diving destination in Maharashtra.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.Lorem Ipsum is"
  ],
  alignLeft:true,
}

export const Right = Template.bind({});
Right.args = {
  image:"/assets/images/sample.png",
  heading:"DEVBAG",
  title:"GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
  maxWidth:"350px",
  button:{name:"View Package",onClick:()=>alert("clicked!")},
  paragraphs:["It is famous for Scuba Diving, serene beaches, beautiful temples, historical forts and its delicious cuisine. Sindhudurg is the only official Scuba Diving destination in Maharashtra.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.Lorem Ipsum is"
  ],
  alignLeft:false,
}

export const AddClass = Template.bind({});
AddClass.args = {
  image:"/assets/images/sample.png",  
  heading:"DEVBAG",
  title:"GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
  maxWidth:"350px",
  button:{name:"View Package",onClick:()=>alert("clicked!")},
  paragraphs:["It is famous for Scuba Diving, serene beaches, beautiful temples, historical forts and its delicious cuisine. Sindhudurg is the only official Scuba Diving destination in Maharashtra.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.Lorem Ipsum is"
  ],
  classNames:["mx-5","bg-red-500"],
}