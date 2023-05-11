import Layout from '@/admin_components/layout'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { uploadImages } from '@/utils/firebase_image_upload'
import { uploadData } from '@/utils/firebase_data_handler'
import { queryClient } from '@/pages/_app'
function Add() {

    const places = useQuery(['places'], () => {
        return fetch('/api/place')
            .then(res => res.json())
    },
        {
            staleTime: 10000 * 60
        }
    )

    const handleData = (data) => {
        const resp = uploadData(data, "Hotels")
        resp.then(res => {
            console.log(res);
            if (res.message === "success") {
                // update or add the response to the cache
                queryClient.setQueryData(['hotels'], (old) => {
                    const oldData = old?.data
                    if (oldData) {
                        return { ...old, data: [...oldData, res.data] }
                    }
                    else {
                        return { ...old, data: [res.data] }
                    }
                })

                alert("Hotel Added Successfully")
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.Hotel_Name.value,
            address: e.target.Hotel_Address.value,
            place: e.target.Hotel_Place.value,
            description: e.target.Hotel_Description.value,
            a: e.target.Hotel_a.checked,
            b: e.target.Hotel_b.checked,
            c: e.target.Hotel_c.checked,
            map: e.target.Hotel_Map.value,
            cancel_time: e.target.Hotel_Cancel_Time.value
        }
        const resp = uploadImages(e.target.Hotel_Image.files, "Hotels")
        resp.then(res => {
            console.log(res.data);
            data.images = res.data
            handleData(data)
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
                <textarea type="text" name="Hotel_Description" placeholder="Hotel Description" />
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