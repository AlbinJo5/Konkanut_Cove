import { Modal, useModal, Button, Text, Tooltip } from "@nextui-org/react";
import { DeleteIcon, EditIcon, IconButton } from "../icons";
import { Input, Grid } from "@nextui-org/react";



export default function EditModal(props) {
    const { setVisible, bindings } = useModal();
    console.log(bindings);
    if (props.visibity) {
        setVisible(false);
    }

    return (
        <div>
            <Tooltip
                content="Delete user"
                color="error"
                onClick={() => setVisible(true)}
            >
                <IconButton>
                    <EditIcon size={20} fill="#FF0080" />
                </IconButton>
            </Tooltip>

            <Modal
                scroll
                width="600px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Modal with a lot of content
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Grid.Container gap={4}>
                        <Grid>
                            <Input
                                bordered
                                labelPlaceholder="Default"
                                color="default" />
                        </Grid>
                        <Grid>
                            <Input
                                bordered
                                labelPlaceholder="Primary"
                                color="primary" />
                        </Grid>
                        <Grid>
                            <Input
                                bordered
                                labelPlaceholder="Secondary"
                                color="secondary" />
                        </Grid>
                        <Grid>
                            <Input
                                bordered
                                labelPlaceholder="Success"
                                color="success" />
                        </Grid>
                        <Grid>
                            <Input
                                bordered
                                labelPlaceholder="Warning"
                                color="warning" />
                        </Grid>
                        <Grid>
                            <Input
                                bordered
                                labelPlaceholder="Error"
                                color="error" />
                        </Grid>
                    </Grid.Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={() => setVisible(false)}>
                        Close
                    </Button>
                    <Button auto onPress={() => setVisible(false)}>
                        Agree
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
