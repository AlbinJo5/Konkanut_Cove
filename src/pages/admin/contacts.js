import InitialLoading from '@/admin_components/initialLoading'
import Layout from '@/admin_components/layout'
import ContactDelete from '@/admin_components/model/contact/contactDelete'
import ContactView from '@/admin_components/model/contact/contactView'
import styles from "@/styles/admin_styles/products.module.scss"
import { getAllData } from '@/utils/firebase_data_handler'
import { Col, Row, Table } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

function Index() {

    const contacts = useQuery(
        ['contacts'],
        () => {
            return getAllData("Contact")
        },
        {
            staleTime: 10000 * 60
        }
    )
    return (
        <Layout>
            <div className={styles.products} >
                {
                    contacts.isLoading && <InitialLoading />
                }
                <div className={styles.head} >
                    <h3>Contacts</h3>
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
                        <Table.Column>Name</Table.Column>
                        <Table.Column>Email</Table.Column>
                        <Table.Column>Phone</Table.Column>
                        <Table.Column>
                            Options
                        </Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {
                            // contacts.data?.map(({ id, data }, i) => (
                            contacts.data?.data.map((data, i) => (
                                <Table.Row key={i + 1}>
                                    <Table.Cell>{data.name}</Table.Cell>
                                    <Table.Cell>{data.email}</Table.Cell>
                                    <Table.Cell>{data.phone}</Table.Cell>

                                    <Table.Cell>
                                        {/* row / col */}
                                        <Row justify="center" align="middle">

                                            <Col span={12}>
                                                <ContactView data={data} />
                                            </Col>
                                            <Col span={12}>
                                                <ContactDelete data={data} />
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