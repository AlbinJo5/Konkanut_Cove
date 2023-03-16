import React from 'react';
import StoryWrapper from './components/story_wrapper';
import DescriptionComp from '../components/description-comp';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Page-1/DescriptionComp',
  component: DescriptionComp,
  argTypes: {
    heading:{control:"text"},
    maxWidth:{control:"text"},
    button:{control:"object"},
    paragraphs:{controls:"Array"},
    classNames:{controls:"Array"}
   },
  decorators:[
    (Story)=>
      <StoryWrapper>
        <Story/>
      </StoryWrapper>
  ]
};

const Template = (args) =>
    <DescriptionComp {...args}/>

export const Default = Template.bind({});
Default.args = {
  heading:"Why Sindhuburg",
  maxWidth:"350px",
  button:{name:"View Package",onClick:()=>alert("clicked!")},
  paragraphs:["It is famous for Scuba Diving, serene beaches, beautiful temples, historical forts and its delicious cuisine. Sindhudurg is the only official Scuba Diving destination in Maharashtra.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.Lorem Ipsum is"
  ],
  alignLeft:true,
}

export const Right = Template.bind({});
Right.args = {
  heading:"Why Sindhuburg",
  maxWidth:"350px",
  button:{name:"View Package",onClick:()=>alert("clicked!")},
  paragraphs:["It is famous for Scuba Diving, serene beaches, beautiful temples, historical forts and its delicious cuisine. Sindhudurg is the only official Scuba Diving destination in Maharashtra.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.Lorem Ipsum is"
  ],
  alignLeft:false,
}

export const AddClass = Template.bind({});
AddClass.args = {
  heading:"Why Sindhuburg",
  maxWidth:"350px",
  button:{name:"View Package",onClick:()=>alert("clicked!")},
  paragraphs:["It is famous for Scuba Diving, serene beaches, beautiful temples, historical forts and its delicious cuisine. Sindhudurg is the only official Scuba Diving destination in Maharashtra.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.Lorem Ipsum is"
  ],
  classNames:["mx-5","bg-red-500"],
}