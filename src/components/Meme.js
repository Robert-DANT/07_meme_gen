import React, { useState, useEffect } from 'react';
import Display from './Display';
import axios from 'axios';



// Props will be passed down to Display

const Meme = () => {

    // Use States
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true)


    // API Call
    const imgCall = async () => {
        await axios.get('https://api.imgflip.com/get_memes')
        .then(response => {
            setImages(response.data.data.memes)
            setLoading(false)
        })
        .catch(error => console.log(error.message))
    }

    useEffect(() => {
        imgCall();
    },[])

    console.log(images)
    
    return(
        <div>
            {loading ? <h1>Loading</h1> : <Display images={images} />}
              
        </div>
    )
}

export default Meme;