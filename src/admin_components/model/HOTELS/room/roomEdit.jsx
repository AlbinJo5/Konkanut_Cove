import { Modal, useModal, Button, Text, Tooltip, Spacer, Checkbox, Dropdown } from "@nextui-org/react";
import { Input, Grid, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { deleteImage, uploadImage } from "@/utils/firebase_image_upload";
import { queryClient } from "@/pages/_app";
import { updateData, uploadData } from "@/utils/firebase_data_handler";
import InitialLoading from "@/admin_components/initialLoading";
import { EditIcon, IconButton } from "@/admin_components/icons";

export default function RoomEdit(props) {
    const { setVisible, bindings } = useModal();
    const [loading, setLoading] = useState(false);

    const handleAdd = (data) => {
        const resp = updateData(data, `Hotels/${props.hotelId}/Rooms/${props.data.id}`)
        resp.then(res => {
            if (res.message === "success") {
                // update or add the response to the cache
                queryClient.setQueryData([
                    'hotels',
                    props.hotelId,
                    'rooms'
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
                setLoading(false);

                alert("Room Edited Successfully")
            }
            else {
                setLoading(false);
                alert("Room Editing Failed")
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const title = e.target[0].value;
        const description = e.target[1].value;
        const view = e.target[2].checked;
        const double = e.target[3].checked;
        const people = e.target[4].value;
        const image = e.target[5].files[0];

        if (image === undefined) {
            const data = {
                title: title,
                description: description,
                view: view,
                double: double,
                people: people,
                image: props.data.image
            }
            handleAdd(data)
            return
        }
        await deleteImage(props.data.image)
        const resp = uploadImage(image, `Rooms`)
        resp.then(res => {
            if (res.message === "success") {
                const data = {
                    title: title,
                    description: description,
                    view: view,
                    double: double,
                    people: people,
                    image: res.data
                }
                handleAdd(data)
            }
            else {
                setLoading(false);
                alert("Image Upload Failed")
            }
        })
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
                        Edit Room
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
                                    placeholder="Title"
                                    initialValue={props.data.title}
                                    required
                                    color="success" />
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Textarea
                                    bordered
                                    fullWidth={true}
                                    placeholder="Description"
                                    initialValue={props.data.description}
                                    required
                                    color="success" />
                            </Grid>

                            <Grid xs={12} css={{
                                display: "flex",
                                gap: "10px",
                            }} lg={12} md={12} sm={12} xl={12}>
                                <Checkbox isRequired defaultSelected={props.data.view}>View</Checkbox>
                                <Checkbox isRequired defaultSelected={props.data.double}>Double Bed</Checkbox>
                            </Grid>

                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Input
                                    bordered
                                    fullWidth={true}
                                    placeholder="No of people"
                                    initialValue={props.data.people}
                                    type="number"
                                    required
                                    color="success" />
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
