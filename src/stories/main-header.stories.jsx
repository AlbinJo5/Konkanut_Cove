import MainHeader, { MainText, MainTitle } from '../components/main-header';
import React from 'react';
import StoryWrapper from './components/story_wrapper';
export default {
  title: 'Example/MainHeader',
  component: MainHeader,
  argTypes: {
    widthTitle:{
     control:"text",
    },
    widthText:{
     control:"text"
    },
    title:{
     control:"text"
    },
   text:{
     control:"text"
   }
   },
  decorators:[
    (Story)=>
      <StoryWrapper>
        <Story/>
      </StoryWrapper>
  ]
};

const Template = ({widthText,widthTitle,title,text}) => 
                                    <MainHeader>
                                      <MainTitle width={widthTitle}>
                                        Spend Quality Holidays <span className="text-green-800"> With Us.</span>
                                      </MainTitle>
                                      <MainText width={widthText}>Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types</MainText>
                                    </MainHeader>

export const Default = Template.bind({});
Default.args = {
  widthTitle:"100%",
  widthText:"100%"
};

Default.argTypes = {
 widthTitle:{
  control:"text",
 },
 widthText:{
  control:"text",
 },
 title:{
  control:"text"
 },
text:{
  control:"text"
}
};