import { Modal, useModal, Button, Text, Tooltip } from "@nextui-org/react";
import { DeleteIcon, IconButton } from "../../icons";
import InitialLoading from "@/admin_components/initialLoading";
import { useState } from "react";

const ROUTE = '/api/transport';

export default function TransportDelete(props) {
    const [isLoading, setIsLoading] = useState(false);
    const { setVisible, bindings } = useModal();
    if (props.visibity) {
        setVisible(false);
    }

    // Delete Transport List API
    const deleteTransport = async (id) => {
        setIsLoading(true);
        setVisible(false);
        fetch(ROUTE + `?id=${id}`, { method: 'DELETE' }).then(res => res.json()).then(res => {
            if (res.status === 200) {
                props.transportCount();
                setIsLoading(false);
            }
        })
        setIsLoading(false);
    }

    return (
        <div>
            {
                isLoading && <InitialLoading />
            }
            <Tooltip
                content="Delete"
                color="error"
                onClick={() => {
                    setVisible(true)
                }}
            >
                <IconButton>
                    <DeleteIcon size={20} fill="#ff4d4f" />
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
                        Delete Transport
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Text id="modal-description">
                        Are you sure? You Want to Delete the Transport!
                    </Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="success" onPress={() => setVisible(false)}>
                        Close
                    </Button>
                    <Button auto color="error" onPress={() => deleteTransport(props.id)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
