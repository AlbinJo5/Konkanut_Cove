import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text, Switch } from "@nextui-org/react";
import { uploadData } from "../../utils/firebase_data_handler";
import InitialLoading from "@/admin_components/initialLoading";
export default function HotelModal() {
    const [visible, setVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [id, setId] = React.useState("");

    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const name = e.target[0].value;
        const email = e.target[2].value;
        const phone = e.target[4].value;
        const people = e.target[6].value;
        const checkIn = e.target[8].value;
        const checkOut = e.target[10].value;
        const ac = e.target[12].checked;


        const data = {
            name,
            email,
            phone,
            people,
            checkIn,
            checkOut,
            ac

        }

        console.log(data);


        uploadData(data, "Hotel_Enquiries").then((res) => {
            if (res.message === "success") {
                setId(res.data.id);
                alert("Enquiry Submitted Successfully");
                setLoading(false);
            }
            else {
                console.log("error");
                alert("Enquiry Submission Failed");
                setLoading(false);
            }
        }
        ).catch((err) => {
            console.log(err);
            alert("Enquiry Submission Failed");
            setLoading(false);
        }
        );
    };

    return (
        <div>
            <button className="flex-end   mb-5 p-5 rounded-lg py-3 bg-green-600 hover:bg-green-700 text-white font-bold disabled:bg-slate-500" auto color="warning" shadow onClick={handler}>
                Enquire Now
            </button>
            <Modal
                closeButton
                preventClose
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={() => { closeHandler(), setId("") }}
            >
                {
                    loading && <InitialLoading />
                }
                {
                    id ? (<div className="flex flex-col items-center justify-center">
                        <div >

                            <h6 className="my-2">Enquiry Submitted Successfully</h6>
                            <h4 className=" my-2">Enquiry ID: {id}</h4>
                            {/* click to copy */}
                        </div>

                        <Button className="flex-end mt-5  mb-5 p-5 rounded-lg py-3 bg-green-600 hover:bg-green-700 text-white font-bold disabled:bg-slate-500" auto color="warning" shadow onClick={() => {
                            navigator.clipboard.writeText(id);
                            alert("Copied to clipboard");
                        }}>
                            Click to copy
                        </Button>
                    </div>) : (
                        <form onSubmit={handleSubmit} >
                            <Modal.Header>
                                <Text id="modal-title" size={18}>
                                    Hotels
                                    <Text b size={18}>
                                        {" "}Enquiry
                                    </Text>
                                </Text>
                            </Modal.Header>
                            <Modal.Body>
                                <Input
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    placeholder="Name"
                                />
                                <Input
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    placeholder="Email"
                                />
                                <Input
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    type="number"
                                    placeholder="Phone Number"
                                />
                                <Input
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    type="number"
                                    placeholder="Total Number of People (Optional)"
                                />
                                <Text size={15}>
                                    Check In
                                </Text>
                                <Input
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    type="date"
                                    // prevent from selecting past dates
                                    min={new Date().toISOString().split("T")[0]}
                                />
                                <Text size={15}>
                                    Check Out
                                </Text>
                                <Input
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    type="date"
                                    // prevent from selecting past dates
                                    min={new Date().toISOString().split("T")[0]}
                                />
                                <Row css={{
                                    display: "flex",
                                    alignItems: "center",
                                }}  >


                                    <Switch
                                        color="primary"
                                        initialChecked
                                    />
                                    <Text css={{ margin: 0, marginTop: "5px", marginLeft: "15px" }} size={15}>
                                        AC
                                    </Text>
                                </Row>



                            </Modal.Body>
                            <Modal.Footer>
                                <Button auto flat color="error" onPress={closeHandler}>
                                    Close
                                </Button>
                                <Button auto type="submit">
                                    Enquire
                                </Button>
                            </Modal.Footer>
                        </form>
                    )}
            </Modal>
        </div>
    );
}
