import Layout from '@/admin_components/layout'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { uploadImages } from '@/utils/firebase_image_upload'
function Add() {

    const places = useQuery(['places'], () => {
        return fetch('/api/place')
            .then(res => res.json())

    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.Hotel_Name.value);
        console.log(e.target.Hotel_Address.value);
        console.log(e.target.Hotel_Place.value);
        console.log(e.target.Hotel_Description.value);
        console.log(e.target.Hotel_Image.files);
        console.log(e.target.Hotel_a.checked);
        console.log(e.target.Hotel_b.checked);
        console.log(e.target.Hotel_c.checked);
        console.log(e.target.Hotel_Map.value);
        console.log(e.target.Hotel_Cancel_Day.value);
        console.log(e.target.Hotel_Cancel_Time.value);
        const resp = uploadImages(e.target.Hotel_Image.files, "test_multiple2")
        resp.then(res => {
            console.log(res.data);
        })
    }

    return (
        <Layout>
            <h1>Add New Hotel</h1>
            <form onSubmit={handleSubmit} >
                <input type="text" name='Hotel_Name' placeholder="Hotel Name" />
                <input type="text" name="Hotel_Address" placeholder="Hotel Address" />
                <select name="Hotel_Place" >
                    <option value="0">Select Place</option>
                    {
                        places.data?.data.map((place, index) => {
                            return (
                                <option key={index} value={place.id}>{place.data.title}</option>
                            )
                        })
                    }
                </select>
                <input type="text" name="Hotel_Description" placeholder="Hotel Description" />
                <input type="file" name="Hotel_Image" multiple accept="image/*" />
                {/* checkboxes a,b,c */}
                <input type="checkbox" name="Hotel_a" />a
                <input type="checkbox" name="Hotel_b" />b
                <input type="checkbox" name="Hotel_c" />c
                {/* map link */}
                <input type="text" name="Hotel_Map" placeholder="Map Link" />
                {/* cancellation policy end date and time */}
                <input type="date" name="Hotel_Cancel_Day" placeholder="Cancellation Policy End Date" />
                <input type="time" name="Hotel_Cancel_Time" placeholder="Cancellation Policy End Time" />

                <button type="submit" >Submit</button>

            </form>
        </Layout>
    )
}

export default Add