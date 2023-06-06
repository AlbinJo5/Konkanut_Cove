import { Modal, useModal, Button, Text, Tooltip, Spacer, Checkbox, Dropdown } from "@nextui-org/react";
import { Input, Grid, Textarea } from "@nextui-org/react";
import { uploadImages } from "@/utils/firebase_image_upload";
import { queryClient } from "@/pages/_app";
import { uploadData } from "@/utils/firebase_data_handler";
import { useQuery } from '@tanstack/react-query'
import { useState } from "react";
import InitialLoading from "@/admin_components/initialLoading";


export default function HotelsAdd() {
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
        const resp = uploadData(data, "Hotels")
        resp.then(res => {
            if (res.message === "success") {
                // update or add the response to the cache
                queryClient.setQueryData(['hotels'], (old) => {
                    const oldData = old?.data
                    if (oldData) {
                        return { ...old, data: [...oldData, res.data] }
                    }
                    else {
                        return { ...old, data: [res.data] }
                    }
                })

                alert("Hotel Added Successfully")
                setLoading(false);
                setVisible(false);
            }
            else {
                alert("Hotel Adding Failed")
                setLoading(false);
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const title = e.target[0].value;
        const address = e.target[1].value;
        const place = e.target[2].value;
        const type = e.target[3].value;
        const description = e.target[4].value;
        const ac = e.target[5].checked;
        const images = e.target[6].files;
        const wifi = e.target[7].checked;
        const pool = e.target[8].checked;
        const parking = e.target[9].checked;
        const restaurant = e.target[10].checked;
        const fitness = e.target[11].checked;
        const laundary = e.target[12].checked;
        const map = e.target[13].value;
        const cancelTime = e.target[14].value;
        const terms = e.target[15].value;

        const resp = uploadImages(images, "Hotels");
        resp.then(res => {
            if (res.message === "success") {
                const data = {
                    title: title,
                    address: address,
                    place: place,
                    type: type,
                    description: description,
                    images: res.data,
                    wifi: wifi,
                    pool: pool,
                    parking: parking,
                    restaurant: restaurant,
                    fitness: fitness,
                    laundary: laundary,
                    map: map,
                    ac: ac,
                    cancelTime: cancelTime,
                    terms: terms
                }
                handleData(data)
            }
        }
        )
    }

    return (
        <div>
            <Button auto shadow color="success" css={{
                color: "white",
            }} onClick={() => setVisible(true)}>
                Add Hotel
            </Button>
            {
                loading && <InitialLoading />
            }

            <Modal
                width="600px"
                height="80px"
                preventClose
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" color="success" css={{
                        color: "#0000000",
                    }} size={20}>
                        Add Hotel
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
                                    required
                                    fullWidth={true}
                                    placeholder="Name"
                                    color="success" />
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Input
                                    bordered
                                    required
                                    fullWidth={true}
                                    placeholder="Address"
                                    color="success" />
                            </Grid>

                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <select name="Place" required style={{
                                    width: "100%",
                                    height: "40px",
                                    borderRadius: "5px",
                                    border: "1px solid #ccc",
                                    padding: "5px"
                                }} >
                                    <option value="0" hidden>Select Place</option>
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
                                <select name="Place" required style={{
                                    width: "100%",
                                    height: "40px",
                                    borderRadius: "5px",
                                    border: "1px solid #ccc",
                                    padding: "5px"
                                }} >
                                    <option value="0" hidden>Select Type</option>
                                    <option value="hotel">Hotel</option>
                                    <option value="homeStay">Home Stay</option>
                                </select>
                            </Grid>

                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Textarea
                                    bordered
                                    fullWidth={true}
                                    required
                                    placeholder="Description"
                                    color="success" />
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Checkbox defaultSelected>AC</Checkbox>
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <input required type="file" multiple />
                            </Grid>

                            <Grid css={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "20px",
                                // child padding

                            }} xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Checkbox defaultSelected>Wifi</Checkbox>
                                <Checkbox defaultSelected>Pool Side</Checkbox>
                                <Checkbox defaultSelected>Parking</Checkbox>
                                <Checkbox defaultSelected>Restaurant</Checkbox>
                                <Checkbox defaultSelected>Fitness</Checkbox>
                                <Checkbox defaultSelected>Laundary</Checkbox>
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Input
                                    bordered
                                    fullWidth={true}
                                    placeholder="Map Link"
                                    required
                                    color="success" />
                            </Grid>

                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Text color="success" css={{
                                    color: "#0000000",
                                    width: "50%"
                                }} size={15}>
                                    Cancellation Time
                                </Text>
                                <Input
                                    bordered
                                    required
                                    placeholder="In Hours"
                                    fullWidth={true}
                                    color="success" />
                            </Grid>

                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Textarea
                                    bordered
                                    fullWidth={true}
                                    labelPlaceholder="Terms and Conditions"
                                    color="error"
                                    required
                                />
                            </Grid>

                        </Grid.Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto flat color="success" onPress={() => { setVisible(false) }}>
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
