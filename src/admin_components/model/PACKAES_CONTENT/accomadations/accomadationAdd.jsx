import { Modal, useModal, Button, Text, Tooltip, Spacer, Checkbox, Dropdown } from "@nextui-org/react";
import { DeleteIcon, EditIcon, IconButton } from "../../../icons";
import { Input, Grid, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import { uploadImage } from "@/utils/firebase_image_upload";
import { queryClient } from "@/pages/_app";
import { getAllData, uploadData } from "@/utils/firebase_data_handler";
import { useQuery } from '@tanstack/react-query'

export default function AccomadationAdd(props) {
    const { setVisible, bindings } = useModal();

    const handleAdd = (data) => {
        const resp = uploadData(data, `Packages/${props.accomadationId}/Accomadations`)
        resp.then(res => {
            if (res.message === "success") {
                // update or add the response to the cache
                queryClient.setQueryData([
                    'packages',
                    props.accomadationId,
                    'hotels'
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
                alert("Accomadation Added Successfully")
            }
            else {
                alert("Accomadation Adding Failed")
            }
        })
    }

    const hotelsData = useQuery(
        ['hotels'],
        () => {
            return getAllData("Hotels")
        },
        {
            staleTime: 10000 * 60
        }
    )


    const handleSubmit = (e) => {
        e.preventDefault();
        const accomadationId = e.target[0].value;

        const data = {
            accomadationId,
        }

        handleAdd(data)
    }

    return (
        <div>
            <Button auto shadow color="success" css={{
                color: "white",
            }} onClick={() => setVisible(true)}>
                Add Accomodation
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
                        Add Accomadation
                    </Text>
                </Modal.Header>
                <form onSubmit={handleSubmit} >
                    <Modal.Body
                        height="800px"
                        scroll={true}

                    >
                        <Grid.Container gap={4}>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <select name="activity" id="activity" style={{
                                    width: "100%",
                                    height: "40px",
                                    borderRadius: "5px",
                                    border: "1px solid #eaeaea",
                                    padding: "5px",
                                    outline: "none",
                                    fontSize: "16px",
                                    color: "#000000",
                                    backgroundColor: "#ffffff",
                                }} s>
                                    {hotelsData.data?.data.map((activity, i) => {
                                        return (
                                            <option key={i} value={activity.id}>{activity.name}</option>
                                        )
                                    })}
                                </select>

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
