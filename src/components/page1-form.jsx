import { Local, Mail, PhoneCall } from '@icon-park/react';
import React from 'react'

const IconText = ({Icon,text})=>{
    return(
        <div className="flex justify-left w-full mb-5">
            <Icon size="24" theme="outline" fill="white"/>
            <div className="ml-3">{text}</div>
        </div>
    );
}

export default function Page1Form(){
    const classTextInput="border-b-1 border-x-0 border-t-0 border-gray-600 focus:ring-0 placeholder:text-gray-300 mb-2";
  return (
    <div className="flex max-md:flex-col bg-white max-sm:justify-center w-min max-sm:w-full scale-[0.9] md:scale-[0.7] sm:scale-[0.6]">
        <form action="" className="flex flex-col max-sm:px-5 sm:pl-16 w-full sm:w-[350px] sm:mr-20 my-12 sm:my-16">
            <div className="text-2xl font-bold mb-2 text-center">Send Message</div>
            <div className='grid grid-rows-4 sm:grid-cols-2 sm:grid-rows-3 sm:gap-2'>
                <input type="text" className={classTextInput+" sm:col-span-2"} placeholder="Full Name"/>
                <input type="text" className={classTextInput} placeholder="Mobile No"/>
                <input type="text" className={classTextInput} placeholder="Email"/>
                <input type="text" className={classTextInput+" sm:col-span-2"} placeholder="Enter Message"/>
            </div>
        </form>
        <div className="flex flex-col justify-center pl-16 w-[300px] bg-green-800 text-white max-sm:w-full py-5">
            <div className="text-2xl font-bold mb-5">Contact Info</div>
            <IconText Icon={Local} text="Xyz dummy text, Pune, Maharashtra"/>
            <IconText Icon={Mail} text="xyz@gmail.com"/>
            <IconText Icon={PhoneCall} text="+919081464456"/>
        </div>
    </div>
    )
}
