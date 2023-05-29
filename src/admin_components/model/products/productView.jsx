import { Modal, useModal, Button, Text, Tooltip } from "@nextui-org/react";
import { EyeIcon, IconButton } from "../../icons";

function ProductView(props) {

    const { setVisible, bindings } = useModal();
    if (props.visibity) {
        setVisible(false);
    }
    return (
        <div>
            <Tooltip
                content="View"
                color="error"
                onClick={() => {
                    setVisible(true)
                }}
            >
                <IconButton>
                    <EyeIcon size={20} fill="#979797" />
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
                        Product Details
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }} >
                        <Text id="modal-description">
                            {props.data.name}
                        </Text>

                        <Text id="modal-description">
                            Stock: {props.data.stock}
                        </Text>
                    </div>


                    <Text id="modal-description">
                        {props.data.desc}
                    </Text>
                    {/* props.data.image is an object with 0:"link", 1:"link" */}
                    {/* map through it */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px',
                    }} >
                        {Object.values(props.data.images).map((image, index) => (
                            <img key={index} src={image} alt="product" style={{
                                width: '100px',
                                height: '100px',
                                objectFit: 'contain',
                            }} />
                        ))}
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={() => setVisible(false)}>
                        Close
                    </Button>
       
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ProductView