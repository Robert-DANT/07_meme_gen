import React, { useState, useEffect } from 'react';
import '../App.css';
import Draggable from 'react-draggable';

const Display = ({images}) => {
    
    const [newImage, setNewImage] = useState(0);
    const [topLine, setTopLine] = useState('');
    const [bottomLine, setBottomLine] = useState(''); 
    
    const randomImage = (e) => {
        setNewImage(Math.floor(Math.random() * 100))
    }
    
    const handleInputTop = (e) => {
         setTopLine(e.target.value)
     }

    const handleInputBottom = (e) => {
        setBottomLine(e.target.value)
    }


    useEffect(
        () => randomImage(), []
    )
    
    return(
        <>

{/*         <Draggable > </Draggable> */}
        <p>
        <input type="text" onChange={handleInputTop} placeholder="Enter your Top Line" />
        <input type="text" onChange={handleInputBottom} placeholder="Enter your Bottom Line" />
        </p>
        
        <button onClick = {randomImage}>Click for New Meme </button> 
        <br />

        <p>
   
        {/* <div class="overlay-image">
             <img src={images[newImage].url} className="img_resize image"/>   
            
            <div class="text">
            <p className="font">{topLine}</p>
            <p className="font">{bottomLine}</p>  
            </div>
        </div> */}
   
     <div className="container">
            <p className="font top_text">{topLine}</p>
            <img src={images[newImage].url} className="img_resize" />          
            <p className="font bottom_text">{bottomLine}</p>  
        </div> 

        </p>
        
        </>
    )
}

export default Display;