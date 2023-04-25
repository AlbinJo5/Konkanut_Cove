// import Layout from "@/admin_components/layout";
// import { DeleteIcon, EditIcon, EyeIcon, IconButton } from "@/components/admin/icons";
// import ContactDelete from "@/components/admin/model/contact/contactDelete";
// import ContactView from "@/components/admin/model/contact/ContactView";
// import DeleteModal from "@/components/admin/model/deletemodal";
// import EditModal from "@/components/admin/model/EditModal";
// import { addData } from "@/utils/firebaseDataHandler";
// import { Table, Row, Col, Tooltip, User } from "@nextui-org/react";
// import { useEffect, useState } from "react";

// const ROUTE = '/api/contact';

// export default function Contact() {
//     const [contact, setContact] = useState([]);
//     const [count, setCount] = useState(0)

//     const createContact = async () => {
//         let data = {
//             name: "Contact",
//             surname: Date.now(),
//             message: "Test",
//             email_address: "test@gmail.com",
//             company_name: "TEST"
//         }

//         fetch(ROUTE, {
//             method: "POST",
//             body: JSON.stringify(data),
//             headers: { "Content-Type": "application/json", "accept": "application/json" }
//         }).then(res => res.json()).then(res => {
//             if (res.status === 200) getContactList()
//         })
//     }

//     const getContactList = () => {
//         fetch(ROUTE).then(res => res.json()).then(res => {
//             if (res.status === 200) {
//                 setContact(res.data);
//             }
//         }).catch(err => {
//             console.log(err);
//         })
//     }

//     const updateContact = async (id, data) => {
//         data.message = Date.now();
//         fetch(ROUTE + `?id=${id}`, { method: 'PUT', body: JSON.stringify(data), headers: { "Content-Type": "application/json", "accept": "application/json" } }).then(res => res.json()).then(res => {
//             if (res.status === 200) getContactList()
//         })
//     }

//     const deleteContact = (id) => {
//         fetch(ROUTE + `?id=${id}`, { method: "DELETE" }).then(res => res.json()).then(res => {
//             if (res.status === 200) getContactList()
//         })
//     }

//     useEffect(() => {
//         getContactList();
//     }, [count])
//     return (
//         <Layout>
//             <div className="my-5">
//             <h3>Contact</h3>
//             <Table
//                 bordered
//                 shadow={false}
//                 color={"error"}
//                 selectionBehavior="toggle"
//                 aria-label="Example static bordered collection table"
//                 allowDuplicateSelectionEvents="false"
//                 css={{
//                     height: "auto",
//                     minWidth: "100%",
//                 }}
//             >
//                 <Table.Header>
//                     <Table.Column>   Name  </Table.Column>
//                     <Table.Column>Message</Table.Column>
//                     <Table.Column>Email</Table.Column>
//                     <Table.Column>Company</Table.Column>
//                     <Table.Column>Action</Table.Column>
//                 </Table.Header>
//                 <Table.Body>
//                     {
//                         contact.length > 0 && contact.map(({ id, data }, i) => (
//                             <Table.Row key={i + 1}>
//                                 <Table.Cell>{data.name + ' ' + data.surname}</Table.Cell>
//                                 <Table.Cell>{data.message}</Table.Cell>
//                                 <Table.Cell>{data.email_address}</Table.Cell>
//                                 <Table.Cell>{data.company_name}</Table.Cell>
//                                 <Table.Cell>  <Row justify="center" align="center">
//                                 <Col css={{ d: "flex" }}>
//                                         <ContactView data={data} id={id} count={() => setCount(count + 1)} />
//                                     </Col>
//                                     <Col css={{ d: "flex" }}>
//                                         <ContactDelete id={id} count={() => setCount(count + 1)} />
//                                     </Col>
//                                 </Row></Table.Cell>
//                             </Table.Row>
//                         ))
//                     }

//                 </Table.Body>
//                 <Table.Pagination
//                     shadow
//                     noMargin
//                     align="center"
//                     rowsPerPage={5}
//                     onPageChange={(page) => console.log({ page })}
//                 />
//             </Table>
//             </div>
//         </Layout>
//     );
// }



