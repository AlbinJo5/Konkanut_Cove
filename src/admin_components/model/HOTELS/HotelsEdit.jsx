import { Modal, useModal, Button, Text, Tooltip, Spacer, Checkbox, Dropdown } from "@nextui-org/react";
import { Input, Grid, Textarea } from "@nextui-org/react";
import { deleteImages, uploadImages } from "@/utils/firebase_image_upload";
import { queryClient } from "@/pages/_app";
import { useQuery } from '@tanstack/react-query'
import { useState } from "react";
import InitialLoading from "@/admin_components/initialLoading";
import { updateData } from "@/utils/firebase_data_handler";


export default function HotelsEdit(props) {
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
        const resp = updateData(data, `Hotels/${props.data.id}`)
        resp.then(res => {
            if (res.message === "success") {
                // update or add the response to the cache
                queryClient.setQueryData(['hotel', props.data.id], (old) => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const title = e.target[0].value;
        const address = e.target[1].value;
        const place = e.target[2].value;
        const type = e.target[3].value;
        const description = e.target[4].value;
        const images = e.target[5].files;
        const wifi = e.target[6].checked;
        const pool = e.target[7].checked;
        const parking = e.target[8].checked;
        const restaurant = e.target[9].checked;
        const fitness = e.target[10].checked;
        const laundary = e.target[11].checked;
        const map = e.target[12].value;
        const cancelTime = e.target[13].value;
        if (images.length === 0) {
            handleData({
                title: title,
                address: address,
                place: place,
                type: type,
                description: description,
                images: props.data.images,
                wifi: wifi,
                pool: pool,
                parking: parking,
                restaurant: restaurant,
                fitness: fitness,
                laundary: laundary,
                map: map,
                cancelTime: cancelTime,
            })
        }
        else {
            deleteImages(props.data.images);
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
                        cancelTime: cancelTime,
                        createdAt: new Date().toISOString()
                    }
                    handleData(data)
                }
            }
            )
        }

    }
    return (
        <div>
            <Button auto shadow color="success" css={{
                color: "white",
            }} onClick={() => setVisible(true)}>
                Edit
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
                                    fullWidth={true}
                                    placeholder="Name"
                                    initialValue={props.data.title}
                                    color="success" />
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Input
                                    bordered
                                    fullWidth={true}
                                    placeholder="Address"
                                    initialValue={props.data.address}
                                    color="success" />
                            </Grid>

                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <select name="Place"
                                    style={{
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
                                                <option selected={
                                                    place.id === props.data.place
                                                } key={index} value={place.id}>{place.data.title}</option>
                                            )
                                        })
                                    }
                                </select>
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <select name="Place"
                                    style={{
                                        width: "100%",
                                        height: "40px",
                                        borderRadius: "5px",
                                        border: "1px solid #ccc",
                                        padding: "5px"
                                    }} >
                                    <option value="0" hidden >Select Type</option>
                                    <option selected={
                                        props.data.type === "hotel"
                                    } value="hotel">Hotel</option>
                                    <option selected={
                                        props.data.type === "homeStay"
                                    } value="homeStay">Home Stay</option>
                                </select>
                            </Grid>

                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Textarea
                                    bordered
                                    fullWidth={true}
                                    initialValue={props.data.description}
                                    placeholder="Description"
                                    color="success" />
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <input type="file" multiple />
                            </Grid>

                            <Grid css={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "20px",
                                // child padding

                            }} xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Checkbox defaultSelected={
                                    props.data?.wifi
                                } >Wifi</Checkbox>
                                <Checkbox defaultSelected={
                                    props.data?.pool
                                } >Pool Side</Checkbox>
                                <Checkbox defaultSelected={
                                    props.data?.parking
                                } >Parking</Checkbox>
                                <Checkbox defaultSelected={
                                    props.data?.restaurant
                                } >Restaurant</Checkbox>
                                <Checkbox defaultSelected={
                                    props.data?.fitness
                                } >Fitness</Checkbox>
                                <Checkbox defaultSelected={
                                    props.data?.laundary
                                } >Laundary</Checkbox>
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Input
                                    bordered
                                    fullWidth={true}
                                    placeholder="Map Link"
                                    initialValue={props.data.map}
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
                                    fullWidth={true}
                                    type="time"
                                    initialValue={props.data.cancelTime}
                                    color="success" />
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
