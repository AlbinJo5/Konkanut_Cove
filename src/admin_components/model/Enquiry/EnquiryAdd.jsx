import { Modal, useModal, Text, Tooltip, Spacer, Checkbox, Button } from "@nextui-org/react";
import { DeleteIcon, EditIcon, IconButton } from "../../icons";
import { Input, Grid, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { addData } from "@/utils/firebaseDataHandler";
import { useRouter } from "next/router"
import styles from '@/styles/Home.module.scss'


export default function EnquiryAdd(props) {
    const [form, setForm] = useState({
        product_name: props.name,
        product_id: props.id
    });
    const router = useRouter();
    const { setVisible, bindings } = useModal();

    if (props.visibity) {
        setVisible(false);
    }

    // Create New Product API
    const createEnquiry = async () => {
        if (form.name == null) {
            alert("Name is Required")
            return null;
        }
        if (form.phone_number == null) {
            alert("Phone Number is Required")
            return null;
        }
        fetch('/api/enquiry', {
            method: "post",
            body: JSON.stringify(form),
            headers: new Headers({
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json;charset=UTF-8',
            }),
        }).then(res => res.json()).then(res => {
            setVisible(false)
        })
    }

    return (
        <div>
            <button className={styles.Button} onClick={() => setVisible(true)}>Enquiry</button>

            <Modal
                scroll
                width="600px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={20}>
                        Enquiry
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Grid.Container gap={4}>
                        <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                            <Input
                                required
                                bordered
                                fullWidth={true}
                                labelPlaceholder="Name"
                                onChange={e => setForm({ ...form, name: e.target.value })}
                                color="error" />
                        </Grid>
                        <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                            <Input
                                bordered
                                fullWidth={true}
                                labelPlaceholder="Email (Optional)"
                                onChange={e => setForm({ ...form, email: e.target.value })}
                                type="email"
                                color="error" />
                        </Grid>
                        <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
                            <Input
                                bordered
                                fullWidth={true}
                                labelPlaceholder="Phone Number"
                                onChange={e => setForm({ ...form, phone_number: e.target.value })}
                                type="text"
                                color="error" />
                        </Grid>
                    </Grid.Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={() => { setVisible(false), setForm({}) }}>
                        Close
                    </Button>
                    <Button auto color="error" onPress={() => { createEnquiry() }}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
