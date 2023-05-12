import { Modal, useModal, Button, Text, Tooltip, Spacer, Checkbox, Dropdown } from "@nextui-org/react";
import { DeleteIcon, EditIcon, EyeIcon, IconButton } from "../../../icons";
import { Input, Grid, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import { uploadImage } from "@/utils/firebase_image_upload";
import { queryClient } from "@/pages/_app";
import { uploadData } from "@/utils/firebase_data_handler";
import { useQuery } from '@tanstack/react-query'
import InitialLoading from "@/admin_components/initialLoading";

export default function DayView(props) {
    const { setVisible, bindings } = useModal();
    return (
        <div>
            <Tooltip
                content="View"
                color="success"
                onClick={() => {
                    setVisible(true)
                }}
            >
                <IconButton>
                    <EyeIcon size={20} fill="#095000" />
                </IconButton>
            </Tooltip>
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
                        Add Day
                    </Text>
                </Modal.Header>
                <form>
                    <Modal.Body
                        height="800px"
                        scroll={true}

                    >

                        <Grid.Container gap={2}>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Text size={20} >
                                    Day Number :  {props.data.dayNumber}
                                </Text>
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Text size={20} >
                                    {props.data.title}
                                </Text>
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Text size={15}>
                                    {props.data.subTitle}
                                </Text>
                            </Grid>
                            <Grid xs={12} css={{
                                display: "flex",
                                gap: "10px",
                            }} lg={12} md={12} sm={12} xl={12}>
                                <Checkbox isReadOnly defaultSelected={props.data.hotel}>Hotel</Checkbox>
                                <Checkbox isReadOnly defaultSelected={props.data.transfer}>Transfer</Checkbox>
                                <Checkbox isReadOnly defaultSelected={props.data.flight}>Flight</Checkbox>
                            </Grid>
                            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Text size={15}>
                                    {
                                        // split by * and then map
                                        // props.data.description
                                        props.data.description.split("*").map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    {item}
                                                </div>
                                            )
                                        }
                                        )
                                    }
                                </Text>
                            </Grid>
                        </Grid.Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto flat color="error" onPress={() => { setVisible(false) }}>
                            Close
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div >
    );
}
