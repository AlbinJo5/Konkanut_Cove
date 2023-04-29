import Layout from '@/admin_components/layout'
import ActivityDelete from '@/admin_components/model/activity/activityDelete'
import ActivityEdit from '@/admin_components/model/activity/activityEdit'
import ActivitiesView from '@/admin_components/model/activity/activityView'
import RoomAdd from '@/admin_components/model/room/roomAdd'
import { getAllData, getDataById } from '@/utils/firebase_data_handler'
import { Button, Col, Row, Table, Text, User } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

function Index() {

    const { id } = useRouter().query
    const hotels = useQuery(
        ['hotel', id],
        () => {
            return getDataById(`Hotels/${id}`)
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
    const hotelsData = useQuery(
        ['hotels'],
        () => {
            return getAllData("Hotels")
        },
        {
            staleTime: 10000 * 60
        }
    )

    return (
        <Layout>
            {/* <div className={styles.pacakage} >
                <h1>{pacakage.data?.data?.title}</h1>
            </div> */}
            <Text css={{
                margin: 0,
                padding: 0,
                letterSpacing: 0.5,
            }} h1>{hotels.data?.data?.name}</Text>
            <Text css={{
                margin: 0,
                padding: 0,
                letterSpacing: 0.5,
            }} h3>{
                    places.data?.data?.find(place => place.id === hotels.data?.data?.place)?.data.title
                }</Text>
            {
                // split the string into array of string by *
                hotels.data?.data?.description.split('*').map((item, index) => {
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
                    hotels.data?.data?.images.map((item, index) => {
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
            <div style={{
                marginTop: 50,
            }}>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 20
                }} >
                    <Text h3>Rooms</Text>
                    <RoomAdd hotelId={id} />
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
                        <Table.Column>Place</Table.Column>
                        <Table.Column>Title</Table.Column>
                        <Table.Column>
                            sss                        </Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {
                            // hotelsData.data?.map(({ id, data }, i) => (
                            hotelsData.data?.data.map((data, i) => (
                                <Table.Row key={i + 1}>
                                    <Table.Cell>  <User size="xl" squared src={data.images[0]} css={{ p: 0 }}>
                                    </User></Table.Cell>
                                    <Table.Cell>{data.name}</Table.Cell>

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
    )
}

export default Index