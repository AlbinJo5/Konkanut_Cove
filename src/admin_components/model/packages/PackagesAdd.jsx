import { Modal, useModal, Button, Text, Tooltip, Spacer, Checkbox } from "@nextui-org/react";
import { DeleteIcon, EditIcon, IconButton } from "../../icons";
import { Input, Grid, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { addData } from "@/utils/firebaseDataHandler";
import { useRouter } from "next/router"

export default function PackageAdd(props) {
    const [form, setForm] = useState({
        createdAt:new Date()
    });
    const router = useRouter();
    const { setVisible, bindings } = useModal();
    const [imagePath, setImagePath] = useState([]);

    if (props.visibity) {
        setVisible(false);
    }

    // Create New Product API
    const createProduct = async (images, form) => {
        form.isAvailable = true;
        await addData(form, images, "Packages").then(res => {
            if(res.status === 200) {
                setVisible(false);
                props.count();
            }
        })
    }

    return (
        <div>
            <Button auto shadow color="error" onClick={() => setVisible(true)}>
                Add Package
            </Button>

            <Modal
                scroll
                width="600px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={20}>
                        Add Package
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Grid.Container gap={4}>
                        <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                            <Input
                                bordered
                                fullWidth={true}
                                labelPlaceholder="Title"
                                onChange={e => setForm({...form, name:e.target.value})}
                                color="error" />
                        </Grid>
                        <Grid  xs={12} lg={12} md={12} sm={12} xl={12}>
                            <Input
                                bordered
                                fullWidth={true}
                                labelPlaceholder="Stock"
                                onChange={e => setForm({...form, stock:e.target.value})}
                                type="number"
                                color="error" />
                        </Grid>
                        
                        <Grid  xs={12} lg={12} md={12} sm={12} xl={12}>
                            <Textarea
                                bordered
                                onChange={e => setForm({...form, desc:e.target.value})}
                                fullWidth={true}
                                labelPlaceholder="Description"
                                color="error"
                            />
                        </Grid>
                        <Grid>
                            <input type="file" multiple onChange={e => setImagePath(e.target.files)} />
                        </Grid>
                    </Grid.Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={() => {setVisible(false), setForm({})}}>
                        Close
                    </Button>
                    <Button auto  color="error" onPress={() => {createProduct(imagePath, form)}}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
