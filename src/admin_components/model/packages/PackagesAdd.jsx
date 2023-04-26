import { Modal, useModal, Button, Text, Tooltip, Spacer, Checkbox, Dropdown } from "@nextui-org/react";
import { DeleteIcon, EditIcon, IconButton } from "../../icons";
import { Input, Grid, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import { uploadImages } from "@/utils/firebase_image_upload";
import { queryClient } from "@/pages/_app";
import { uploadData } from "@/utils/firebase_data_handler";
import { useQuery } from '@tanstack/react-query'


export default function PackageAdd() {
    const { setVisible, bindings } = useModal();

    const places = useQuery(['places'], () => {
        return fetch('/api/place')
            .then(res => res.json())
    },
        {

            staleTime: 10000 * 60
        }
    )
    const handleAdd = (data) => {
        const resp = uploadData(data, "Packages")
        resp.then(res => {
            console.log(res);
            if (res.message === "success") {
                // update or add the response to the cache
                queryClient.setQueryData(['packages'], (old) => {
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

                alert("Package Added Successfully")
            }
            else {
                alert("Package Adding Failed")
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const price = e.target[1].value;
        const days = e.target[2].value;
        const nights = e.target[3].value;
        const place = e.target[4].value;
        const description = e.target[5].value;
        const resp = uploadImages(e.target[6].files, "packages");
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
            handleAdd(data);
        }
        )
    }

    return (
        <div>
            <Button auto shadow color="error" onClick={() => setVisible(true)}>
                Add Package
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
                        Add Package
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

                                    color="error" />
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Input
                                    bordered
                                    fullWidth={true}
                                    labelPlaceholder="Price"
                                    type="number"
                                    color="error" />
                            </Grid>

                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Input
                                    bordered
                                    fullWidth={true}
                                    labelPlaceholder="Days"
                                    type="number"
                                    color="error" />
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Input
                                    bordered
                                    fullWidth={true}
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



                                }} >
                                    <option value="0">Select Place</option>
                                    {
                                        places.data?.data.map((place, index) => {
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
