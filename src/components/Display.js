import React, { useState, useEffect } from 'react';
import '../App.css';
import Draggable from 'react-draggable';
import FontSizeChanger from 'react-font-size-changer';
// https://www.npmjs.com/package/react-font-size-changer

const Display = ({images}) => {

    let Draggable = require('react-draggable');
    let DraggableCore = Draggable.DraggableCore;
    
    const [newImage, setNewImage] = useState(0);
    const [topLine, setTopLine] = useState('');
    const [bottomLine, setBottomLine] = useState(''); 

    // Image Uploading Input Start
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
  
    const onChangePicture = e => {
      if (e.target.files[0]) {
        console.log("picture: ", e.target.files);
        setPicture(e.target.files[0]);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setImgData(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
      } 
    };
    // Image Uploading Input End

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

       
        <p>               
                        <FontSizeChanger
                            targets={['#target .content']}
                            onChange={(element, newValue, oldValue) => {
                                console.log(element, newValue, oldValue);
                            }}
                            options={{
                                stepSize: 2,
                                range: 20
                            }}
                            customButtons={{
                                up: <span style={{'fontSize': '10px'}}>+</span>,
                                down: <span style={{'fontSize': '10px'}}>-</span>,
                                style: {
                                backgroundColor: 'grey',
                                color: 'white',
                                borderRadius: '5px',
                                WebkitBoxSizing: 'border-box',
                                WebkitBorderRadius: '5px',
                                width: '60px'
                                },
                                buttonsMargin: 5
                            }}  />
        <input type="text" onChange={handleInputTop} placeholder="Enter your Top Line" />
        <input type="text" onChange={handleInputBottom} placeholder="Enter your Bottom Line" />
        <FontSizeChanger
                            targets={['#targetbottom .contentbottom']}
                            onChange={(element, newValue, oldValue) => {
                                console.log(element, newValue, oldValue);
                            }}
                            options={{
                                stepSize: 2,
                                range: 20
                            }}
                            customButtons={{
                                up: <span style={{'fontSize': '20px'}}>+</span>,
                                down: <span style={{'fontSize': '20px'}}>-</span>,
                                style: {
                                backgroundColor: 'grey',
                                color: 'white',
                                borderRadius: '5px',
                                WebkitBoxSizing: 'border-box',
                                WebkitBorderRadius: '5px',
                                width: '60px'
                                },
                                buttonsMargin: 5
                            }}  />
        </p>
        
        <button onClick = {randomImage} className="button">Click for New Meme </button> 
        <br />
            
        <p>
   
        {/* <div class="overlay-image">
             <img src={images[newImage].url} className="img_resize image"/>   
            
            <div class="text">
            <p className="font">{topLine}</p>
            <p className="font">{bottomLine}</p>  
            </div>
        </div> */}

       {/* Image Uploading Input Start */}
                <div className="register_wrapper">
                <div className="register_player_column_layout_one">


                        <div className="register_profile_image">
                            <input id="profilePic" type="file" onChange={onChangePicture} />
                        </div>
                        <div className="previewProfilePic">
                            <img className="playerProfilePic_home_tile" src={imgData} />
                        </div>

                </div>
                </div> 
                
       {/* Image Uploading Input End */}
     <div className="container">

                <div id="target">
                    <Draggable> 
                    <p className="font top_text content">{topLine}</p>
                    </Draggable>
                </div>

            <img src={images[newImage].url} className="img_resize" />          


            <div id="targetbottom">
                    <Draggable> 
                    <p className="font bottom_text contentbottom">{bottomLine}</p>
                    </Draggable>
                </div>
        </div> 

        </p>
        
        </>
    )
}

export default Display;