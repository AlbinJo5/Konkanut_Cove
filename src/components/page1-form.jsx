import { uploadData } from "@/utils/firebase_data_handler";
import { Local, Mail, PhoneCall } from "@icon-park/react";
import React from "react";
import { useState } from "react";

const IconText = ({ Icon, text }) => {
  return (
    <div className="flex justify-left w-full mb-5">
      <Icon size="24" theme="outline" fill="white" />
      <div className="ml-3">{text}</div>
    </div>
  );
};

export default function Page1Form() {
  const [loading, setloading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    const name = e.target[0].value;
    const phone = e.target[1].value;
    const email = e.target[2].value;
    const message = e.target[3].value;

    uploadData(
      {
        name,
        phone,
        email,
        message,
      },
      "Contact"
    )
      .then((res) => {
        if (res.message === "success") {
          alert("Message sent successfully");
          setloading(false);
        }
      })
      .catch((err) => {
        alert("Error in sending message");
        setloading(false);
      });
  };

  const classTextInput =
    "border-b-1 border-x-0 border-t-0 border-gray-600 focus:ring-0 placeholder:text-gray-300 mb-2";
  return (
    <div className="flex max-md:flex-col bg-white max-sm:justify-center w-min max-sm:w-full scale-[0.9] md:scale-[0.7] sm:scale-[0.6]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-sm:px-5 sm:pl-16 w-full sm:w-[600px] sm:h-[250px] sm:mr-20 my-12 sm:my-16"
      >
        <div className="text-2xl font-bold mb-2 text-center">Send Message</div>
        <div className="grid grid-rows-4 sm:grid-cols-2 sm:grid-rows-3 sm:gap-2">
          <input
            required
            type="text"
            className={classTextInput + " sm:col-span-2"}
            placeholder="Full Name"
          />
          <input
            type="text"
            className={classTextInput}
            placeholder="Mobile No"
          />
          <input
            required
            type="text"
            className={classTextInput}
            placeholder="Email"
          />
          <input
            required
            type="text"
            className={classTextInput + " sm:col-span-2"}
            placeholder="Enter Message"
          />
          <button
            type="submit"
            className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
      <div className="flex flex-col justify-center pl-16 w-[350px] bg-green-800 text-white max-md:w-full py-4">
        <div className="text-2xl font-bold mb-5">Contact Info</div>
        <IconText Icon={Local} text="Xyz dummy text, Pune, Maharashtra" />
        <IconText Icon={Mail} text="xyz@gmail.com" />
        <IconText Icon={PhoneCall} text="+919081464456" />
      </div>
    </div>
  );
}
