import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import Draggable from 'react-draggable';
import FontSizeChanger from 'react-font-size-changer';
import FileUpload from './FileUpload'
import domtoimage from 'dom-to-image'

// https://www.npmjs.com/package/react-font-size-changer

const Display = ({ images }) => {

    const [newImage, setNewImage] = useState(0);
    const [topLine, setTopLine] = useState('');
    const [bottomLine, setBottomLine] = useState('');
    const [file, setFile] = useState(null)
    const imageToFile = useRef()

    
    let Draggable = require('react-draggable');
    let DraggableCore = Draggable.DraggableCore;
    

    const randomImage = () => {
        setNewImage(Math.floor(Math.random() * 100))
    }

    const handleInputTop = (e) => {
        setTopLine(e.target.value)
    }

    const handleInputBottom = (e) => {
        setBottomLine(e.target.value)
    }

    const downloadPng = () => {

        domtoimage.toJpeg(imageToFile.current, { quality: 0.95 }).then(function (dataUrl) {
            const link = document.createElement('a');
            link.download = 'awesome_meme.jpg';
            link.href = dataUrl;
            link.click();
            // Do something with the dataURL (data:image/jpeg;base64,i........)
        });
        // domtoimage.toBlob(imageToFile.current).then(function (blob) {
        //     window.saveAs(blob, 'awesome_meme.png');
        // });
    }


    useEffect(
        () => {
            randomImage()
            return URL.revokeObjectURL(file)
        }, [file]
    )

    console.log(file)

    return (
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
        


            <button onClick={randomImage} className="button">Click for New Meme </button>
            <FileUpload setFile={setFile} file={file} />
            <button onClick={downloadPng}>Download</button>
            <br />

            <p>



                <div ref={imageToFile} className="container">
                            <div id="target">
                                <Draggable> 
                                <p className="font top_text content">{topLine}</p>
                                </Draggable> 
                            </div>
                    {!file ? <img src={images[newImage].url} className="img_resize" /> :
                        <img src={URL.createObjectURL(file)} className="img_resize" />}
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