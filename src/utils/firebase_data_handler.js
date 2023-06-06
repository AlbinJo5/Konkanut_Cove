import { collection, deleteDoc, doc, getDoc, getDocs, increment, setDoc, } from "firebase/firestore";
import { db } from "./firebase";
export async function uploadData(data, path, id = null) {
    try {
        // doc ref
        if (id) {
            // Package_Enquiries Hotel_Enquiries
            if (path === "Package_Enquiries" || path === "Hotel_Enquiries") {
                const counterRef = doc(db, "Counters", path);
                const counterDoc = await getDoc(counterRef);
                const count = counterDoc.exists() ? counterDoc.data().count : 0;
                const referenceId = path === "Package_Enquiries" ? `PACK#${count + 1}` : `HOT#${count + 1}`;
                await setDoc(
                    doc(db, path, id),
                    {
                        ...data,
                        referenceId: referenceId
                    },
                    { merge: true }
                );
                await set(counterRef, {
                    count: count + 1
                }, {
                    merge: true
                });
            } else {
                await setDoc(doc(db, path, id), data, { merge: true });
            }
            const docSnap = await getDoc(doc(db, path, id));
            if (docSnap.exists()) {
                return {
                    message: "success",
                    data: {
                        id: docSnap.id,
                        ...docSnap.data()
                    }
                };
            } else {
                return {
                    message: "error",
                    data: "No such document!"
                };
            }
        } else {
            const docRef = doc(collection(db, path));
            // add data to docRef
            if (path === "Package_Enquiries" || path === "Hotel_Enquiries") {
                const counterRef = doc(db, "Counters", path);
                const counterDoc = await getDoc(counterRef);
                const count = counterDoc.exists() ? counterDoc.data().count : 0;
                const referenceId = path === "Package_Enquiries" ? `PACK#${count + 1}` : `HOT#${count + 1}`;
                await setDoc(
                    docRef,
                    {
                        ...data,
                        referenceId: referenceId
                    },
                    { merge: true }
                );
                await setDoc(counterRef, {
                    count: count + 1
                }, {
                    merge: true
                });
            } else {
                await setDoc(docRef, data, { merge: true });
            }
            // get the document
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return {
                    message: "success",
                    data: {
                        id: docSnap.id,
                        ...docSnap.data()
                    }
                };
            } else {
                return {
                    message: "error",
                    data: "No such document!"
                };
            }
        }
    } catch (err) {
        console.log(err);
        return {
            message: "error",
            data: err
        };
    }
}



export async function updateData(data, path) {
    try {
        console.log(path);
        const docRef = doc(db, path);
        await setDoc(docRef, data);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return {
                message: "success",
                data: {
                    id: docSnap.id,
                    ...docSnap.data()
                }
            }
        } else {
            return {
                message: "error",
                data: "No such document!"
            };
        }
    }
    catch (err) {
        console.log(err);
        return {
            message: "error",
            data: err
        }
    }
}

export async function getAllData(path) {
    try {
        const querySnapshot = await getDocs(collection(db, path));
        let data = [];
        querySnapshot.forEach((doc) => {
            data.push({
                id: doc.id,
                ...doc.data()
            })
        });
        return {
            message: "success",
            data
        }
    }
    catch (err) {
        console.log(err);
        return {
            message: "error",
            data: err
        }
    }
}

export async function getDataById(path) {
    try {
        const docRef = doc(db, path);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return {
                message: "success",
                data: {
                    id: docSnap.id,
                    ...docSnap.data()
                }
            }
        } else {
            return {
                message: "error",
                data: "No such document!"
            };
        }
    }
    catch (err) {
        console.log(err);
        return {
            message: "error",
            data: err
        }
    }
}

export async function getAllSubcollections(collectionName, subCollectionNames) {
    try {
        const collectionData = await getAllData(collectionName);
        if (collectionData.message === "success") {
            let data = collectionData.data;
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < subCollectionNames.length; j++) {
                    const subCollectionData = await getAllData(`${collectionName}/${data[i].id}/${subCollectionNames[j]}`);
                    if (subCollectionData.message === "success") {
                        data[i][subCollectionNames[j]] = subCollectionData.data;
                    }
                }
            }
            return {
                message: "success",
                data
            }
        }



    } catch (err) {
        console.log(err);
        return {
            message: "error",
            data: err,
        };
    }
}

export async function getSubcollectionById(collectionName, id, subCollectionNames) {
    try {
        const collectionData = await getDataById(`${collectionName}/${id}`);
        if (collectionData.message === "success") {
            let data = collectionData.data;
            for (let j = 0; j < subCollectionNames.length; j++) {
                const subCollectionData = await getAllData(`${collectionName}/${id}/${subCollectionNames[j]}`);
                if (subCollectionData.message === "success") {
                    data[subCollectionNames[j]] = subCollectionData.data;
                }
            }
            return {
                message: "success",
                data
            }
        }
    } catch (err) {
        console.log(err);
        return {
            message: "error",
            data: err,
        };
    }
}


export async function deleteData(path) {
    try {
        await deleteDoc(doc(db, path));
        return {
            message: "success",
            data: "Document successfully deleted!"
        };
    } catch (err) {
        console.log(err);
        return {
            message: "error",
            data: err,
        };
    }
}


