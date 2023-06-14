import Layout from "@/admin_components/layout";
import React from "react";
import { useRouter } from "next/router";
import { queryClient } from "@/pages/_app";
import { useQuery } from "@tanstack/react-query";
import { getAllData, getDataById } from "@/utils/firebase_data_handler";
import {
  Button,
  Col,
  Row,
  Spacer,
  Table,
  Text,
  Tooltip,
  User,
} from "@nextui-org/react";
import styles from "@/styles/admin_styles/package_view.module.scss";
import Image from "next/image";
import DayAdd from "@/admin_components/model/PACKAES_CONTENT/days/dayAdd";
import ActivityAdd from "@/admin_components/model/PACKAES_CONTENT/activities/activityAdd";
import TransportAdd from "@/admin_components/model/PACKAES_CONTENT/transporations/transportAdd";
import AccomadationAdd from "@/admin_components/model/PACKAES_CONTENT/accomadations/accomadationAdd";
import InitialLoading from "@/admin_components/initialLoading";
import DayView from "@/admin_components/model/PACKAES_CONTENT/days/dayView";
import DayEdit from "@/admin_components/model/PACKAES_CONTENT/days/dayEdit";
import DayDelete from "@/admin_components/model/PACKAES_CONTENT/days/dayDelete";
import ActivityDelete from "@/admin_components/model/PACKAES_CONTENT/activities/activityDelete";
import TransportDelete from "@/admin_components/model/PACKAES_CONTENT/transporations/transportDelete";
import AccomadationDelete from "@/admin_components/model/PACKAES_CONTENT/accomadations/accomadationDelete";
import PackageEdit from "@/admin_components/model/packages/PackageEdit";
import PackageDelete from "@/admin_components/model/packages/PackageDelete";
import Link from "next/link";
import { routes } from "@/routes";
function Index() {
  const { id } = useRouter().query;
  const [activityContent, setActivityContent] = React.useState(undefined);
  const [activityContentChange, setActivityContentChange] =
    React.useState(false);
  const [transportContent, setTransportContent] = React.useState(undefined);
  const [transportContentChange, setTransportContentChange] =
    React.useState(false);
  const [accomadationContent, setAccomadationContent] =
    React.useState(undefined);
  const [accomadationContentChange, setAccomadationContentChange] =
    React.useState(false);
  const pacakage = useQuery(
    ["packageView", id],
    () => {
      return getDataById(`Packages/${id}`);
    },
    {
      staleTime: 10000 * 60,
      enabled: !!id,
    }
  );

  const places = useQuery(
    ["places"],
    () => {
      return fetch("/api/place").then((res) => res.json());
    },
    {
      staleTime: 10000 * 60,
    }
  );

  const activitiesData = useQuery(
    ["activities"],
    () => {
      return getAllData("Activities");
    },
    {
      staleTime: 10000 * 60,
    }
  );

  const packageActivityData = useQuery(
    ["packages", id, "activities"],
    () => {
      return getAllData(`Packages/${id}/Activities`);
    },
    {
      staleTime: 10000 * 60,
      enabled: !!id,
    }
  );

  const transportationsData = useQuery(
    ["transportations"],
    () => {
      return getAllData("Transportations");
    },
    {
      staleTime: 10000 * 60,
    }
  );

  const packageTransportationData = useQuery(
    ["packages", id, "transportations"],
    () => {
      return getAllData(`Packages/${id}/Transportations`);
    },
    {
      staleTime: 10000 * 60,
      enabled: !!id,
    }
  );

  const hotelsData = useQuery(
    ["hotels"],
    () => {
      return getAllData("Hotels");
    },
    {
      staleTime: 10000 * 60,
    }
  );

  const packageHotelData = useQuery(
    ["packages", id, "hotels"],
    () => {
      return getAllData(`Packages/${id}/Accomadations`);
    },
    {
      staleTime: 10000 * 60,
      enabled: !!id,
    }
  );

  const daysData = useQuery(
    ["packages", id, "days"],
    () => {
      return getAllData(`Packages/${id}/Days`);
    },
    {
      staleTime: 10000 * 60,
      enabled: !!id,
    }
  );

  // Activity Content
  React.useEffect(() => {
    if (activitiesData.data?.data && packageActivityData.data?.data) {
      setActivityContent(
        activitiesData.data?.data.filter((activity) =>
          packageActivityData.data?.data?.find(
            (packageActivity) => packageActivity.activityId === activity.id
          )
        )
      );
    }
  }, [
    activitiesData.data?.data,
    packageActivityData.data?.data,
    activityContentChange,
  ]);

  // Transport Content
  React.useEffect(() => {
    if (
      transportationsData.data?.data &&
      packageTransportationData.data?.data
    ) {
      setTransportContent(
        transportationsData.data?.data.filter((transport) =>
          packageTransportationData.data?.data?.find(
            (packageTransportation) =>
              packageTransportation.transportationId === transport.id
          )
        )
      );
    }
  }, [
    transportationsData.data?.data,
    packageTransportationData.data?.data,
    transportContentChange,
  ]);

  // Accomadation Content
  React.useEffect(() => {
    if (hotelsData.data?.data && packageHotelData.data?.data) {
      setAccomadationContent(
        hotelsData.data?.data.filter((hotel) =>
          packageHotelData.data?.data?.find(
            (packageHotel) => packageHotel.hotelId === hotel.id
          )
        )
      );
    }
  }, [
    hotelsData.data?.data,
    packageHotelData.data?.data,
    accomadationContentChange,
  ]);

  return (
    <Layout>
      {pacakage.isLoading ||
      places.isLoading ||
      activitiesData.isLoading ||
      packageActivityData.isLoading ||
      transportationsData.isLoading ||
      packageTransportationData.isLoading ||
      hotelsData.isLoading ||
      packageHotelData.isLoading ||
      daysData.isLoading ? (
        <InitialLoading />
      ) : pacakage.isError ||
        places.isError ||
        activitiesData.isError ||
        packageActivityData.isError ||
        transportationsData.isError ||
        packageTransportationData.isError ||
        hotelsData.isError ||
        packageHotelData.isError ||
        daysData.isError ? (
        <div>Error...</div>
      ) : null}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text
          css={{
            margin: 0,
            padding: 0,
            letterSpacing: 0.5,
          }}
          h1
        >
          {pacakage.data?.data?.title}
        </Text>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <PackageEdit
            data={{
              ...pacakage.data?.data,
            }}
          />

          {/* only display delete if there are no landmarks nor rooms or else display a diabled button with a tool tip */}
          {/* <HotelsDelete data={{
                        ...hotels.data?.data
                    }} /> */}
          {packageActivityData.data?.data?.length === 0 &&
          packageTransportationData.data?.data?.length === 0 &&
          packageHotelData.data?.data?.length === 0 ? (
            <PackageDelete
              data={{
                ...pacakage.data?.data,
              }}
            />
          ) : (
            <Tooltip
              content="Delete all landmarks and rooms first"
              color="error"
            >
              <Button
                disabled
                auto
                tooltip="Delete all landmarks and rooms first"
              >
                Delete
              </Button>
            </Tooltip>
          )}
        </div>
      </div>
      <Text
        css={{
          margin: 0,
          padding: 0,
          letterSpacing: 0.5,
        }}
        h3
      >
        {
          places.data?.data?.find(
            (place) => place.id === pacakage.data?.data?.place
          )?.data.title
        }
      </Text>
      {
        // split the string into array of string by *
        pacakage.data?.data?.description.split("*").map((item, index) => {
          return (
            <Text key={index} p>
              {item}
            </Text>
          );
        })
      }
      <Link href={routes.package_details + id}>View Package </Link>

      <Spacer y={1} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Text h4>Price: {pacakage.data?.data?.price}</Text>
        <Text h5>Offer: {pacakage.data?.data?.offer}%</Text>
      </div>
      <Row>
        <Text h5>Days: {pacakage.data?.data?.days}</Text>
        <Spacer x={0.5} />

        <Text h5>Nights: {pacakage.data?.data?.nights}</Text>
      </Row>
      {/* Images */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
          marginTop: 20,
        }}
      >
        {pacakage.data?.data?.images.map((item, index) => {
          return (
            <Image
              key={index}
              src={item}
              alt=""
              style={{
                borderRadius: 10,
                width: 100,
                height: 100,
              }}
              width={1000}
              height={1000}
            />
          );
        })}
      </div>
      <div
        style={{
          marginTop: 20,
          // scrllable div
          maxHeight: 100,
          overflowY: "scroll",

          border: "1px solid #ccc",
          borderRadius: 5,
          padding: 10,
          marginBottom: 20,
        }}
      >
        <Text h4>Terms and Conditions</Text>
        {
          //  terms and conditions in a scrollable div
          pacakage.data?.data?.terms?.split("*").map((item, index) => {
            return (
              <Text key={index} p>
                {item}
              </Text>
            );
          })
        }
      </div>

      {/* Days */}
      <div
        style={{
          marginTop: 50,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text h3>Days</Text>
          <DayAdd packageId={id} />
        </div>

        <Table
          bordered
          shadow={false}
          color={"suceess"}
          selectionBehavior="toggle"
          aria-label="Example static bordered collection table"
          allowDuplicateSelectionEvents="false"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column>Number</Table.Column>
            <Table.Column>Title</Table.Column>
            <Table.Column>Options </Table.Column>
          </Table.Header>
          <Table.Body>
            {
              // hotelsData.data?.map(({ id, data }, i) => (
              daysData.data?.data.map((data, i) => (
                <Table.Row key={i + 1}>
                  <Table.Cell>{data.dayNumber}</Table.Cell>
                  <Table.Cell>{data.title}</Table.Cell>

                  <Table.Cell>
                    {" "}
                    <Row justify="center" align="center">
                      <Col css={{ d: "flex" }}>
                        <DayView data={{ ...data }} />
                      </Col>
                      <Col css={{ d: "flex" }}>
                        <DayEdit packageId={id} data={{ ...data }} />
                      </Col>
                      <Col css={{ d: "flex" }}>
                        <DayDelete packageId={id} data={{ ...data }} />
                      </Col>
                    </Row>
                  </Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
          <Table.Pagination
            shadow
            noMargin
            align="center"
            rowsPerPage={5}
            color={"success"}
            onPageChange={(page) => console.log({ page })}
          />
        </Table>
      </div>

      {/* Activities */}
      <div
        style={{
          marginTop: 50,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text h3>Activities</Text>
          <ActivityAdd packageId={id} />
        </div>

        <Table
          bordered
          shadow={false}
          color={"suceess"}
          selectionBehavior="toggle"
          aria-label="Example static bordered collection table"
          allowDuplicateSelectionEvents="false"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column>Image</Table.Column>
            <Table.Column>Title</Table.Column>
            <Table.Column>Options </Table.Column>
          </Table.Header>
          <Table.Body>
            {
              // hotelsData.data?.map(({ id, data }, i) => (
              activityContent?.map((data, i) => (
                <Table.Row key={i + 1}>
                  <Table.Cell>
                    <User
                      size="xl"
                      squared
                      src={data.images[0]}
                      css={{ p: 0 }}
                    ></User>
                  </Table.Cell>
                  <Table.Cell>{data.title}</Table.Cell>

                  <Table.Cell>
                    {" "}
                    <Row justify="center" align="center">
                      <Col css={{ d: "flex" }}>
                        <ActivityDelete
                          packageId={id}
                          packageActivityId={{
                            id: packageActivityData.data?.data?.find(
                              (packageActivity) =>
                                packageActivity.activityId === data.id
                            )?.id,
                          }}
                          activityContentChange={() => {
                            setActivityContentChange(!activityContentChange);
                          }}
                          name={data.title}
                        />
                      </Col>
                    </Row>
                  </Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
          <Table.Pagination
            shadow
            noMargin
            align="center"
            rowsPerPage={5}
            color={"success"}
            onPageChange={(page) => console.log({ page })}
          />
        </Table>
      </div>

      {/* Transportations */}
      <div
        style={{
          marginTop: 50,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text h3>Transportations</Text>
          <TransportAdd transportationId={id} />
        </div>

        <Table
          bordered
          shadow={false}
          color={"suceess"}
          selectionBehavior="toggle"
          aria-label="Example static bordered collection table"
          allowDuplicateSelectionEvents="false"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column>Image</Table.Column>
            <Table.Column>Title</Table.Column>
            <Table.Column>Options </Table.Column>
          </Table.Header>
          <Table.Body>
            {
              // hotelsData.data?.map(({ id, data }, i) => (
              transportContent?.map((data, i) => (
                <Table.Row key={i + 1}>
                  <Table.Cell>
                    <User
                      size="xl"
                      squared
                      src={data.images[0]}
                      css={{ p: 0 }}
                    ></User>
                  </Table.Cell>
                  <Table.Cell>{data.title}</Table.Cell>

                  <Table.Cell>
                    {" "}
                    <Row justify="center" align="center">
                      <Col css={{ d: "flex" }}>
                        <TransportDelete
                          packageId={id}
                          packageTransportId={{
                            id: packageTransportationData.data?.data?.find(
                              (transportContent) =>
                                transportContent.transportationId === data.id
                            )?.id,
                          }}
                          transportationContentChange={() => {
                            setTransportContentChange(!transportContentChange);
                          }}
                          name={data.title}
                        />
                      </Col>
                    </Row>
                  </Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
          <Table.Pagination
            shadow
            noMargin
            align="center"
            rowsPerPage={5}
            color={"success"}
            onPageChange={(page) => console.log({ page })}
          />
        </Table>
      </div>

      {/* Accomodations */}
      <div
        style={{
          marginTop: 50,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text h3>Accomodations</Text>
          <AccomadationAdd accomadationId={id} />
        </div>

        <Table
          bordered
          shadow={false}
          color={"suceess"}
          selectionBehavior="toggle"
          aria-label="Example static bordered collection table"
          allowDuplicateSelectionEvents="false"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column>Image</Table.Column>
            <Table.Column>Title</Table.Column>
            <Table.Column>Options</Table.Column>
          </Table.Header>
          <Table.Body>
            {
              // hotelsData.data?.map(({ id, data }, i) => (
              hotelsData.data?.data
                .filter((hotel) =>
                  packageHotelData.data?.data?.find(
                    (packageHotel) => packageHotel.accomadationId === hotel.id
                  )
                )
                .map((data, i) => (
                  <Table.Row key={i + 1}>
                    <Table.Cell>
                      <User
                        size="xl"
                        squared
                        src={data.images[0]}
                        css={{ p: 0 }}
                      ></User>
                    </Table.Cell>
                    <Table.Cell>{data.title}</Table.Cell>

                    <Table.Cell>
                      {" "}
                      <Row justify="center" align="center">
                        <Col css={{ d: "flex" }}>
                          <AccomadationDelete
                            packageId={id}
                            packageAccomadationId={{
                              id: packageHotelData.data?.data?.find(
                                (packageHotel) =>
                                  packageHotel.accomadationId === data.id
                              )?.id,
                            }}
                            accomadationContentChange={() => {
                              setAccomadationContentChange(
                                !accomadationContentChange
                              );
                            }}
                            name={data.title}
                          />
                        </Col>
                      </Row>
                    </Table.Cell>
                  </Table.Row>
                ))
            }
          </Table.Body>
          <Table.Pagination
            shadow
            noMargin
            align="center"
            rowsPerPage={5}
            color={"success"}
            onPageChange={(page) => console.log({ page })}
          />
        </Table>
      </div>
      <Spacer size="xl" />
    </Layout>
  );
}

export default Index;
