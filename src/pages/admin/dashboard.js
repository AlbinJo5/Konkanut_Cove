import Layout from "@/admin_components/layout"
import { Card, Grid, Row, Text } from "@nextui-org/react";
// import LineChart from "@/admin_components/chart";
import { useRouter } from "next/router";
import { ADMIN_ROUTES } from "@/admin_components/core/routes";

function Dashboard() {
    const router = useRouter();
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
                    <Grid lg={2} xs={6} sm={3} key={index}>
                        <Card isPressable onClick={() => {
                            router.push(item.link)
                        }} >
                            <Card.Body css={{ p: 10 }}>
                                <Card.Image
                                    src={item.img}
                                    objectFit="contain"
                                    width="80%"
                                    height="max-content"
                                    alt={item.title}
                                />
                            </Card.Body>
                            <Card.Footer css={{ justifyItems: "flex-start" }}>
                                <Row wrap="wrap" justify="space-between" align="center">
                                    <Text b>{item.title}</Text>
                                    <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                                        {item.totalCount}
                                    </Text>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                ))}
            </Grid.Container>
            {/* <LineChart /> */}
        </Layout>
    )
}

export default Dashboard