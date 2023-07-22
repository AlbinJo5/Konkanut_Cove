import InitialLoading from '@/admin_components/initialLoading'
import Layout from '@/admin_components/layout'
import ContactDelete from '@/admin_components/model/contact/contactDelete'
import ContactView from '@/admin_components/model/contact/contactView'
import GalleryAdd from '@/admin_components/model/gallery/galleryAdd'
import GalleryDelete from '@/admin_components/model/gallery/galleryDelete'
import GalleryEdit from '@/admin_components/model/gallery/galleryeEdit'
import styles from "@/styles/admin_styles/products.module.scss"
import { getAllData } from '@/utils/firebase_data_handler'
import { Col, Row, Table } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React from 'react'

function Index() {

    const gallery = useQuery(
        ['gallery'],
        () => {
            return getAllData("Gallery")
        },
        {
            staleTime: 10000 * 60
        }
    )
    return (
        <Layout>
            <div className={styles.products} >
                {
                    gallery.isLoading && <InitialLoading />
                }
                <div className={styles.head} >
                    <div>
                        <h3>Gallery</h3>
                        <p>( Add Upto 30 Images )</p>
                    </div>
                    {
                        // only show add button if total images is less than 30
                        gallery.data?.data?.length < 30 ? (
                            <div>
                                <GalleryAdd />
                            </div>
                        ) : (
                            <div>
                                <p className={styles.error} >You can&apos;t add more than 30 images</p>
                            </div>
                        )
                    }
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
                        <Table.Column>Image</Table.Column>
                        <Table.Column>Caption</Table.Column>
                        <Table.Column>
                            Options
                        </Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {
                            // gallery.data?.map(({ id, data }, i) => (
                            gallery.data?.data?.map((data, i) => (
                                <Table.Row key={i + 1}>
                                    <Table.Cell>
                                        <Image
                                            src={data.image}
                                            alt={data.caption}
                                            width={100}
                                            height={100}
                                            style={{
                                                objectFit: "cover",
                                                borderRadius: "10%",

                                            }}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>{data.caption}</Table.Cell>

                                    <Table.Cell>
                                        {/* row / col */}
                                        <Row justify="center" align="middle">

                                            <Col span={12}>
                                                <GalleryEdit data={data} />
                                            </Col>
                                            <Col span={12}>
                                                <GalleryDelete data={data} />
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

                {
                    gallery.data?.data?.length > 0 && (
                        <div>
                            <h6>Total Images: {gallery.data?.data?.length}</h6>
                        </div>
                    )
                }
            </div>
        </Layout>
    )
}

export default Index