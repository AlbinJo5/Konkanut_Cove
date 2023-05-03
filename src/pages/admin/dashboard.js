import Layout from "@/admin_components/layout"
import {Grid} from "@nextui-org/react";
import { useRouter } from "next/router";
import { ADMIN_ROUTES } from "@/admin_components/core/routes";
import DashboardCard from "@/admin_components/dashboardCard";





function Dashboard() {
    const list = [
        {
            title: "Products",
            img: "https://icon-library.com/images/products-icon-png/products-icon-png-14.jpg",
            totalCount: "22",
            link: ADMIN_ROUTES.PRODUCTS
        },
        {
            title: "Packages",
            img: "https://www.pinclipart.com/picdir/big/524-5249772_package-delivery-clip-art-png-download.png",
            totalCount: "50",
            link: ADMIN_ROUTES.PACKAGES
        },
        {
            title: "Enquiries",
            img: "https://th.bing.com/th/id/OIP.zXs0VLPf14fP4QyQobauIgHaHa?pid=ImgDet&rs=1",
            totalCount: "43",
            link: ADMIN_ROUTES.ENQUIRIES
        },
        {
            title: "Contacts",
            img: "https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454734_1280.png",
            totalCount: "15",
            link: ADMIN_ROUTES.CONTACTS
        },

    ];
    return (
        <Layout>
            <Grid.Container gap={2} justify="flex-start">
                {list.map((item, index) => (
                    <DashboardCard key={index}  item={item}></DashboardCard>
                ))}
            </Grid.Container>
            {/* <LineChart /> */}
        </Layout>
    )
}

export default Dashboard