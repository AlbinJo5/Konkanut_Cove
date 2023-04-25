import Image from "next/image"
import { Loading } from '@nextui-org/react';
import styles from "@/styles/admin_styles/index.module.scss"
import { useEffect } from "react";
import { LocalStorage } from "@/admin_components/core/localStorage";
import { useRouter } from "next/router";
import { ADMIN_ROUTES } from "@/admin_components/core/routes";

function Index() {
    const router = useRouter()
    // useEffect(() => {
    //     var expiry = localStorage.getItem(LocalStorage.adminAuthExpiry)
    //     // wait for 1 second
    //     setTimeout(() => {
    //         if (expiry) {
    //             if (new Date(expiry) > new Date()) {
    //                 router.push(ADMIN_ROUTES.DASHBOARD)
    //             } else {
    //                 router.push(ADMIN_ROUTES.AUTH)
    //             }
    //         }
    //         else {
    //             router.push(ADMIN_ROUTES.AUTH)
    //         }
    //     }, 1000)
    // }, [router])



    return (
        <div className={styles.container}>
            <Image src="/assets/images/logo.svg" width={10000} height={10000} alt="logo" />

            <div className={styles.lap} >
                <Loading className={styles.loader} loadingCss={{
                    $$loadingSize: "1rem",
                    $$loadingColor: "#095000",
                }} type="points-opacity" />
            </div>

            <div className={styles.tablet} >

                <Loading className={styles.loader} loadingCss={{
                    $$loadingSize: ".8rem",
                    $$loadingColor: "#095000",
                }} type="points-opacity" />
            </div>
            <div className={styles.mobile} >

                <Loading className={styles.loader} loadingCss={{
                    $$loadingSize: ".6rem",
                    $$loadingColor: "#095000",
                }} type="points-opacity" />
            </div>
        </div>
    )
}

export default Index