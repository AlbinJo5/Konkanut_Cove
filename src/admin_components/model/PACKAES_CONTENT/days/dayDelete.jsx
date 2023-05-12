import { Modal, useModal, Button, Text, Tooltip, Spacer, Checkbox, Dropdown } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import { DeleteIcon, IconButton } from "@/admin_components/icons";
import Image from "next/image";
import { deleteImage } from "@/utils/firebase_image_upload";
import { deleteData } from "@/utils/firebase_data_handler";
import { queryClient } from "@/pages/_app";
import { useState } from "react";
import InitialLoading from "@/admin_components/initialLoading";

export default function DayDelete(props) {
    const { setVisible, bindings } = useModal();
    const [loading, setLoading] = useState(false);

    const handleDelete = () => {
        setLoading(true);


        // delete the room
        deleteData(`Packages/${props.packageId}/Days/${props.data.id}`).then(() => {
            // u[date the query cache
            queryClient.setQueryData([
                'packages',
                props.packageId,
                'days'
            ], (oldData) => {
                return {
                    ...oldData,
                    data: oldData.data.filter((room) => room.id !== props.data.id)

                }
            }
            );
            alert("Day deleted");
            setLoading(false);
        }
        ).catch((error) => {
            alert("Error deleting day");
            setLoading(false);
        }
        );

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
                    <DeleteIcon size={20} fill="#ff4d4f" />
                </IconButton>
            </Tooltip>

            {
                loading && <InitialLoading />
            }
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
                <Modal.Body
                    height="800px"
                    scroll={true}

                >

                    <Grid.Container gap={2}>

                        <Grid xs={12} lg={12} md={12} sm={12} xl={12}>

                            <Text size={15} >
                                Are you sure you want to delete this Day?
                            </Text>


                        </Grid>
                        <Grid xs={12} lg={12} md={12} sm={12} xl={12}>

                            <Text size={20} >
                                {props.data.dayNumber} : {props.data.title}
                            </Text>
                        </Grid>

                    </Grid.Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="success" onPress={() => { setVisible(false) }}>
                        Close
                    </Button>
                    <Button auto flat color="error" onPress={() => {
                        handleDelete();
                        setVisible(false)
                    }}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}
