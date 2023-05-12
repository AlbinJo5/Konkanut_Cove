import { Modal, useModal, Button, Text, Tooltip, Spacer, Checkbox, Dropdown } from "@nextui-org/react";
import { DeleteIcon, EditIcon, IconButton } from "../../../icons";
import { Input, Grid, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import { uploadImage } from "@/utils/firebase_image_upload";
import { queryClient } from "@/pages/_app";
import { getAllData, uploadData } from "@/utils/firebase_data_handler";
import { useQuery } from '@tanstack/react-query'
import InitialLoading from "@/admin_components/initialLoading";

export default function ActivityAdd(props) {
    const { setVisible, bindings } = useModal();
    const [loading, setLoading] = useState(false);

    const handleAdd = (data) => {
        const resp = uploadData(data, `Packages/${props.packageId}/Activities`)
        resp.then(res => {
            if (res.message === "success") {
                // update or add the response to the cache
                queryClient.setQueryData([
                    'packages',
                    props.packageId,
                    'activities'
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
                alert("Activity Added Successfully")
                setLoading(false);
            }
            else {
                alert("Activity Adding Failed")
                setLoading(false);
            }
        })
    }

    const activitiesData = useQuery(
        ['activities'],
        () => {
            return getAllData("Activities")
        },
        {
            staleTime: 10000 * 60
        }
    )


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const activityId = e.target[0].value;

        const data = {
            activityId,
        }

        handleAdd(data)
    }

    return (
        <div>
            <Button auto shadow color="success" css={{
                color: "white",
            }} onClick={() => setVisible(true)}>
                Add Activity
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
                        Add Activity
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
                                }}>
                                    {activitiesData.data?.data.map((activity, i) => {
                                        return (
                                            <option key={i} value={activity.id}>{activity.title}</option>
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
