import Layout from '@/admin_components/layout'
import React from 'react'
import { useRouter } from 'next/router';
import { queryClient } from '@/pages/_app';
import { useQuery } from '@tanstack/react-query'
import { getAllData, getDataById } from '@/utils/firebase_data_handler';
import { Button, Col, Row, Table, Text, User } from '@nextui-org/react';
import styles from '@/styles/admin_styles/package_view.module.scss'
import Image from 'next/image';
import DayAdd from '@/admin_components/model/PACKAES_CONTENT/days/dayAdd';
import ActivityAdd from '@/admin_components/model/PACKAES_CONTENT/activities/activityAdd';
import TransportAdd from '@/admin_components/model/PACKAES_CONTENT/transporations/transportAdd';
import AccomadationAdd from '@/admin_components/model/PACKAES_CONTENT/accomadations/accomadationAdd';
function Index() {
    const { id } = useRouter().query
    const pacakage = useQuery(
        ['package', id],
        () => {
            return getDataById(`Packages/${id}`)
        },
        {
            staleTime: 10000 * 60,
            enabled: !!id
        },
    )

    const places = useQuery(['places'], () => {
        return fetch('/api/place')
            .then(res => res.json())
    },
        {
            staleTime: 10000 * 60
        }
    )

    const activitiesData = useQuery(
        ['activities'],
        () => {
            return getAllData("Activities")
        },
        {
            staleTime: 10000 * 60
        }
    )

    const packageActivityData = useQuery(
        [
            'packages',
            id,
            'activities'
        ],
        () => {
            return getAllData(`Packages/${id}/Activities`)
        },
        {
            staleTime: 10000 * 60,
            enabled: !!id
        }
    )

    const transportationsData = useQuery(
        ['transportations'],
        () => {
            return getAllData("Transportations")
        },
        {
            staleTime: 10000 * 60
        }
    )

    const packageTransportationData = useQuery(
        [
            'packages',
            id,
            'transportations'
        ],
        () => {
            return getAllData(`Packages/${id}/Transportations`)
        },
        {
            staleTime: 10000 * 60,
            enabled: !!id
        }
    )

    const hotelsData = useQuery(
        ['hotels'],
        () => {
            return getAllData("Hotels")
        },
        {
            staleTime: 10000 * 60
        }
    )



    const packageHotelData = useQuery(
        [
            'packages',
            id,
            'hotels'
        ],
        () => {
            return getAllData(`Packages/${id}/Accomadations`)
        },
        {
            staleTime: 10000 * 60,
            enabled: !!id
        }
    )



    const daysData = useQuery(
        [
            'packages',
            id,
            'days'
        ],
        () => {
            return getAllData(`Packages/${id}/Days`)
        },
        {
            staleTime: 10000 * 60,
            enabled: !!id
        }
    )




    return (
        <Layout>
            <Text css={{
                margin: 0,
                padding: 0,
                letterSpacing: 0.5,
            }} h1>{pacakage.data?.data?.title}</Text>
            <Text css={{
                margin: 0,
                padding: 0,
                letterSpacing: 0.5,
            }} h3>{
                    places.data?.data?.find(place => place.id === pacakage.data?.data?.place)?.data.title
                }</Text>
            {
                // split the string into array of string by *
                pacakage.data?.data?.description.split('*').map((item, index) => {
                    return (
                        <Text key={index} p>
                            {item}
                        </Text>
                    )
                })
            }
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 10,
                marginTop: 20

            }} >

                {
                    pacakage.data?.data?.images.map((item, index) => {
                        return (
                            <Image key={index} src={item} alt="" style={{
                                borderRadius: 10,
                                width: 100,
                                height: 100,
                            }} width={1000} height={1000} />
                        )
                    })

                }
            </div>


            {/* Days */}
            <div style={{
                marginTop: 50,
            }}>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 20
                }} >
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
                        <Table.Column>
                            Options                        </Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {
                            // hotelsData.data?.map(({ id, data }, i) => (
                            daysData.data?.data.map((data, i) => (
                                <Table.Row key={i + 1}>
                                    <Table.Cell>
                                        {
                                            data.dayNumber
                                        }
                                    </Table.Cell>
                                    <Table.Cell>{data.title}</Table.Cell>

                                    <Table.Cell>  <Row justify="center" align="center">
                                        <Col css={{ d: "flex" }}>

                                        </Col>
                                        <Col css={{ d: "flex" }}>
                                        </Col>
                                        <Col css={{ d: "flex" }}>
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

            {/* Activities */}
            <div style={{
                marginTop: 50,
            }}>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 20
                }} >
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
                        <Table.Column>
                            Options                        </Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {
                            // hotelsData.data?.map(({ id, data }, i) => (
                            activitiesData.data?.data.filter(
                                activity => packageActivityData.data?.data?.find(
                                    packageActivity => packageActivity.activityId === activity.id
                                )
                            ).map((data, i) => (
                                <Table.Row key={i + 1}>
                                    <Table.Cell>
                                        <User size="xl" squared src={data.images[0]} css={{ p: 0 }}>
                                        </User>
                                    </Table.Cell>
                                    <Table.Cell>{data.title}</Table.Cell>

                                    <Table.Cell>  <Row justify="center" align="center">
                                        <Col css={{ d: "flex" }}>

                                        </Col>
                                        <Col css={{ d: "flex" }}>
                                        </Col>
                                        <Col css={{ d: "flex" }}>
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

            {/* Transportations */}
            <div style={{
                marginTop: 50,
            }}>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 20
                }} >
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
                        <Table.Column>
                            Options                        </Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {
                            // hotelsData.data?.map(({ id, data }, i) => (
                            transportationsData.data?.data.filter(
                                transportation => packageTransportationData.data?.data?.find(
                                    packageTransporation => packageTransporation.transportationId === transportation.id
                                )
                            ).map((data, i) => (
                                <Table.Row key={i + 1}>
                                    <Table.Cell>
                                        <User size="xl" squared src={data.images[0]} css={{ p: 0 }}>
                                        </User>
                                    </Table.Cell>
                                    <Table.Cell>{data.title}</Table.Cell>

                                    <Table.Cell>  <Row justify="center" align="center">
                                        <Col css={{ d: "flex" }}>

                                        </Col>
                                        <Col css={{ d: "flex" }}>
                                        </Col>
                                        <Col css={{ d: "flex" }}>
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

            {/* Accomodations */}
            <div style={{
                marginTop: 50,
            }}>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 20
                }} >
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
                        <Table.Column>
                            Options
                        </Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {
                            // hotelsData.data?.map(({ id, data }, i) => (
                            hotelsData.data?.data.filter(
                                hotel => packageHotelData.data?.data?.find(
                                    packageHotel => packageHotel.accomadationId === hotel.id
                                )
                            ).map((data, i) => (
                                <Table.Row key={i + 1}>
                                    <Table.Cell>
                                        <User size="xl" squared src={data.images[0]} css={{ p: 0 }}>
                                        </User>
                                    </Table.Cell>
                                    <Table.Cell>{data.name}</Table.Cell>

                                    <Table.Cell>  <Row justify="center" align="center">
                                        <Col css={{ d: "flex" }}>

                                        </Col>
                                        <Col css={{ d: "flex" }}>
                                        </Col>
                                        <Col css={{ d: "flex" }}>
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
    )
}

export default Index