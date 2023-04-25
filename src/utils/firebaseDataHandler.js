import { collection, doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject, listAll } from "firebase/storage";
import { db, storage } from "./firebase";

export async function addData(data, images, collectionName) {
    console.log("addData", data, images, collectionName);
    // create a docRef using collection name
    const docRef = doc(collection(db, collectionName));
    const storageRef = ref(storage, `${collectionName}/${docRef.id}`);
    try {

        // if images are present
        if (images) {
            console.log("images", images.length);
            // create a storageRef using docRefID using collection name
            const output = {}
            // upload images to storageRef
            // images is an object with keys as 0,1,2 and value as image file
            for (const key in images) {
                if (key == "item" || key == "length") continue;
                const image = images[key];
                const imageRef = ref(storageRef, key);
                const uploadTask = await uploadBytes(imageRef, image);
                // put the download url in output array
                const downloadURL = await getDownloadURL(uploadTask.ref);
                output[key] = downloadURL;
            }


            // add images to data
            data.images = output;
            console.log(output);
        }

        // add data to docRef
        let place = await setDoc(docRef, data);
        return { "status": 200, "message": "Place Created Successfully", "data": place }
        // get the uploaded data from firestore
        // const uploadedData = await docRef.get();
        // return the uploaded data
        // return uploadedData.data();

    } catch (error) {
        console.log(error);

        // check if images are uploaded to storage
        if (images) {
            // delete the images from storage
            await deleteObject(storageRef);
        }
        return error;
    }
}


export async function updateData(data, images, collectionName, docId) {

    try {
        console.log("images", images);
        console.log("data", data);
        console.log("collectionName", collectionName);
        console.log("docId", docId);
        // create a docRef using collection name and docId
        const docRef = doc(db, collectionName, docId);

        // if images are present
        if (images.length) {
            console.log("images", images.length);
            // delete the previous images from storage
            // const listResult = await listAll(ref(storage, `${collectionName}/${req.query.id}`));
            // listResult.items.forEach(async (imageRef) => {
            //     await deleteObject(imageRef);
            // });

            const listPrevImages = await listAll(ref(storage, `${collectionName}/${docId}`));
            listPrevImages.items.forEach(async (imageRef) => {
                await deleteObject(imageRef);
            });

            // create a storageRef using docRefID using collection name
            const storageRef = ref(storage, `${collectionName}/${docId}`);

            const output = {}
            // upload images to storageRef
            // images is an object with keys as 0,1,2 and value as image file
            for (const key in images) {
                if (key == "item" || key == "length") continue;
                const image = images[key];
                const imageRef = ref(storageRef, key);
                const uploadTask = await uploadBytes(imageRef, image);
                // put the download url in output array
                const downloadURL = await getDownloadURL(uploadTask.ref);
                output[key] = downloadURL;
            }

            // add images to data
            data.images = output;
        }

        // add data to docRef
        let product = await setDoc(docRef, data);
        // get the uploaded data from firestore
        return { "status": 200, "message": "Product Created Successfully", "data": product }

    } catch (error) {
        console.log(error);

        // check if images are uploaded to storage
        if (images) {
            // delete the images from storage
        }
        return error;
    }
}