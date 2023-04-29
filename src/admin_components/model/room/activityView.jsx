import { Modal, useModal, Button, Text, Tooltip } from "@nextui-org/react";
import { EyeIcon, IconButton } from "../../icons";
import Image from "next/image";

function ActivitiesView(props) {

    const { setVisible, bindings } = useModal();
    console.log(bindings);
    console.log(props.data);
    if (props.visibity) {
        setVisible(false);
    }
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
                scroll
                width="600px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Place Details
                    </Text>
                </Modal.Header>
                <Modal.Body>



                    <Text id="modal-description">
                        {props.data.title}
                    </Text>
                    {/* props.data.image is an object with 0:"link", 1:"link" */}
                    {/* map through it */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px',
                    }} >
                        {Object.values(props.data.images).map((image, index) => (
                            <Image key={index} src={image} width={1000} height={1000} alt="product" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                            }} />
                        ))}
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="success" onPress={() => setVisible(false)}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ActivitiesView