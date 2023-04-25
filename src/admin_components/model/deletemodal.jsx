import { Modal, useModal, Button, Text, Tooltip } from "@nextui-org/react";
import { DeleteIcon, IconButton } from "../icons";



export default function DeleteModal(props) {
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
                onClick={() => {
                    setVisible(true)
                }}
            >
                <IconButton>
                    <DeleteIcon size={20} fill="#FF0080" />
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
                    <Text id="modal-description">
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et.
                    </Text>
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
