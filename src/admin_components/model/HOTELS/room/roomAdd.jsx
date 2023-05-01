import { Modal, useModal, Button, Text, Tooltip, Spacer, Checkbox, Dropdown } from "@nextui-org/react";
import { DeleteIcon, EditIcon, IconButton } from "../../../icons";
import { Input, Grid, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import { uploadImage } from "@/utils/firebase_image_upload";
import { queryClient } from "@/pages/_app";
import { uploadData } from "@/utils/firebase_data_handler";
import { useQuery } from '@tanstack/react-query'

export default function RoomAdd(props) {
    const { setVisible, bindings } = useModal();

    const handleAdd = (data) => {
        const resp = uploadData(data, `Hotels/${props.hotelId}/Rooms`)
        resp.then(res => {
            if (res.message === "success") {
                // update or add the response to the cache
                queryClient.setQueryData([
                    'hotels',
                    props.hotelId,
                    'rooms'
                ], (old) => {
                    const oldData = old?.data
                    if (oldData) {
                        return { ...old, data: [...oldData, res.data] }
                    }
                    else {
                        return { ...old, data: [res.data] }
                    }
                })

                // close the modal
                setVisible(false);

                alert("Room Added Successfully")
            }
            else {
                alert("Room Adding Failed")
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const description = e.target[1].value;
        const isActive = e.target[2].checked;
        const isFeatured = e.target[3].checked;
        const image = e.target[4].files[0];

        const resp = uploadImage(image, `Rooms`)
        resp.then(res => {
            if (res.message === "success") {
                const data = {
                    title: title,
                    description: description,
                    isActive: isActive,
                    isFeatured: isFeatured,
                    image: res.data
                }
                handleAdd(data)
            }
            else {
                alert("Image Upload Failed")
            }
        })
    }

    return (
        <div>
            <Button auto shadow color="success" css={{
                color: "#0000000",
            }} onClick={() => setVisible(true)}>
                Add Room
            </Button>

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
                                    labelPlaceholder="Title"

                                    color="success" />
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Textarea
                                    bordered
                                    fullWidth={true}
                                    labelPlaceholder="Description"
                                    type="number"
                                    color="success" />
                            </Grid>

                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <input type="checkbox" /> <span>Is Active</span>
                                <input type="checkbox" /> <span>Is Active</span>
                            </Grid>

                            <Grid>
                                <input type="file" />
                            </Grid>
                        </Grid.Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto flat color="error" onPress={() => { setVisible(false) }}>
                            Close
                        </Button>
                        <Button auto color="success" type="submit" >
                            Submit
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div >
    );
}
