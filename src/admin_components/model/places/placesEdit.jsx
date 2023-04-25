import { Modal, useModal, Button, Text, Tooltip, Spacer, Checkbox } from "@nextui-org/react";
import { DeleteIcon, EditIcon, IconButton } from "../../icons";
import { Input, Grid, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { addData, updateData } from "@/utils/firebaseDataHandler";
import { useRouter } from "next/router"
import InitialLoading from "@/admin_components/initialLoading";

const ROUTE = '/api/place';

export default function PlaceEdit(props) {
    const [form, setForm] = useState(props.data);
    const { setVisible, bindings } = useModal();
    const [imagePath, setImagePath] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    if (props.visibity) {
        setVisible(false);
    }

    // Update Place API
    const updatePlace = async (id, data) => {
        setIsLoading(true);
        setVisible(false);
        await updateData(data, imagePath, "Places", id).then(res => {
            if (res.status === 200) {

                setIsLoading(false);
                props.count();
            }
        })
        setIsLoading(false);
    }

    return (
        <div>
            {
                isLoading && <InitialLoading />
            }
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
                scroll
                width="600px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={20}>
                        Edit Place
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Grid.Container gap={4}>
                        <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                            <Input
                                bordered
                                fullWidth={true}
                                labelPlaceholder="Title"
                                onChange={e => setForm({ ...form, title: e.target.value })}
                                value={form.title}
                                color="success" />
                        </Grid>
                       
                       
                        <Grid>
                            <input type="file"  onChange={e => setImagePath(e.target.files)} />
                        </Grid>
                        {/* <Grid>
                            <input type="file" multiple onChange={e => setImagePath(e.target.files)} />
                        </Grid> */}
                    </Grid.Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="success" onPress={() => { setVisible(false), setForm({}) }}>
                        Close
                    </Button>
                    <Button auto color="error" onPress={() => { updatePlace(props.id, form) }}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
