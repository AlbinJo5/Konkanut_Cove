import { Modal, useModal, Button, Text, Tooltip, Spacer, Checkbox } from "@nextui-org/react";
import { DeleteIcon, EditIcon, IconButton } from "../icons";
import { Input, Grid } from "@nextui-org/react";



export default function Addmodel(props) {
    const { setVisible, bindings } = useModal();
    console.log(bindings);
    if (props.visibity) {
        setVisible(false);
    }

    return (
        <div>
            <Tooltip
                content="Add Product"
                color="error"
                onClick={() => setVisible(true)}
            >
                <Button auto shadow>
                    Add Product
                </Button>
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
                        Add Product
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Grid.Container gap={4}>
                        <Grid>
                            <Input
                                bordered
                                labelPlaceholder="Name"
                                color="error" />
                        </Grid>
                        <Grid>
                            <Input
                                bordered
                                labelPlaceholder="Description"
                                color="error" />
                        </Grid>
                        <Grid>
                            <Input
                                bordered
                                labelPlaceholder="Stock"
                                color="error" />
                        </Grid>
                        <Grid>
                            <Checkbox color="error" defaultSelected>
                                isAvailable?
                            </Checkbox>
                        </Grid>
                        <Grid>
                            <input id='fileUpload' type='file' multiple
                                accept='application/pdf, image/png,'
                            />
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
