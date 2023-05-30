import ButtonPanel from "@/components/button-panel";
import Layout from "@/components/layout";
import Page3Panel from "@/components/page3-panel";
import Page3Panel2 from "@/components/page3-panel2";
import Page3Panel3 from "@/components/page3-panel3";
import Page3PicPanel from "@/components/page3-pic-panel";
import { Airplane, Car, Hotel } from "@icon-park/react";
import React, { useEffect, useState } from "react";
import { routes } from "@/routes";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import {
  getAllData,
  getSubcollectionById,
} from "@/utils/firebase_data_handler";
import EnquireModal from "@/components/modal/enquireModal";
import InitialLoading from "@/admin_components/initialLoading";
import { Switch } from "@nextui-org/react";

const panel1Copy = {
  duration: "3days,2nights",
  images: {
    image1:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",

    image2:
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",

    image3:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",

    image4:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",

    image5:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    image6: "/assets/images/fort.png",
  },
  imagesRemaining: 7,
  desc: "All-Inclusive 3 Days Holiday - Flights, Sightseeing & Transfers ",
  startingPrice: 20000,
  startingDate: Date(2, 3, 21),
  endingDate: Date(2, 5, 22),
};
const includedList = [
  {
    title: "Airport",
    Icon: Airplane,
  },
  {
    title: "Accomodation",
    Icon: Hotel,
  },
  {
    title: "Travel",
    Icon: Car,
  },
];

const Accomodation = ({ accomodation, selected, handleSelect }) => {
  return (
    <ul className="flex flex-col">
      {accomodation?.map((a, i) => {
        const findObj = selected?.accomodations.find((s) => s.id === a?.id);
        const isSelected = findObj ? true : false;
        return (
          <li className="my-2" key={i}>
            <Page3Panel2
              {...a}
              handleSelect={handleSelect}
              selected={isSelected}
            />
          </li>
        );
      })}
    </ul>
  );
};

const Activities = ({
  activities,
  imageWidth,
  imageHeight,
  selected,
  handleSelect,
}) => {
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-1 max-sm:grid-cols-2 max-xs:grid-cols-1 gap-2">
      {activities?.map((a, i) => {
        const findObj = selected?.activities.find((s) => s.id === a?.id);
        const isSelected = findObj ? true : false;
        return (
          <li className="my-2" key={i}>
            <Page3Panel2
              {...a}
              handleSelect={handleSelect}
              selected={isSelected}
              imageWidth={imageWidth}
              imageHeight={imageHeight}
            />
          </li>
        );
      })}
    </ul>
  );
};

