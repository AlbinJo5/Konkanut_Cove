import ReactDOMServer from "react-dom/server";
import MainHeader, { MainText, MainTitle } from "@/components/main-header";
import Navbar from "@/components/navbar";
import Head from "next/head";
import SearchBar from "@/components/search-bar";
import Layout from "@/components/layout";
import Description from "@/components/description";
import LocationPanel from "@/components/location-panel";
import Page1Form from "@/components/page1-form";
import { useRef, useState } from "react";
import { Fade } from "react-reveal";
import Image from "next/image";

const carouselData = [
  {
    image:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
];

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

export default function Home() {
  const props = {
    mainTitle:
      "Spend Quality Holidays <span key={2} style='color:#22543d;'> With Us.</span>",
    mainText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types",
    widthTitle: "600px",
    widthText: "800px",
    sections: [
      {
        desc: {
          heading: "Why Sindhuburg",
          maxWidth: "350px",
          paragraphs: [
            "It is famous for Scuba Diving, serene beaches, beautiful temples, historical forts and its delicious cuisine. Sindhudurg is the only official Scuba Diving destination in Maharashtra.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.Lorem Ipsum is",
          ],
          alignLeft: true,
        },
        carousel: {
          type: 1,
          images: carouselData,
        },
      },

      {
        desc: {
          heading: "About Sindhudurg ",
          maxWidth: "350px",
          paragraphs: [
            "Sindhudurg is the First Tourism District declared in Maharashtra in the year 1997. Sindhudurg has a 121-kilometer-long coastline.",
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.Lorem Ipsum is ",
          ],
          alignLeft: false,
        },
        carousel: {
          type: 3,
          images: carouselData,
        },
      },

      {
        desc: {
          heading: "Places ",
          maxWidth: "350px",
          paragraphs: [
            "We give you more of what you want and less of what you don’t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarddummy text ever since the 1500s.",
            "Lorem Ipsum has been the industry's standarddummy text ever since the 1500s,.Lorem Ipsum is ",
          ],
          alignLeft: false,
        },
        carousel: {
          type: 2,
          images: carouselData,
        },
      },

      {
        desc: {
          heading: "Places 2",
          maxWidth: "350px",
          paragraphs: [
            "We give you more of what you want and less of what you don’t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarddummy text ever since the 1500s.",
            "Lorem Ipsum has been the industry's standarddummy text ever since the 1500s,.Lorem Ipsum is ",
          ],
          alignLeft: false,
        },
        carousel: {
          type: 1,
          images: carouselData,
        },
      },

      {
        desc: {
          heading: "Places 3",
          maxWidth: "350px",
          paragraphs: [
            "We give you more of what you want and less of what you don’t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarddummy text ever since the 1500s.",
            "Lorem Ipsum has been the industry's standarddummy text ever since the 1500s,.Lorem Ipsum is ",
          ],
          alignLeft: false,
        },
        carousel: {
          type: 1,
          images: carouselData,
        },
      },

      {
        desc: {
          heading: "Places 4",
          maxWidth: "350px",
          paragraphs: [
            "We give you more of what you want and less of what you don’t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarddummy text ever since the 1500s.",
            "Lorem Ipsum has been the industry's standarddummy text ever since the 1500s,.Lorem Ipsum is ",
          ],
          alignLeft: false,
        },
        carousel: {
          type: 1,
          images: carouselData,
        },
      },
    ],
  }
  const {
    mainTitle,
    mainText,
    widthText,
    widthTitle,
    sections,
  } = props;
  const [modal, showModal] = useState(false);
  return (
    <Layout>
      <Head>
        <title>Welcome to Konkanut Cove!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <FormModal showModal={modal} setShowModal={showModal} />
      <div className="w-full relative m-0 h-max   ">
        <div className="w-[100vw] h-max p-0 m-0  flex flex-col justify-center   z-10 bg-black bg-opacity-90">
          <Image
            src="assets/images/background.png"
            alt="background"
            className="object-cover absolute z-0"
            width={1920}
            height={1080}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            priority
          />

          <Fade bottom>
            <div className="py-24">
              <MainHeader>
                <MainTitle width={widthTitle}>{mainTitle}</MainTitle>
                <MainText width={widthText}>{mainText}</MainText>
              </MainHeader>
            </div>
          </Fade>

          <div className="flex w-[100vw]  justify-center  mb-10">
            <div className=" opacity-90   ">
              <SearchBar />
            </div>
          </div>

          <Description sections={sections} />
        </div>
      </div>
      <div className="relative">
        <div className="z-0">
          <LocationPanel />
        </div>
        <div className="absolute z-50 top-[60%] max-md:hidden flex justify-center w-full">
          <Page1Form />
        </div>
        <div className="absolute z-40 top-[70%] sm:hidden flex justify-center w-full">
          <p
            className="underline text-green-800 text-md hover:text-green-700 hover:text-sm cursor-pointer"
            onClick={() => showModal(true)}
          >
            {" "}
            Submit feedback form
          </p>
        </div>
      </div>
    </Layout>
  );
}

