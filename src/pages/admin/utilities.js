import Layout from "@/admin_components/layout";
import { DeleteIcon, EyeIcon, IconButton } from "@/admin_components/icons";
import { Table, Row, Col, Tooltip, User } from "@nextui-org/react";

import { useEffect, useState } from "react";
import styles from "@/styles/admin_styles/products.module.scss";
import PlacesAdd from "@/admin_components/model/places/placesAdd";
import PlacesView from "@/admin_components/model/places/placesView";
import PlaceEdit from "@/admin_components/model/places/placesEdit";
import PlaceDelete from "@/admin_components/model/places/placesDelete";
import TransportsAdd from "@/admin_components/model/transportations/transportAdd";
import TransportsView from "@/admin_components/model/transportations/transportView";
import TransportEdit from "@/admin_components/model/transportations/transportEdit";
import TransportDelete from "@/admin_components/model/transportations/transportDelete";
import ActivitiesAdd from "@/admin_components/model/activity/activityAdd";
import ActivitiesView from "@/admin_components/model/activity/activityView";
import ActivityEdit from "@/admin_components/model/activity/activityEdit";
import ActivityDelete from "@/admin_components/model/activity/activityDelete";
import { getAllData } from "@/utils/firebase_data_handler";
import { useQuery } from "@tanstack/react-query";

const ROUTE = "/api/place";

export default function Places() {
  // Get Product List API

  const places = useQuery(
    ["places"],
    () => {
      return getAllData(`Places`);
    },
    {
      staleTime: 10000 * 60,
    }
  );

  console.log(places.data?.data);

  const transports = useQuery(
    ["transports"],
    () => {
      return getAllData(`Transportations`);
    },
    {
      staleTime: 10000 * 60,
    }
  );

  const activities = useQuery(
    ["activities"],
    () => {
      return getAllData(`Activities`);
    },
    {
      staleTime: 10000 * 60,
    }
  );

  return (
    <Layout>
      <div className={styles.products}>
        <div className={styles.head}>
          <h3>Places</h3>
          <PlacesAdd count={() => setPlaceCount(placeCount + 1)} />
        </div>
        {/* <input type="file" multiple onChange={e => setImagePath(e.target.files)} />
            <button onClick={() => createProduct(imagePath)}>Add</button> */}
        {/* <Addmodel /> */}
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
            <Table.Column>Place</Table.Column>
            <Table.Column>Title</Table.Column>
            <Table.Column>
              {/* <DeleteIcon size={20} fill="#979797" /> */}
            </Table.Column>
          </Table.Header>
          <Table.Body>
            {places?.data?.data?.map((data, i) => (
              <Table.Row key={i + 1}>
                <Table.Cell>
                  {" "}
                  
                    <User
                      size="xl"
                      squared
                      src={
                        data.images ? data.images[0] : "/images/placeholder.png"
                      }
                      css={{ p: 0 }}
                    ></User>
                </Table.Cell>
                <Table.Cell>{data.title}</Table.Cell>

                <Table.Cell>
                  {" "}
                  <Row justify="center" align="center">
                    <Col css={{ d: "flex" }}>
                      <PlacesView
                        id={data.id}
                        data={data}
                        count={() => setCount(count + 1)}
                      />
                    </Col>
                    <Col css={{ d: "flex" }}>
                      <PlaceEdit
                        id={data.id}
                        data={data}
                        count={() => setCount(count + 1)}
                      />
                    </Col>
                    <Col css={{ d: "flex" }}>
                      <PlaceDelete
                        id={data.id}
                        data={data}
                        count={() => setCount(count + 1)}
                      />
                    </Col>
                  </Row>
                </Table.Cell>
              </Table.Row>
            ))}
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

      <div className={styles.products}>
        <div className={styles.head}>
          <h3>Transportations</h3>
          <TransportsAdd
            transportCounty={() => setTransportCount(transportCount + 1)}
          />
        </div>
        {/* <input type="file" multiple onChange={e => setImagePath(e.target.files)} />
            <button onClick={() => createProduct(imagePath)}>Add</button> */}
        {/* <Addmodel /> */}
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
            <Table.Column>Transport</Table.Column>
            <Table.Column>Title</Table.Column>
            <Table.Column>
              {/* <DeleteIcon size={20} fill="#979797" /> */}
            </Table.Column>
          </Table.Header>
          <Table.Body>
            {transports?.data?.data?.map((data, i) => (
              <Table.Row key={i + 1}>
                <Table.Cell>
                  {" "}
                  {data.images[0] && (
                    <User
                      size="xl"
                      squared
                      src={data.images[0]}
                      css={{ p: 0 }}
                    ></User>
                  )}
                </Table.Cell>
                <Table.Cell>{data.title}</Table.Cell>

                <Table.Cell>
                  {" "}
                  <Row justify="center" align="center">
                    <Col css={{ d: "flex" }}>
                      <TransportsView
                        id={data.id}
                        data={data}
                        transportCount={() =>
                          setTransportCount(transportCount + 1)
                        }
                      />
                    </Col>
                    <Col css={{ d: "flex" }}>
                      <TransportEdit
                        id={data.id}
                        data={data}
                        transportCount={() =>
                          setTransportCount(transportCount + 1)
                        }
                      />
                    </Col>
                    <Col css={{ d: "flex" }}>
                      <TransportDelete
                        id={data.id}
                        transportCount={() =>
                          setTransportCount(transportCount + 1)
                        }
                      />
                    </Col>
                  </Row>
                </Table.Cell>
              </Table.Row>
            ))}
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

      <div className={styles.products}>
        <div className={styles.head}>
          <h3>Activity</h3>
          <ActivitiesAdd
            activityCount={() => setActivityCount(activityCount + 1)}
          />
        </div>
        {/* <input type="file" multiple onChange={e => setImagePath(e.target.files)} />
            <button onClick={() => createProduct(imagePath)}>Add</button> */}
        {/* <Addmodel /> */}
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
            <Table.Column>Activity</Table.Column>
            <Table.Column>Title</Table.Column>
            <Table.Column>
              {/* <DeleteIcon size={20} fill="#979797" /> */}
            </Table.Column>
          </Table.Header>
          <Table.Body>
            {activities?.data?.data?.map((data, i) => (
              <Table.Row key={i + 1}>
                <Table.Cell>
                  {" "}
                  {data.images[0] && (
                    <User
                      size="xl"
                      squared
                      src={data.images[0]}
                      css={{ p: 0 }}
                    ></User>
                  )}
                </Table.Cell>
                <Table.Cell>{data.title}</Table.Cell>

                <Table.Cell>
                  {" "}
                  <Row justify="center" align="center">
                    <Col css={{ d: "flex" }}>
                      <ActivitiesView
                        id={data.id}
                        data={data}
                        activityCount={() =>
                          setActivityCount(activityCount + 1)
                        }
                      />
                    </Col>
                    <Col css={{ d: "flex" }}>
                      <ActivityEdit
                        id={data.id}
                        data={data}
                        activityCount={() =>
                          setActivityCount(activityCount + 1)
                        }
                      />
                    </Col>
                    <Col css={{ d: "flex" }}>
                      <ActivityDelete
                        id={data.id}
                        activityCount={() =>
                          setActivityCount(activityCount + 1)
                        }
                      />
                    </Col>
                  </Row>
                </Table.Cell>
              </Table.Row>
            ))}
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
    </Layout>
  );
}
