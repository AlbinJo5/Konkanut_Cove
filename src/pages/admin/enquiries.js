import Layout from '@/admin_components/layout'
import React, { useEffect, useState } from 'react'
import styles from "@/styles/admin_styles/products.module.scss"
import { Table, Row, Col, Tooltip, User, Button, Input, Grid } from "@nextui-org/react";
import { useRouter } from 'next/router';
import { ADMIN_ROUTES } from '@/admin_components/core/routes';
import { useQuery } from '@tanstack/react-query'
import { getAllData } from '@/utils/firebase_data_handler';
import PackageAdd from '@/admin_components/model/packages/PackagesAdd';
import InitialLoading from '@/admin_components/initialLoading';
import PackageDelete from '@/admin_components/model/ENQUIRIES/pacakage/packageDelete';
import PackageView from '@/admin_components/model/ENQUIRIES/pacakage/packageView';
import HotelView from '@/admin_components/model/ENQUIRIES/hotel/hotelView';
import HotelDelete from '@/admin_components/model/ENQUIRIES/hotel/hotelDelete';
function Index() {

    const [packageSearch, setPackageSearch] = useState("")
    const [hotelSearch, setHotelSearch] = useState("")
    const route = useRouter();


    const packageEnquiries = useQuery(
        ['package_enquiries'],
        () => {
            return getAllData("Package_Enquiries")
        },
        {
            staleTime: 10000 * 60
        }
    )

    const hotelsEnquiries = useQuery(
        ['hotel_enquiries'],
        () => {
            return getAllData("Hotel_Enquiries")
        },
        {
            staleTime: 10000 * 60
        }
    )



    return (
        <Layout>
            <div className={styles.products} >
                {
                    packageEnquiries.isLoading && <InitialLoading />
                }
                <div className={styles.head} >
                    <h3>Package Enquiries</h3>

                    {/* search bar */}

                    <Grid>
                        <Input
                            type="search"
                            placeholder="Search"
                            clearable
                            onChange={(e) => {
                                setPackageSearch(e.target.value)
                            }}
                        />
                    </Grid>
                </div>

                <Table
                    bordered
                    shadow={false}
                    color={"suceess"}
                    selectionBehavior="toggle"
                    aria-label="Example static bordered collection table"
                    allowDuplicateSelectionEvents="false"
                >
                    <Table.Header>
                        <Table.Column>Id</Table.Column>
                        <Table.Column>Name</Table.Column>
                        <Table.Column>Phone</Table.Column>
                        <Table.Column>
                            Options
                        </Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {
                            // packageEnquiries.data?.map(({ id, data }, i) => (
                            packageEnquiries.data?.data
                                .filter((data) => {
                                    if (packageSearch == "") {
                                        return data
                                    } else if (
                                        // name or id or phone
                                        data.name.toLowerCase().includes(packageSearch.toLowerCase()) ||
                                        data.id.toLowerCase().includes(packageSearch.toLowerCase()) ||
                                        data.phone.toLowerCase().includes(packageSearch.toLowerCase())
                                    ) {
                                        return data
                                    }
                                })
                                .map((data, i) => (
                                    <Table.Row key={i + 1}>
                                        <Table.Cell>{data.id}</Table.Cell>
                                        <Table.Cell>{data.name}</Table.Cell>
                                        <Table.Cell>{data.phone}</Table.Cell>

                                        <Table.Cell>
                                            {/* row / col */}
                                            <Row justify="center" align="middle">

                                                <Col span={12}>
                                                    <PackageView data={data} />
                                                </Col>
                                                <Col span={12}>
                                                    <PackageDelete data={data} />
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

            <div style={{
                marginBottom: "40px"
            }} className={styles.products} >
                {
                    hotelsEnquiries.isLoading && <InitialLoading />
                }
                <div className={styles.head} >
                    <h3>Hotel Enquiries</h3>
                    {/* search bar */}

                    <Grid>
                        <Input
                            type="search"
                            placeholder="Search"
                            clearable
                            onChange={(e) => {
                                setHotelSearch(e.target.value)
                            }}
                        />
                    </Grid>
                </div>


                <Table
                    bordered
                    shadow={false}
                    color={"suceess"}
                    selectionBehavior="toggle"
                    aria-label="Example static bordered collection table"
                    allowDuplicateSelectionEvents="false"
                >
                    <Table.Header>
                        <Table.Column>Id</Table.Column>
                        <Table.Column>Name</Table.Column>
                        <Table.Column>Phone</Table.Column>
                        <Table.Column>
                            Options
                        </Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {
                            // packageEnquiries.data?.map(({ id, data }, i) => (
                            hotelsEnquiries.data?.data
                                .filter((data) => {
                                    if (hotelSearch == "") {
                                        return data
                                    } else if (
                                        // name or id or phone
                                        data.name.toLowerCase().includes(hotelSearch.toLowerCase()) ||
                                        data.id.toLowerCase().includes(hotelSearch.toLowerCase()) ||
                                        data.phone.toLowerCase().includes(hotelSearch.toLowerCase())
                                    ) {
                                        return data
                                    }
                                })
                                .map((data, i) => (
                                    <Table.Row key={i + 1}>
                                        <Table.Cell>{data.id}</Table.Cell>
                                        <Table.Cell>{data.name}</Table.Cell>
                                        <Table.Cell>{data.phone}</Table.Cell>

                                        <Table.Cell>
                                            {/* row / col */}
                                            <Row justify="center" align="middle">

                                                <Col span={12}>
                                                    <HotelView data={data} />
                                                </Col>
                                                <Col span={12}>
                                                    <HotelDelete data={data} />
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
        </Layout>
    )
}

export default Index