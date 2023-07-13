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

const about_sindhuburg = [
  {
    image:
      "/assets/images/Home/A (1).png",
  },
  {
    image:
      "/assets/images/Home/A (2).png",
  },
  {
    image:
      "/assets/images/Home/A (3).png",
  },
];

const why_sindhuburg = [
  {
    image: "/assets/images/Home/B (1).png",
  },
  {
    image: "/assets/images/Home/B (2).png",
  },
  {
    image: "/assets/images/Home/B (3).png",
  },
];

const accommodations = [
  {
    image: "/assets/images/Home/C (1).png",
  },
  {
    image: "/assets/images/Home/C (2).png",
  },
  {
    image: "/assets/images/Home/C (3).png",
  },
  {
    image: "/assets/images/Home/C (4).png",
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
    image: "/assets/images/Home/D (1).png",
  },
  {
    image: "/assets/images/Home/D (2).png",
  },
  {
    image: "/assets/images/Home/D (3).png",
  },
  {
    image: "/assets/images/Home/D (4).png",
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
    mainText2:
      "A new holiday destination is for you to spend an unforgettable vacation with family and friends. Just 1 to 1:30 hours from Goa, Sindhudurg district in Maharashtra is home to world famous beaches like Devbagh, Tarkarli where tourists come from Goa especially for scuba diving. The 121km costalline has many unexplored beaches, as well as many forts including one One can see the sea fort built in the sea which is still impregnable and stands as a testimony of history.",
    mainText: "",
    widthTitle: "600px",
    widthText: "800px",
    sections: [
      {
        desc: {
          heading: "About Sindhudurg ",
          maxWidth: "350px",
          paragraphs: [
            "Sindhudurg district in Kokan has been blessed by nature. Sindhudurg is a paradise for tourists from all over the world. Sindhudurg district, full of diversity like Nature, Temples, Culture, Tradition, and Food Culture attracts everyone."
          ],
          button: "View Package",
          href: "/packages",
          alignLeft: false,
        },
        carousel: {
          type: 1,
          images: about_sindhuburg,
        },
        imageTitle: "Unexplored Beaches",
      },
      {
        desc: {
          heading: "Why Sindhuburg",
          maxWidth: "350px",
          paragraphs: [
            "Sindhudurg has many forts, some of them are built in water, some of them on land, and some of there on mountains. These forts testify to the bravery, Chivalry, and rich history of the Marathas."
          ],
          button: "Discover",
          href: "/packages",

          alignLeft: false,
        },
        carousel: {
          type: 1,
          images: why_sindhuburg,
        },
        imageTitle: "Historical Forts",
      },

      {
        desc: {
          heading: "Places ",
          maxWidth: "350px",
          paragraphs: [
            "Sindhudurg is blessed with numerous beautiful beaches, such as Tarkarli Beach, Malvan Beach, and Devbagh Beach. These beaches offer picturesque views, golden sands, and clear turquoise waters, making them perfect for water sports like snorkeling, scuba diving, and jet skiing. There are some uncrowded beaches where you can sunbathe in peace, enjoy nature while listening to the gentle sound of seawater."
          ],
          button: "View Place",
          href: "/place",
          alignLeft: false,
        },
        carousel: {
          type: 2,
          images: places,
        },
        imageTitle: "Mangrove Safaris",
      },

      {
        desc: {
          heading: "Accommodations",
          maxWidth: "350px",
          paragraphs: [
            "Sindhudurg is a paradise for adventure enthusiasts. With its abundant marine life, the region offers excellent opportunities for activities like snorkeling and scuba diving. The underwater world of Sindhudurg is known for its vibrant coral reefs, exotic fish species, and shipwrecks, providing a memorable experience for divers of all levels."
          ],
          button: "View Hotels",
          href: "/hotels",
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
            "# DIRECT FLIGHTS",
            " MUMBAI - CHIPI AIRPORT (ALLIANCE AIR)",
            " MUMBAI - MOPA AIRPORT (INDIGO, GO FIRST, AKASA AIR)",
            "# TRAINS FROM MUMBAI",
            " VISTADOME TRAINS ",
            " EXPRESS TRAINS (TEJAS EXP, JANSHATABDI EXP, KOKANKANYA EXP)",
            "# DRIVE:",
            " APPROX 10-12 HOURS FROM MUMBAI",
            " CHIPI AIRPORT TO MALVAN – 30 MINS",
            " MOPA AIRPORT TO MALVAN – 1HR 30MINS",
          ],
          button: "View Places",
          href: "/place",
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
            "Sindhudurg boasts a rich cultural heritage and is known for its traditional art forms like Dashavtar, a folk dance-drama. Visitors can witness cultural performances, visit local markets, and interact with the warm and friendly locals, gaining insights into the region's traditions and way of life."
          ],
          button: "View Packages",
          href: "/packages",
          alignLeft: false,
        },
        carousel: {
          type: 1,
          images: packages,
        },
      },
    ],
  };

  const { mainTitle, mainText, mainText2, widthText, widthTitle, sections } =
    props;

  const [modal, showModal] = useState(false);
  return (
    <Layout>
      <Head>
        <title>Welcome to Konkanut Cove!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <FormModal showModal={modal} setShowModal={showModal} />
      <div className="w-full relative m-0 h-max   ">
        <div className="w-[100vw] h-max p-0 m-0  flex flex-col justify-center    z-10 bg-black bg-opacity-90">
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
                <br />
                <MainText width={widthText}>{mainText2}</MainText>
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
