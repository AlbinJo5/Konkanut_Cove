import Layout from "@/components/layout";
import LocationPanel from "@/components/location-panel";
import MainHeader, { MainText, MainTitle } from "@/components/main-header";
import Page1Form from "@/components/page1-form";
import Link from "next/link";
import { useRef, useState } from "react";

function FormModal({ showModal, setShowModal }) {
  const ref = useRef(null);
  const closeModal = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  if (!showModal) return null;
  return (
    <div
      className="fixed z-50 inset-0 flex justify-center items-center px-1 bg-black bg-opacity-25 md:hidden"
      onClick={closeModal}
    >
      <div className="max-sm:w-[100vh]" ref={ref}>
        <Page1Form />
      </div>
    </div>
  );
}

export default function Gallery({ text, email, phone }) {
  const [modal, showModal] = useState(false);

  return (
    <Layout>
      <div
        className="bg-cover"
        style={{ backgroundImage: "url('/assets/images/back-contact.png')" }}
      >
        <div className="py-40 bg-black bg-opacity-20 min-h-screen">
          <MainHeader>
            <MainTitle width="600px">Contact Us</MainTitle>
            <MainText width="800px">{text}</MainText>
          </MainHeader>
          <FormModal showModal={modal} setShowModal={showModal} />

          <div className="flex flex-col items-center mt-5">
            <div className=" z-50 bottom-[-200px] max-md:hidden flex justify-center w-full">
              <Page1Form />
            </div>
            <div className=" z-40  md:hidden flex justify-center w-full">
              <p
                className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded pointer"
                onClick={() => showModal(true)}
              >
                Submit feedback form
              </p>
            </div>
          </div>

          <div className="flex max-xs:flex-col text-white justify-center w-full">
            <div className="flex flex-col items-center justify-center mt-5 sm:mr-40 mr-20 max-xs:mr-0">
              <p className="text-lg mb-3">Email</p>
              <Link
                rel="stylesheet"
                href={"mailto:" + email}
                className="bg-green-800 font-bold px-5 text-neutral-50 py-4 rounded-md"
              >
                {email}
              </Link>
            </div>
            <div className="flex flex-col items-center mt-5">
              <p className="text-lg  mb-3">Phone</p>
              <Link
                rel="stylesheet"
                href={"tel:" + phone}
                className="bg-green-800 text-neutral-50 font-bold px-5 py-4 rounded-md"
              >
                {email}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types",
      email: "abcd.xyz.com",
      phone: "9081456789",
    },
  };
}
