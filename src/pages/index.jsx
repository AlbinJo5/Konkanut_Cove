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

const about_sindhuburg = [
  {
    image:
      "/assets/images/homecarousel/about_sindhuburg/about_sindhuburg_1.png",
  },
  {
    image:
      "/assets/images/homecarousel/about_sindhuburg/about_sindhuburg_1.png",
  },
  {
    image:
      "/assets/images/homecarousel/about_sindhuburg/about_sindhuburg_1.png",
  },
];

const why_sindhuburg = [
  {
    image: "/assets/images/homecarousel/why_sindhuburg/why_sindhuburg_1.png",
  },
  {
    image: "/assets/images/homecarousel/why_sindhuburg/why_sindhuburg_1.png",
  },
  {
    image: "/assets/images/homecarousel/why_sindhuburg/why_sindhuburg_1.png",
  },
];

const accommodations = [
  {
    image: "/assets/images/homecarousel/accommodations/accommodations_1.png",
  },
  {
    image: "/assets/images/homecarousel/accommodations/accommodations_1.png",
  },
  {
    image: "/assets/images/homecarousel/accommodations/accommodations_1.png",
  },
];

const connectivity = [
  {
    image: "/assets/images/homecarousel/connectivity/connectivity_1.png",
  },
  {
    image: "/assets/images/homecarousel/connectivity/connectivity_1.png",
  },
  {
    image: "/assets/images/homecarousel/connectivity/connectivity_1.png",
  },
];

const packages = [
  {
    image: "/assets/images/homecarousel/packages/packages_1.png",
  },
  {
    image: "/assets/images/homecarousel/packages/packages_1.png",
  },
  {
    image: "/assets/images/homecarousel/packages/packages_1.png",
  },
];

const places = [
  {
    image: "/assets/images/homecarousel/place/place_1.png",
  },
  {
    image: "/assets/images/homecarousel/place/place_1.png",
  },
  {
    image: "/assets/images/homecarousel/place/place_1.png",
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

export default function Index() {
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
          heading: "About Sindhudurg ",
          maxWidth: "350px",
          paragraphs: [
            "Sindhudurg is the First Tourism District declared in Maharashtra in the year 1997. Sindhudurg has a 121-kilometer-long coastline.",
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.Lorem Ipsum is ",
          ],
          button: "View Package",
          href: "/",
          alignLeft: false,
        },
        carousel: {
          type: 3,
          images: about_sindhuburg,
        },
      },
      {
        desc: {
          heading: "Why Sindhuburg",
          maxWidth: "350px",
          paragraphs: [
            "It is famous for Scuba Diving, serene beaches, beautiful temples, historical forts and its delicious cuisine. Sindhudurg is the only official Scuba Diving destination in Maharashtra.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.Lorem Ipsum is",
          ],
          button: "Discover",
          href: "/",

          alignLeft: true,
        },
        carousel: {
          type: 1,
          images: why_sindhuburg,
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
          button: "View Place",
          href: "/",
          alignLeft: false,
        },
        carousel: {
          type: 2,
          images: places,
        },
      },

      {
        desc: {
          heading: "Accommodations",
          maxWidth: "350px",
          paragraphs: [
            "We give you more of what you want and less of what you don’t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarddummy text ever since the 1500s.",
            "Lorem Ipsum has been the industry's standarddummy text ever since the 1500s,.Lorem Ipsum is ",
          ],
          button: "View Hotels",
          href: "/",
          alignLeft: false,
        },
        carousel: {
          type: 1,
          images: accommodations,
        },
      },

      {
        desc: {
          heading: "Connectivity",
          maxWidth: "350px",
          paragraphs: [
            "•DIRECT FLIGHTS : MUMBAI - CHIPI AIRPORT (ALLIANCE AIR) MUMBAI - MOPA AIRPORT (INDIGO, GO FIRST, AKASA AIR)",
            "•TRAINS FROM MUMBAI VISTADOME TRAINS EXPRESS TRAINS (TEJAS EXP, JANSHATABDI EXP, KOKANKANYA EXP)",
            "•DRIVE: APPROX 10-12 HOURS FROM MUMBAI CHIPI AIRPORT TO MALVAN – 30 MINS MOPA AIRPORT TO MALVAN – 1HR 30MINS",
          ],
          button: "View Places",
          href: "/",
          alignLeft: false,
        },
        carousel: {
          type: 1,
          images: connectivity,
        },
      },

      {
        desc: {
          heading: "Packages",
          maxWidth: "350px",
          paragraphs: [
            "We give you more of what you want and less of what you don’t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standarddummy text ever since the 1500s.",
            "Lorem Ipsum has been the industry's standarddummy text ever since the 1500s,.Lorem Ipsum is ",
          ],
          button: "View Hotels",
          href: "/",
          alignLeft: false,
        },
        carousel: {
          type: 1,
          images: packages,
        },
      },
    ],
  };

  const { mainTitle, mainText, widthText, widthTitle, sections } = props;

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
            src="/background.png"
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
        <div className="absolute z-50 bottom-[-200px] max-md:hidden flex justify-center w-full">
          <Page1Form />
        </div>
        <div className="absolute z-40 top-[70%] md:hidden flex justify-center w-full">
          <p
            className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded pointer"
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
