import Layout from '@/admin_components/layout'
import React from 'react'
import { useRouter } from 'next/router';
import { queryClient } from '@/pages/_app';
import { useQuery } from '@tanstack/react-query'
import { getDataById } from '@/utils/firebase_data_handler';
import { Button, Text } from '@nextui-org/react';
import styles from '@/styles/admin_styles/package_view.module.scss'
import Image from 'next/image';
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

    console.log(pacakage.data);
    console.log(places.data);
    console.log(
    );
    return (
        <Layout>
            {/* <div className={styles.pacakage} >
                <h1>{pacakage.data?.data?.title}</h1>
            </div> */}
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
            
        </Layout>
    )
}

export default Index