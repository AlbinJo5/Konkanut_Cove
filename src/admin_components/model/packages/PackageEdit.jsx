import { Modal, useModal, Button, Text, Tooltip, Spacer, Checkbox, Dropdown } from "@nextui-org/react";
import { DeleteIcon, EditIcon, IconButton } from "../../icons";
import { Input, Grid, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import { deleteImages, uploadImages } from "@/utils/firebase_image_upload";
import { queryClient } from "@/pages/_app";
import { updateData, uploadData } from "@/utils/firebase_data_handler";
import { useQuery } from '@tanstack/react-query'
import InitialLoading from "@/admin_components/initialLoading";


export default function PackageEdit(props) {
    const { setVisible, bindings } = useModal();
    const [loading, setLoading] = useState(false);

    const places = useQuery(['places'], () => {
        return fetch('/api/place')
            .then(res => res.json())
    },
        {

            staleTime: 10000 * 60
        }
    )
    const handleData = (data) => {
        const resp = updateData(data, `Packages/${props.data.id}`)
        resp.then(res => {
            if (res.message === "success") {
                // update or add the response to the cache
                queryClient.setQueryData(['package', props.data.id], (old) => {
                    const oldData = old?.data
                    console.log(oldData);
                    console.log(res.data);
                    if (oldData) {
                        return res
                    }
                    else {
                        return res.data
                    }
                })

                alert("Hotel Updated Successfully")
                setLoading(false);
                setVisible(false);
            }
            else {
                alert("Hotel Updation Failed")
                setLoading(false);
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const title = e.target[0].value;
        const price = e.target[1].value;
        const days = e.target[2].value;
        const nights = e.target[3].value;
        const place = e.target[4].value;
        const description = e.target[5].value;
        const images = e.target[6].files;

        if (images.length === 0) {
            handleData({
                title: title,
                price: price,
                days: days,
                nights: nights,
                description: description,
                place: place,
                images: props.data.images,
            });
        }

        else {
            deleteImages(props.data.images);
            const resp = uploadImages(images, "packages");
            resp.then((res) => {
                const data = {
                    title: title,
                    price: price,
                    days: days,
                    nights: nights,
                    description: description,
                    place: place,
                    images: res.data,
                }
                handleData(data);
            }
            )
        }
    }

    return (
        <div>
            <Button auto shadow color="error" onClick={() => setVisible(true)}>
                Edit
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
                                    bordered
                                    fullWidth={true}
                                    labelPlaceholder="Title"
                                    initialValue={props.data.title}
                                    color="error" />
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Input
                                    bordered
                                    fullWidth={true}
                                    labelPlaceholder="Price"
                                    initialValue={props.data.price}
                                    type="number"
                                    color="error" />
                            </Grid>

                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Input
                                    bordered
                                    fullWidth={true}
                                    labelPlaceholder="Days"
                                    initialValue={props.data.days}
                                    type="number"
                                    color="error" />
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Input
                                    bordered
                                    fullWidth={true}
                                    initialValue={props.data.nights}
                                    labelPlaceholder="Nights"
                                    type="number"
                                    color="error" />
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <select name="place" id="place" style={{
                                    width: "100%",
                                    height: "max-content",
                                    border: "3.5px solid #eaeaea",
                                    borderRadius: "1rem",
                                    padding: "10px",
                                    outline: "none",
                                    color: "#0000004a",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    fontFamily: "inherit",
                                    backgroundColor: "#ffffff",

                                    // options in inline
                                    "& option": {
                                        color: "#0000004a",
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        fontFamily: "inherit",
                                        backgroundColor: "#ffffff",
                                        width: "100%",
                                    }
                                }}
                                >
                                    {
                                        places.data?.data.filter(
                                            (place) => place.id === props.data.place
                                        ).map((place, index) => {
                                            return (
                                                <option key={index} value={place.id}>{place.data.title}</option>
                                            )
                                        })
                                    }
                                </select>
                            </Grid>

                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Textarea
                                    bordered
                                    fullWidth={true}
                                    labelPlaceholder="Description"
                                    color="error"
                                    initialValue={props.data.description}
                                />
                            </Grid>
                            <Grid>
                                <input type="file" multiple />
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
