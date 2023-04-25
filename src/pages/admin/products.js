// import Layout from "@/admin_components/layout";
// import { DeleteIcon, EyeIcon, IconButton } from "@/components/admin/icons";
// import { Table, Row, Col, Tooltip, User } from "@nextui-org/react";

// import { useEffect, useState } from "react";
// import styles from "@/styles/admin_styles/products.module.scss"
// import ProductAdd from "@/components/admin/model/products/productAdd";
// import ProductDelete from "@/components/admin/model/products/productDelete";
// import ProductEdit from "@/components/admin/model/products/productEdit";
// import ProductView from "@/components/admin/model/products/productView";

// const ROUTE = '/api/product';

// export default function Products() {
//     const [products, setProducts] = useState([]);
//     const [count, setCount] = useState(0);
//     const [deleteCount, setDeleteCount] = useState(0);

//     // Get Product List API
//     const getProducts = async () => {
//         fetch(ROUTE).then(res => res.json()).then(res => {
//             if (res.status === 200) {
//                 setProducts(res.data);
//                 console.log(res.data);
//             }
//         }).catch(err => {
//             console.log(err);
//         })
//     }

//     useEffect(() => {
//         getProducts();
//     }, [count, deleteCount])
//     return (
//         <Layout>
//             <div className={styles.products} >
//                 <div className={styles.head} >
//                     <h3>Products</h3>
//                     <ProductAdd count={() => setCount(count + 1)} />
//                 </div>
//                 {/* <input type="file" multiple onChange={e => setImagePath(e.target.files)} />
//             <button onClick={() => createProduct(imagePath)}>Add</button> */}
//                 {/* <Addmodel /> */}
//                 <Table
//                     bordered
//                     shadow={false}
//                     color={"error"}
//                     selectionBehavior="toggle"
//                     aria-label="Example static bordered collection table"
//                     allowDuplicateSelectionEvents="false"
//                     css={{
//                         height: "auto",
//                         minWidth: "100%",
//                     }}
//                 >
//                     <Table.Header>
//                         <Table.Column>Products</Table.Column>
//                         <Table.Column>Stock</Table.Column>
//                         <Table.Column>Status</Table.Column>
//                         <Table.Column>Action</Table.Column>
//                     </Table.Header>
//                     <Table.Body>
//                         {
//                             products.length > 0 && products.map(({ id, data }, i) => (
//                                 <Table.Row key={i + 1}>
//                                     <Table.Cell>  <User squared src={data.images[0]} name={data.name} css={{ p: 0 }}>
//                                         {data.desc.length > 70 ? data.desc.substring(1, 70) + "..." : data.desc}
//                                     </User></Table.Cell>
//                                     <Table.Cell>{data.stock}</Table.Cell>
//                                     <Table.Cell>{data.isAvailable ? "Stock In" : "Stock Out"}</Table.Cell>
//                                     <Table.Cell>  <Row justify="center" align="center">
//                                         <Col css={{ d: "flex" }}>
//                                             <ProductView id={id} data={data} count={() => setCount(count + 1)} />
//                                         </Col>
//                                         <Col css={{ d: "flex" }}>
//                                             <ProductEdit id={id} data={data} count={() => setCount(count + 1)} />
//                                         </Col>
//                                         <Col css={{ d: "flex" }}>
//                                             <ProductDelete id={id} deleteCount={() => setDeleteCount(count + 1)} />
//                                         </Col>
//                                     </Row></Table.Cell>
//                                 </Table.Row>
//                             ))
//                         }

//                     </Table.Body>
//                     <Table.Pagination
//                         shadow
//                         noMargin
//                         align="center"
//                         rowsPerPage={5}
//                         onPageChange={(page) => console.log({ page })}
//                     />
//                 </Table>
//             </div>
//         </Layout>
//     );
// }



