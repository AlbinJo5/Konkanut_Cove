import { Modal, useModal, Button, Text, Tooltip, Spacer, Checkbox, Dropdown } from "@nextui-org/react";
import { DeleteIcon, EditIcon, IconButton } from "../../icons";
import { Input, Grid, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import { deleteImages, uploadImage, uploadImages } from "@/utils/firebase_image_upload";
import { queryClient } from "@/pages/_app";
import { updateData, uploadData } from "@/utils/firebase_data_handler";
import { useQuery } from '@tanstack/react-query'
import InitialLoading from "@/admin_components/initialLoading";


export default function GalleryEdit(props) {
    const { setVisible, bindings } = useModal();
    const [loading, setLoading] = useState(false);

    const handleData = (data) => {
        const resp = updateData(data, `Gallery/${props.data.id}`)
        resp.then(res => {
            if (res.message === "success") {
                // update or add the response to the cache
                queryClient.setQueryData(['gallery'], (old) => {
                    // update the old data with new data 
                    const index = old?.data.findIndex((item) => item.id === props.data.id);
                    old.data[index] = res.data;

                    return {
                        data: [...old?.data]
                    }
                })

                alert("Gallery Updated Successfully")
                setLoading(false);
                setVisible(false);
            }
            else {
                alert("Gallery Updation Failed")
                setLoading(false);
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const image = e.target.image.files[0];
        const caption = e.target.caption.value;

        if (image === undefined) {
            handleData({
                image: props.data.image,
                caption: caption,
            });
        }

        else {
            deleteImages(props.data.image);
            const resp = uploadImage(image, `Gallery`)
            resp.then((res) => {
                const data = {
                    image: res.data,
                    caption: caption,
                }
                handleData(data);
            }
            )
        }
    }

    return (
        <div>
            <Tooltip
                content="Edit"
                color="success"
                onClick={() => {
                    setVisible(true);
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
                        Edit Package
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
                                    width="100%"
                                    type="file"
                                    label="Image"
                                    name="image"
                                    placeholder="Image"
                                />

                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Input
                                    width="100%"
                                    required
                                    type="text"
                                    label="Caption"
                                    name="caption"
                                    initialValue={props.data.caption}
                                    placeholder="Caption"
                                />
                            </Grid>
                        </Grid.Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto flat color="error" onPress={() => { setVisible(false) }}>
                            Close
                        </Button>
                        <Button auto color="error" type="submit" >
                            Submit
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div >
    );
}
