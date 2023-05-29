/* eslint-disable import/no-anonymous-default-export */
import { db, storage } from "@/utils/firebase"
import { collection, doc, onSnapshot, query, deleteDoc, updateDoc, orderBy, getDoc } from "firebase/firestore"
import { deleteObject, listAll, ref } from "firebase/storage";

const collectionName = "Activities";

export default async function (req, res) {
    // Get Activitys List API #route api/Activitys #method GET
    if (req.method === "GET") {

        let id = req.query.id;
        if (id === undefined) {
            try {
                let ActivityQuery = query(collection(db, collectionName), orderBy('createdAt'));
                onSnapshot(ActivityQuery, (querySnapshot) => {
                    let result = querySnapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    }));
                    res.status(200).json({ "status": 200, "message": "Success", "data": result });
                })
            } catch (error) {
                res.status(500).json({ "status": 500, "message": "Internal Server Error", "error": error });
            }
        } else {
            try {
                let docRef = doc(db, "Activitys", id);
                const docSnap = await getDoc(docRef);
                res.status(200).json({ "status": 200, "message": "Success", "data": docSnap.data() });
            } catch (error) {
                res.status(500).json({ "status": 500, "message": "Internal Server Error", "error": error });
            }
        }
    }

    if (req.method === "GET" && req.query.id) {
        try {
            console.log(req.query.id);
            // let ActivityQuery = query(collection(db, collectionName), orderBy('createdAt'));
            // onSnapshot(ActivityQuery, (querySnapshot) => {
            //     let result = querySnapshot.docs.map(doc => ({
            //         id: doc.id,
            //         data: doc.data()
            //     }));
            //     res.status(200).json({ "status": 200, "message": "Success", "data": result });
            // })
        } catch (error) {
            res.status(500).json({ "status": 500, "message": "Internal Server Error", "error": error });
        }
    }

    // Update Activity API #route api/Activitys #method PUT
    if (req.method === "PUT") {
        const ActivityRef = doc(db, collectionName, req.query.id)
        try {
            await updateDoc(ActivityRef, req.body)
            res.status(200).json({ "status": 200, "message": "Activity Updated Successfully", "data": "" });
        } catch (error) {
            res.status(500).json({ "status": 500, "message": "Internal Server Error", "error": error });
        }
    }
    // Delete Activity API #route api/Activity #method DELETE
    if (req.method === "DELETE") {
        try {

            const listResult = await listAll(ref(storage, `${collectionName}/${req.query.id}`));
            listResult.items.forEach(async (imageRef) => {
                await deleteObject(imageRef);
            });

            await deleteDoc(doc(db, collectionName, req.query.id))


            res.status(200).json({ "status": 200, "message": "Activity Deleted Successfully", "data": "" });
        } catch (error) {

            console.log(error);
            res.status(500).json({ "status": 500, "message": "Internal Server Error", "error": error });
        }



    }
}