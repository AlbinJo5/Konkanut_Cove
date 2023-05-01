import { getAllData } from "@/utils/firebase_data_handler";

export default async function handler(req,res){

    try {

        const hotelsData = getAllData("Hotels")
        
    } catch (error) {
        res.status(500).json({ "status": 500, "message": "Firebase Error", "error": error });
    }
}