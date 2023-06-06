import { EyeIcon, IconButton } from "@/admin_components/icons";
import { Modal, useModal, Button, Text, Tooltip } from "@nextui-org/react";


function TermsModal(props) {
    const { setVisible, bindings } = useModal();
    if (props.visibity) {
        setVisible(false);
    }
    return (
        <div>
            <Tooltip
                content="Terms and Conditions"
                color="success"
                onClick={() => {
                    setVisible(true);
                }}
            >
                <IconButton>
                    <EyeIcon size={20} fill="#095000" />
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
                        Terms and Conditions
                    </Text>
                </Modal.Header>
                <Modal.Body>

                    <Text id="modal-description">
                        {
                            props?.terms ? (
                                props?.terms?.split('*').map((item, index) => {
                                    if (item !== "")
                                        return (
                                            <Text key={index} p>
                                                {index}.  {item}
                                            </Text>
                                        )
                                }
                                )
                            ) : (
                                "No terms and conditions"
                            )
                        }
                    </Text>

                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="success" onPress={() => setVisible(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default TermsModal;
