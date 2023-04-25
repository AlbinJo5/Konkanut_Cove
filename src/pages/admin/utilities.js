import Layout from "@/admin_components/layout";
import { DeleteIcon, EyeIcon, IconButton } from "@/admin_components/icons";
import { Table, Row, Col, Tooltip, User } from "@nextui-org/react";

import { useEffect, useState } from "react";
import styles from "@/styles/admin_styles/products.module.scss"
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

const ROUTE = '/api/place';

export default function Places() {
    const [places, setPlaces] = useState([]);
    const [count, setCount] = useState(0);

    const [transports, setTransports] = useState([]);
    const [transportCount, setTransportCount] = useState(0);


    const [activities, setActivities] = useState([]);
    const [activityCount, setActivityCount] = useState(0);

    // Get Product List API
    const getPlaces = async () => {
        fetch(ROUTE).then(res => res.json()).then(res => {
            if (res.status === 200) {
                setPlaces(res.data);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const getTransports = async () => {
        fetch('/api/transport').then(res => res.json()).then(res => {
            if (res.status === 200) {
                setTransports(res.data);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const getActivities = async () => {
        fetch('/api/activity').then(res => res.json()).then(res => {
            if (res.status === 200) {
                setActivities(res.data);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getPlaces();
    }, [count])

    useEffect(() => {
        getTransports();
    }, [transportCount])



    useEffect(() => {
        getActivities();
    }, [activityCount])



    return (
        <Layout>
            <div className={styles.products} >
                <div className={styles.head} >
                    <h3>Places</h3>
                    <PlacesAdd count={() => setCount(count + 1)} />
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
                        {
                            places.length > 0 && places.map(({ id, data }, i) => (
                                <Table.Row key={i + 1}>
                                    <Table.Cell>  <User size="xl" squared src={data.images[0]} css={{ p: 0 }}>
                                    </User></Table.Cell>
                                    <Table.Cell>{data.title}</Table.Cell>

                                    <Table.Cell>  <Row justify="center" align="center">
                                        <Col css={{ d: "flex" }}>
                                            <PlacesView id={id} data={data} count={() => setCount(count + 1)} />
                                        </Col>
                                        <Col css={{ d: "flex" }}>
                                            <PlaceEdit id={id} data={data} count={() => setCount(count + 1)} />
                                        </Col>
                                        <Col css={{ d: "flex" }}>
                                            <PlaceDelete id={id} count={() => setCount(count + 1)} />
                                        </Col>
                                    </Row></Table.Cell>
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


            <div className={styles.products} >
                <div className={styles.head} >
                    <h3>Transportations</h3>
                    <TransportsAdd transportCounty={() => setTransportCount(transportCount + 1)} />
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
                        {
                            transports.length > 0 && transports.map(({ id, data }, i) => (
                                <Table.Row key={i + 1}>
                                    <Table.Cell>  <User size="xl" squared src={data.images[0]} css={{ p: 0 }}>
                                    </User></Table.Cell>
                                    <Table.Cell>{data.title}</Table.Cell>

                                    <Table.Cell>  <Row justify="center" align="center">
                                        <Col css={{ d: "flex" }}>
                                            <TransportsView id={id} data={data} transportCount={() => setTransportCount(transportCount + 1)} />
                                        </Col>
                                        <Col css={{ d: "flex" }}>
                                            <TransportEdit id={id} data={data} transportCount={() => setTransportCount(transportCount + 1)} />
                                        </Col>
                                        <Col css={{ d: "flex" }}>
                                            <TransportDelete id={id} transportCount={() => setTransportCount(transportCount + 1)} />
                                        </Col>
                                    </Row></Table.Cell>
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

            <div className={styles.products} >
                <div className={styles.head} >
                    <h3>Activity</h3>
                    <ActivitiesAdd activityCount={() => setActivityCount(activityCount + 1)} />
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
                        {
                            activities.length > 0 && activities.map(({ id, data }, i) => (
                                <Table.Row key={i + 1}>
                                    <Table.Cell>  <User size="xl" squared src={data.images[0]} css={{ p: 0 }}>
                                    </User></Table.Cell>
                                    <Table.Cell>{data.title}</Table.Cell>

                                    <Table.Cell>  <Row justify="center" align="center">
                                        <Col css={{ d: "flex" }}>
                                            <ActivitiesView id={id} data={data} activityCount={() => setActivityCount(activityCount + 1)} />
                                        </Col>
                                        <Col css={{ d: "flex" }}>
                                            <ActivityEdit id={id} data={data} activityCount={() => setActivityCount(activityCount + 1)} />
                                        </Col>
                                        <Col css={{ d: "flex" }}>
                                            <ActivityDelete id={id} activityCount={() => setActivityCount(activityCount + 1)} />
                                        </Col>
                                    </Row></Table.Cell>
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

        </Layout>
    );
}



