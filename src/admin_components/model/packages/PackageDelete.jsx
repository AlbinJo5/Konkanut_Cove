import { Modal, useModal, Button, Text, Tooltip } from "@nextui-org/react";
import { DeleteIcon, IconButton } from "../../icons";

const ROUTE = '/api/package';

export default function PackageDelete(props) {
    const { setVisible, bindings } = useModal();
    console.log(bindings);
    if (props.visibity) {
        setVisible(false);
    }

    // Delete Package List API
    const deletePackage = async (id) => {
        fetch(ROUTE + `?id=${id}`, { method: 'DELETE' }).then(res => res.json()).then(res => {
            if(res.status === 200) {
                setVisible(false);
                props.count();
            }
        })
    }

    return (
        <div>
            <Tooltip
                content="Delete"
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
                        Delete Package
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Text id="modal-description">
                        Are you sure? You Want to Delete the Package! 
                    </Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={() => setVisible(false)}>
                        Close
                    </Button>
                    <Button auto color="error" onPress={() => deletePackage(props.id)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
