import Layout from '@/admin_components/layout'
import React, { useEffect, useState } from 'react'
import styles from "@/styles/admin_styles/products.module.scss"
import { Table, Row, Col, Tooltip, User, Button } from "@nextui-org/react";
import PlacesAdd from "@/admin_components/model/places/placesAdd";
import PlacesView from "@/admin_components/model/places/placesView";
import PlaceEdit from "@/admin_components/model/places/placesEdit";
import PlaceDelete from '@/admin_components/model/places/placesDelete';
import { useRouter } from 'next/router';
import { ADMIN_ROUTES } from '@/admin_components/core/routes';
import { useQuery } from '@tanstack/react-query'
import { getAllData } from '@/utils/firebase_data_handler';
import HotelsAdd from '@/admin_components/model/HOTELS/HotelsAdd';
function Index() {

    const [count, setCount] = useState(0);
    const route = useRouter();

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
            <div className={styles.products} >
                <div className={styles.head} >
                    <h3>Hotels</h3>
                    <HotelsAdd />
                </div>
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
                        overflow: "auto",
                    }}

                >
                    <Table.Header >
                        <Table.Column>Place</Table.Column>
                        <Table.Column>Title</Table.Column>
                        <Table.Column>
                        </Table.Column>
                    </Table.Header>
                    <Table.Body >
                        {
                            // hotelsData.data?.map(({ id, data }, i) => (
                            hotelsData.data?.data.map((data, i) => (
                                <Table.Row key={i + 1} >
                                    <Table.Cell>  <User size="xl" squared src={data.images[0]} css={{ p: 0 }}>
                                    </User></Table.Cell>
                                    <Table.Cell>{data.title}</Table.Cell>

                                    <Table.Cell css={{
                                        display: "flex",
                                        justifyContent: "end",
                                    }}>
                                        <Button onClick={() => {
                                            route.push(ADMIN_ROUTES.HOTELS_VIEW + data.id)
                                        }} >
                                            View
                                        </Button>
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
        </Layout>
    )
}

export default Index