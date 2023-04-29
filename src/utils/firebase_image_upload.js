import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from './firebase'

export async function uploadImage(image, path) {

    try {
        // create a storage reference
        const storageRef = ref(storage, `${path}/${image.name + new Date().getTime()}`);

        // upload the file
        const uploadTask = await uploadBytesResumable(storageRef, image);

        // get the download url
        const downloadURL = await getDownloadURL(uploadTask.ref);

        // detele using url
        // const imageRef = ref(storage, downloadURL);
        // await deleteObject(imageRef);
        return { message: "success", data: downloadURL }
    }
    catch (error) {
        console.log("Error: ", error);
        return { message: "error" }
    }
}

export async function uploadImages(images, path) {

    try {


        var downloadURL = [];
        for (const key in images) {
            if (key == "item" || key == "length") continue;
            const image = images[key];
            const imageRef = ref(storage, `${path}/${image.name + new Date().getTime()}`);
            const uploadTask = await uploadBytesResumable(imageRef, image);
            // get the download url
            const url = await getDownloadURL(uploadTask.ref);
            downloadURL.push(url);
        }


        return { message: "success", data: downloadURL }
    }
    catch (error) {
        console.log("Error: ", error);
        return { message: "error" }
    }
}


export async function deleteImage(path) {
    try {
        // detele using url
        const imageRef = ref(storage, path);
        await deleteObject(imageRef);
        return { message: "success" }
    }
    catch (error) {
        console.log("Error: ", error);
        return { message: "error" }
    }
}