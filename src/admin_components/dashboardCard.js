import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function DashboardCard(props) {
    const router = useRouter();

    return (<Grid lg={2} xs={6} sm={3}>
        <Card isPressable onClick={() => {
            router.push(props.item.link);
        }}>
            <Card.Body css={{
                p: 10
            }}>
                <Card.Image src={props.item.img} objectFit="contain" width="80%" height="max-content" alt={props.item.title} />
            </Card.Body>
            <Card.Footer css={{
                justifyItems: "flex-start"
            }}>
                <Row wrap="wrap" justify="space-between" align="center">
                    <Text b>{props.item.title}</Text>
                    <Text css={{
                        color: "$accents7",
                        fontWeight: "$semibold",
                        fontSize: "$sm"
                    }}>
                        {props.item.totalCount}
                    </Text>
                </Row>
            </Card.Footer>
        </Card>
    </Grid>);
}