const Travel = ({
  transport,
  selected,
  handleSelect,
  ownVehicle,
  handleOwnVehicleSelect,
  prevSelectedVehicle,
}) => {
  return (
    <>
      <div
        className="d-flex align-center ml-6"
        style={{
          display: "flex",
        }}
      >
        <Switch
          checked={ownVehicle}
          onChange={() => {
            handleOwnVehicleSelect(!ownVehicle, selected.transportations);
          }}
        />
        <p className="mt-1 ml-2">Own Vehicle?</p>
      </div>
      <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-2">
        {transport?.map((t, i) => {
          //   const findObj = selected?.transportations.find((s) => s.id === t?.id);
          // check if selected array is empty , if not .find
          var isSelected = false;
          // check if ownVehicle is false and prevSelected is available
          if (!ownVehicle && prevSelectedVehicle?.length > 0) {
            isSelected = prevSelectedVehicle?.find((s) => s.id === t?.id)
              ? true
              : false;
          } else {
            isSelected = selected?.transportations?.find((s) => s.id === t?.id)
              ? true
              : false;
          }
          console.log(isSelected);

          return (
            <li className="my-2" key={i}>
              <Page3Panel3
                {...t}
                selected={isSelected}
                handleSelect={handleSelect}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default function Index() {
  const [options, setOptions] = useState(0);
  const { id } = useRouter().query;

  const [selected, setSelected] = useState({
    activities: [],
    accomodations: [],
    transportations: [],
  });
  const [ownVehicle, setOwnVehicle] = useState(false);
  const [prevSelectedVehicle, setPrevSelectedVehicle] = useState([]);
  const handleActivitySelect = (id, title) => {
    setSelected((prev) => ({
      ...prev,
      // activities: prev.activities.includes(id) ? prev.activities.filter(a => a !== id) : [...prev.activities.slice(1), id],
      // { id:"",title:"" }
      // activities: [
      //     ...prev.activities,
      //     { id, title }
      // ]
      // only allow 2 activities and remove the first one
      activities:
        prev.activities.length === 2
          ? [...prev.activities.slice(1), { id, title }]
          : [...prev.activities, { id, title }],
    }));
  };

  const handleAccomodationSelect = (id, title) => {
    setSelected((prev) => ({
      ...prev,
      accomodations: [
        {
          id,
          title,
        },
      ],
    }));
  };

  const handleTransportationSelect = (id, title) => {
    setSelected((prev) => ({
      ...prev,
      transportations: [
        {
          id,
          title,
        },
      ],
    }));
    setOwnVehicle(false);
  };

  const handleOwnVehicleSelect = (isSelected, prevSelectedVehicle) => {
    // if true
    if (isSelected) {
      setPrevSelectedVehicle(selected.transportations);
      setSelected((prev) => ({
        ...prev,
        transportations: [],
      }));
      setOwnVehicle(true);
      setPrevSelectedVehicle([]);
    } else {
      setSelected((prev) => ({
        ...prev,
        transportations: prevSelectedVehicle,
      }));
      setOwnVehicle(false);
    }
  };

  const packageData = useQuery(
    ["package", id],
    () =>
      getSubcollectionById("Packages", id, [
        "Activities",
        "Accomadations",
        "Transportations",
        "Days",
      ]),
    {
      staleTime: 1000 * 60,
      enabled: !!id,
    }
  );

  const activitiesData = useQuery(
    ["activities"],
    () => getAllData("Activities"),
    {
      staleTime: 1000 * 60 * 10,
    }
  );

  const accomodationsData = useQuery(["hotels"], () => getAllData("Hotels"), {
    staleTime: 1000 * 60 * 10,
  });

  const transportationsData = useQuery(
    ["transportations"],
    () => getAllData("Transportations"),
    {
      staleTime: 1000 * 60 * 10,
    }
  );

  const panel1 = {
    ...panel1Copy,
    duration: `${packageData.data?.data?.days}Days,${packageData.data?.data?.nights}Nights`,
    images: {
      image1: packageData.data?.data?.images[0],
      image2: packageData.data?.data?.images[1],
      image3: packageData.data?.data?.images[2],
      image4: packageData.data?.data?.images[3],
      image5: packageData.data?.data?.images[4],
      image6: packageData.data?.data?.images[5],
    },
    imagesRemaining: packageData.data?.data?.images.length - 6,
    desc: packageData.data?.data?.description,
    startingPrice: packageData.data?.data?.price,
    // skip dates
  };

  const travelSteps = packageData.data?.data?.Days.map((d, i) => {
    return {
      title: `Day ${i + 1} : ${d.title}`,
      title2: d.subTitle,
      // splait descrption into array by * and remove first element
      desc: d.description.split("*").slice(1),
      flight: d.flight,
      hotel: d.hotel,
      transfer: d.transfer,
    };
  });

  const activities = activitiesData.data?.data
    ?.filter((a) =>
      packageData.data?.data?.Activities.map((a) => a.activityId).includes(a.id)
    )
    .map((a) => {
      return {
        title: a.title,
        image: a.images[0],
        id: a.id,
      };
    });

  const transport = transportationsData.data?.data
    ?.filter((t) =>
      packageData.data?.data?.Transportations.map(
        (t) => t.transportationId
      ).includes(t.id)
    )
    .map((t) => {
      return {
        carType: t.title,
        image: t.images[0],
        imageWidth: 250,
        imageHeight: 172,
        id: t.id,
      };
    });

  const accomodation = accomodationsData.data?.data
    ?.filter((a) =>
      packageData.data?.data?.Accomadations.map(
        (a) => a.accomadationId
      ).includes(a.id)
    )
    .map((a) => {
      return {
        id: a.id,
        title: a.title,
        image: a.images[0],
        imageWidth: 250,
        imageHeight: 172,
      };
    });

  useEffect(() => {
    if (packageData.data?.data) {
      setSelected((prev) => ({
        ...prev,
        // only slelect first 2activity and 1accomodation and 1transportation
        activities: packageData.data?.data?.Activities.map((a) => {
          return {
            id: a.activityId,
            title: activitiesData.data?.data?.find((d) => d.id === a.activityId)
              ?.title,
          };
        }).slice(0, 2),
        accomodations: [
          {
            id: packageData.data?.data?.Accomadations[0]?.accomadationId,
            title: accomodationsData.data?.data?.find(
              (d) =>
                d.id ===
                packageData.data?.data?.Accomadations[0]?.accomadationId
            )?.name,
          },
        ],
        transportations: [
          {
            id: packageData.data?.data?.Transportations[0]?.transportationId,
            title: transportationsData.data?.data?.find(
              (d) =>
                d.id ===
                packageData.data?.data?.Transportations[0]?.transportationId
            )?.title,
          },
        ],
      }));
    }
  }, [
    packageData.data?.data,
    activitiesData.data?.data,
    accomodationsData.data?.data,
    transportationsData.data?.data,
  ]);

  return (
    <Layout>
      {packageData.isLoading ||
      activitiesData.isLoading ||
      accomodationsData.isLoading ||
      transportationsData.isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <InitialLoading />
        </div>
      ) : packageData.isError ||
        activitiesData.isError ||
        accomodationsData.isError ||
        transportationsData.isError ? (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl text-red-500">Error</h1>
        </div>
      ) : (
        <>
          <div className="mt-20">
            <Page3PicPanel {...panel1} />
          </div>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 relative   bg-repeat  pb-32 "
            style={{ backgroundImage: "url('/assets/images/back3.png')" }}
          >
            <ol className="flex flex-col overflow-scroll mt-5">
              {travelSteps?.map((tstep, i) => (
                <li className="mt-5" key={i}>
                  <Page3Panel {...tstep} includedList={includedList} />
                </li>
              ))}
            </ol>
            <div className="flex flex-col w-full items-center">
              <div className="sm:w-[85%] w-[98%] mt-5">
                <ButtonPanel
                  optionList={["Accommodation", "Activities", "Transport"]}
                  options={options}
                  setOptions={setOptions}
                />
              </div>
              <div className="w-[100%] mt-2">
                {(() => {
                  switch (options) {
                    case 0:
                      return (
                        <Accomodation
                          selected={selected}
                          handleSelect={handleAccomodationSelect}
                          accomodation={accomodation}
                        />
                      );
                    case 1:
                      return (
                        <Activities
                          activities={activities}
                          selected={selected}
                          handleSelect={handleActivitySelect}
                          image
                          imageWidth="120"
                          imageHeight="90"
                        />
                      );
                    case 2:
                      return (
                        <Travel
                          selected={selected}
                          handleSelect={handleTransportationSelect}
                          transport={transport}
                          handleOwnVehicleSelect={handleOwnVehicleSelect}
                          prevSelectedVehicle={prevSelectedVehicle}
                        />
                      );
                    default:
                      null;
                  }
                })()}
              </div>
              <div className="mt-10 w-[90%] flex justify-end">
                {/* <button className=" flex-end   mb-5 p-5 rounded-lg py-3 bg-green-600 hover:bg-green-700 text-white font-bold disabled:bg-slate-500" >
                            Enquire Now , Pay Later
                        </button> */}
                <EnquireModal
                  selected={selected}
                  packageDetails={{
                    id: packageData.data?.data?.id,
                    title: packageData.data?.data?.title,
                  }}
                  ownVehicle={ownVehicle}
                />
              </div>
            </div>
            <div className="absolute bottom-6 right-6"></div>
          </div>
        </>
      )}
    </Layout>
  );
}
