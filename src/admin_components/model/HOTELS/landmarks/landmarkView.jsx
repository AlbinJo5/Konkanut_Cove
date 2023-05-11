import { Modal, useModal, Button, Text, Tooltip, Spacer, Checkbox, Dropdown } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import { EyeIcon, IconButton } from "@/admin_components/icons";
import Image from "next/image";

export default function LandmarkView(props) {
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
                                <Text size={20} >
                                    {props.data.name}
                                </Text>
                            </Grid>

                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Text size={20}>
                                    Distance: {props.data.distance} km
                                </Text>
                            </Grid>


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
