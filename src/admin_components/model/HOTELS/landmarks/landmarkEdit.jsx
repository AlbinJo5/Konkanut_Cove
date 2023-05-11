import { Modal, useModal, Button, Text, Tooltip, Spacer, Checkbox, Dropdown } from "@nextui-org/react";
import { DeleteIcon, EditIcon, IconButton } from "../../../icons";
import { Input, Grid, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import { uploadImage } from "@/utils/firebase_image_upload";
import { queryClient } from "@/pages/_app";
import { updateData, uploadData } from "@/utils/firebase_data_handler";
import { useQuery } from '@tanstack/react-query'
import InitialLoading from "@/admin_components/initialLoading";

export default function LandmarkEdit(props) {
    const { setVisible, bindings } = useModal();
    const [loading, setLoading] = useState(false);

    const handleAdd = (data) => {
        const resp = updateData(data, `Hotels/${props.hotelId}/Landmarks/${props.data.id}`)
        resp.then(res => {
            if (res.message === "success") {
                // update or add the response to the cache
                queryClient.setQueryData([
                    'hotels',
                    props.hotelId,
                    'landmarks'
                ], (old) => {
                    const oldData = old?.data
                    // replace the same data with the new one using id
                    if (oldData) {
                        const newData = oldData.map((item) => {
                            if (item.id === props.data.id) {
                                return res.data
                            }
                            else {
                                return item
                            }
                        })
                        return { ...old, data: newData }
                    }
                })

                // close the modal
                setVisible(false);

                alert("Landmark Edited Successfully")
                setLoading(false);
            }
            else {
                alert("Lamdmark Editing Failed")
                setLoading(false);
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const name = e.target[0].value;
        const distance = e.target[1].value;

        const data = {
            name: name,
            distance: distance,
        }

        handleAdd(data)
    }

    return (
        <div>
            <Tooltip
                content="Edit"
                color="success"
                onClick={() => {
                    setVisible(true)
                }}
            >
                <IconButton>
                    <EditIcon size={20} fill="#095000" />
                </IconButton>
            </Tooltip>



            <Modal
                width="600px"
                height="80px"

                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                {
                    loading && <InitialLoading />
                }
                <Modal.Header>
                    <Text id="modal-title" color="success" css={{
                        color: "#0000000",
                    }} size={20}>
                        Add Room
                    </Text>
                </Modal.Header>
                <form onSubmit={handleSubmit} >
                    <Modal.Body
                        height="800px"
                        scroll={true}

                    >

                        <Grid.Container gap={4}>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Input
                                    bordered
                                    fullWidth={true}
                                    initialValue={props.data.name}
                                    labelPlaceholder="Name"
                                    color="success" />
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Input
                                    bordered
                                    fullWidth={true}
                                    initialValue={props.data.distance}
                                    labelPlaceholder="Distance"
                                    type="number"
                                    step=".1"
                                    color="success" />
                            </Grid>
                        </Grid.Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto flat color="error" onPress={() => { setVisible(false) }}>
                            Close
                        </Button>
                        <Button auto css={{
                            color: "white",
                        }} color="success" type="submit" >
                            Submit
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div >
    );
}
