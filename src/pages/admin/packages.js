import Icons from '@/admin_components/icons';
import Layout from '@/admin_components/layout';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '@/styles/admin_styles/packages.module.scss';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import AddBoxIcon from '@mui/icons-material/AddBox';


function Packages() {
    const [displayImages, setDisplayImages] = useState([]);
    const [general, setGeneral] = useState({
        title: '',
        description: '',
        price: '',
        days: '',
        nights: '',
        images: []
    });


    const [itineraries, setItineraries] = useState([
        {
            day: 1,
            title: 'Title',
            subTitle: 'Sub Title',
            icons: [],
            points: []
        }
    ]);

    const handleAddItinerary = () => {
        setItineraries(prevItineraries => [
            ...prevItineraries,
            {
                day: prevItineraries[prevItineraries.length - 1].day + 1,
                title: 'Title',
                subTitle: 'Sub Title',
                icons: [],
                points: []
            }
        ]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGeneral(prevGeneral => ({
            ...prevGeneral,
            [name]: value
        }));
    };

    const handleItineraryChange = (e, index) => {
        const { name, value } = e.target;
        setItineraries(prevItineraries => {
            const newItineraries = [...prevItineraries];
            newItineraries[index] = {
                ...newItineraries[index],
                [name]: value
            };
            return newItineraries;
        });
    };

    const handleAddIcon = (index) => {
        setItineraries(prevItineraries => {
            const newItineraries = [...prevItineraries];
            newItineraries[index] = {
                ...newItineraries[index],
                icons: [...newItineraries[index].icons, { id: "", name: '' }]
            };
            return newItineraries;
        });
    };

    const handleIconChange = (e, itineraryIndex, iconIndex) => {
        const { name, value } = e.target;
        setItineraries(prevItineraries => {
            const newItineraries = [...prevItineraries];
            newItineraries[itineraryIndex].icons[iconIndex] = {
                ...newItineraries[itineraryIndex].icons[iconIndex],
                [name]: value
            };
            return newItineraries;
        });
    };

    const handleAddPoint = (index) => {
        setItineraries(prevItineraries => {
            const newItineraries = [...prevItineraries];
            newItineraries[index] = {
                ...newItineraries[index],
                points: [...newItineraries[index].points, '']
            };
            return newItineraries;
        });
    };

    const handlePointChange = (e, itineraryIndex, pointIndex) => {
        const { value } = e.target;
        setItineraries(prevItineraries => {
            const newItineraries = [...prevItineraries];
            newItineraries[itineraryIndex].points[pointIndex] = value;
            return newItineraries;
        });
    };

    const handleImages = (e) => {
        const { files } = e.target;
        //  urls into displayImages and files into general.images
        const urls = [];
        for (let i = 0; i < files.length; i++) {
            urls.push(URL.createObjectURL(files[i]));
        }
        setDisplayImages(urls);
        setGeneral(prevGeneral => ({
            ...prevGeneral,
            images: files
        }));
    };



    return (
        <Layout>
            <div className={styles.packages} >

                {/* General Details */}
                <div className={styles.generalDetails} >
                    <h2>GENERAL </h2>
                    <input type="text" placeholder='Title' name="title" value={general.title} onChange={handleInputChange} />
                    <input type="text" placeholder='Price' name="price" value={general.price} onChange={handleInputChange} />
                    <input type="number" placeholder='Days' name="days" value={general.days} onChange={handleInputChange} />
                    <input type="number" placeholder='Nights' name="nights" value={general.nights} onChange={handleInputChange} />
                    <textarea type="text" placeholder='Description' name="description" value={general.description} onChange={handleInputChange} />

                    {/* Add Images */}
                    {/* accept only images */}
                    <input type="file" multiple accept="image/*" onChange={handleImages} />
                    {/* Display Images */}
                    <div className={styles.imagesContainer} >

                        {displayImages.map((image, index) => (
                            <div className={styles.images} key={index}>
                                {/* Display Images */}
                                <Image src={image} alt={`Image ${index}`} width={1000} height={1000} />
                                {/* Remove Images */}
                                <button>
                                    <DeleteForeverRoundedIcon />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Itinerary Details */}
                <div className={styles.itineraries} >
                    <div className={styles.head} >
                        <h2>ITENERARIES </h2>
                        {/* Add Itinerary */}
                        <button onClick={handleAddItinerary}>
                            Add Itinerary
                        </button>
                    </div>
                    <div className={styles.content} >

                        {itineraries.map((itinerary, index) => (
                            <div className={styles.eachContent} key={index}>
                                <div className={styles.itineraryhead} >

                                    <h3>Day {itinerary.day}</h3>
                                    {/* Remove Itinerary */}
                                    <button>
                                        <DeleteForeverRoundedIcon />
                                    </button>
                                </div>
                                <input type="text" name="title" value={itinerary.title} onChange={(e) => handleItineraryChange(e, index)} />
                                <input type="text" name="subTitle" value={itinerary.subTitle} onChange={(e) => handleItineraryChange(e, index)} />
                                {/* Add Icons */}
                                <div className={styles.icons} >
                                    <div className={styles.iconHead} >
                                        <h4>Icons</h4>
                                        <button onClick={() => handleAddIcon(index)}>
                                            <AddBoxIcon />
                                        </button>
                                    </div>
                                    <div className={styles.iconContent} >
                                        {itinerary.icons.map((icon, iconIndex) => (
                                            <div className={styles.eachIcon} key={iconIndex}>

                                                <select name="id" onChange={(e) => handleIconChange(e, index, iconIndex)}>
                                                    <option value="1">Airplane

                                                    </option>
                                                </select>
                                                {/* Remove Icon */}
                                                <button>
                                                    <DeleteForeverRoundedIcon />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Add Points */}
                                <div className={styles.points} >
                                    <div className={styles.pointHead} >
                                        <h4>Details</h4>
                                        <button onClick={() => handleAddPoint(index)}>
                                            <AddBoxIcon />
                                        </button>
                                    </div>
                                    <div className={styles.pointContent} >
                                        {itinerary.points.map((point, pointIndex) => (
                                            <div className={styles.eachPoint} key={pointIndex}>
                                                <textarea placeholder='Details' value={point} onChange={(e) => handlePointChange(e, index, pointIndex)} />
                                                {/* Remove Point */}
                                                <button>
                                                    <DeleteForeverRoundedIcon />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </Layout >
    );

}

export default Packages;