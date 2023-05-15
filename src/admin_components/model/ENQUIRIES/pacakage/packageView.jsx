import { Modal, useModal, Button, Text, Tooltip, Spacer, Checkbox, Dropdown } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import { EyeIcon, IconButton } from "@/admin_components/icons";
import Image from "next/image";

export default function PackageView(props) {
    const { setVisible, bindings } = useModal();

    return (
        <div>
            <Tooltip
                content="View"
                color="success"
                onClick={() => {
                    setVisible(true)
                }}
            >
                <IconButton>
                    <EyeIcon size={20} fill="#095000" />
                </IconButton>
            </Tooltip>


            <Modal
                width="600px"
                height="80px"

                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" color="success" css={{
                        color: "#0000000",
                    }} size={20}>
                        View
                    </Text>
                </Modal.Header>
                <form>
                    <Modal.Body
                        height="800px"
                        scroll={true}

                    >

                        <Grid.Container gap={2}>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Text b size={15} >
                                    Id:  {props.data.id}
                                </Text>
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Text size={15} >
                                    Name:  {props.data.name}
                                </Text>
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Text size={15} >
                                    Email:  {props.data.email}
                                </Text>
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Text size={15}>
                                    No of people: {props.data.people}
                                </Text>
                            </Grid>

                            {/* choosen Package */}
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Text b size={15}>
                                    Choosen Package : {props.data.packageDetails?.title}
                                </Text>
                            </Grid>


                            {/* choosen activities */}
                            <Grid css={{margin:"0"}} xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Text b size={15}>
                                    Choosen Activities: <br />
                                </Text>

                            </Grid>

                            {
                                props.data.selected.activities?.map((item) => {
                                    return (
                                        <Grid key={item.id} >
                                            <Text >
                                                {item.title}
                                            </Text>
                                        </Grid>
                                    )
                                })
                            }
                            {/* choosen accomodations */}
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Text b size={15}>
                                    Choosen Accomodation :
                                </Text>
                            </Grid>
                            {
                                props.data.selected.accomodations?.map((item) => {
                                    return (
                                        <Grid key={item.id} >
                                            <Text size={15}>
                                                {item.title}
                                            </Text>
                                        </Grid>
                                    )
                                })
                            }
                            {/* choosen transportations */}
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Text b size={15}>
                                    Choosen Transportation :
                                </Text>
                            </Grid>

                            {
                                props.data.selected.transportations?.map((item) => {
                                    return (
                                        <Grid key={item.id} >
                                            <Text size={15}>
                                                {item.title}
                                            </Text>
                                        </Grid>
                                    )
                                })
                            }






                        </Grid.Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto flat color="error" onPress={() => { setVisible(false) }}>
                            Close
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div >
    );
}
