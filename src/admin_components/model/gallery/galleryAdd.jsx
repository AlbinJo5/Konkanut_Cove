import { Modal, useModal, Button, Text} from "@nextui-org/react";
import { Input, Grid } from "@nextui-org/react";
import { useState } from "react";
import { uploadImage } from "@/utils/firebase_image_upload";
import { queryClient } from "@/pages/_app";
import InitialLoading from "@/admin_components/initialLoading";
import { uploadData } from "@/utils/firebase_data_handler";

export default function GalleryAdd() {
    const { setVisible, bindings } = useModal();
    const [loading, setLoading] = useState(false);

    const handleAdd = (data) => {
        const resp = uploadData(data, `Gallery`)
        resp.then(res => {
            if (res.message === "success") {
                // update or add the response to the cache
                queryClient.setQueryData([
                    'gallery',
                ], (old) => {
                    return {
                        data: [...old?.data, res.data]
                    }
                })
                // close the modal
                setVisible(false);
                alert("Gallery Added Successfully")
                setLoading(false);
            }
            else {
                alert("Gallery Adding Failed")
                setLoading(false);
            }
        })
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const image = e.target.image.files[0];
        const caption = e.target.caption.value;

        const resp = uploadImage(image, `Gallery`)
        resp.then(res => {
            if (res.message === "success") {

                const data = {
                    image: res.data,
                    caption: caption,
                }
                handleAdd(data);
            }
            else {
                alert("Image Upload Failed")
                setLoading(false);
            }
        })
    }

    return (
        <div>
            <Button auto shadow color="success" css={{
                color: "white",
            }} onClick={() => setVisible(true)}>
                Add Gallery
            </Button>

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
                        Add Gallery
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
                                    required
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
                                    placeholder="Caption"
                                />
                            </Grid>
                        </Grid.Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto flat color="error" onPress={() => { setVisible(false) }}>
                            Close
                        </Button>
                        <Button auto color="success" css={{
                            color: "white",
                        }} type="submit" >
                            Submit
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div >
    );
}
