import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import FontSizeChanger from 'react-font-size-changer';
import FileUpload from './FileUpload'
import domtoimage from 'dom-to-image'

// https://www.npmjs.com/package/react-font-size-changer

const Display = ({ images }) => {

    const [newImage, setNewImage] = useState(0);
    const [topLine, setTopLine] = useState('');
    const [middleLine, setMiddleLine] = useState('');
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

    const handleInputMiddle = (e) => {
        setMiddleLine(e.target.value)
    }

    const handleInputBottom = (e) => {
        setBottomLine(e.target.value)
    }

    const downloadPng = () => {

        domtoimage.toPng(imageToFile.current, { quality: 0.95 }).then(function (dataUrl) {
            const link = document.createElement('a');
            link.download = 'awesome_meme.png';
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

            <div>
                <div className="inline_buttons">
                    <input type="text" onChange={handleInputTop} placeholder="Enter a Top Line" />
                    <p>
                        <FontSizeChanger
                            targets={['#target .content']}
                            onChange={(element, newValue, oldValue) => {
                                console.log(element, newValue, oldValue);
                            }}
                            options={{ stepSize: 2, range: 20 }}
                            customButtons={{
                                up: <span style={{ 'fontSize': '30px' }}>+</span>,
                                down: <span style={{ 'fontSize': '30px' }}>-</span>,
                                style: {
                                    backgroundColor: 'rgb(0, 195, 255)',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    border: 'none',
                                    borderRadius: '5px',
                                    WebkitBoxSizing: 'border-box',
                                    WebkitBorderRadius: '5px',
                                    width: '60px'
                                },
                                buttonsMargin: 5
                            }} />
                    </p>
                </div>
                <div className="inline_buttons">
                    <input type="text" onChange={handleInputMiddle} placeholder="Enter a Middle Line" />
                    <p>
                        <FontSizeChanger
                            targets={['#targetmiddle .contentmiddle']}
                            onChange={(element, newValue, oldValue) => {
                                console.log(element, newValue, oldValue);
                            }}
                            options={{ stepSize: 2, range: 20 }}
                            customButtons={{
                                up: <span style={{ 'fontSize': '30px' }}>+</span>,
                                down: <span style={{ 'fontSize': '30px' }}>-</span>,
                                style: {
                                    backgroundColor: 'rgb(0, 195, 255)',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    border: 'none',
                                    borderRadius: '5px',
                                    WebkitBoxSizing: 'border-box',
                                    WebkitBorderRadius: '5px',
                                    width: '60px'
                                },
                                buttonsMargin: 5
                            }} />
                    </p>

                </div>
                <div className="inline_buttons">
                    <input type="text" onChange={handleInputBottom} placeholder="Enter a Bottom Line" />
                    <p>
                        <FontSizeChanger
                            targets={['#targetbottom .contentbottom']}
                            onChange={(element, newValue, oldValue) => {
                                console.log(element, newValue, oldValue);
                            }}
                            options={{ stepSize: 2, range: 20 }}
                            customButtons={{
                                up: <span style={{ 'fontSize': '30px' }}>+</span>,
                                down: <span style={{ 'fontSize': '30px' }}>-</span>,
                                style: {
                                    backgroundColor: 'rgb(0, 195, 255)',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    border: 'none',
                                    borderRadius: '5px',
                                    WebkitBoxSizing: 'border-box',
                                    WebkitBorderRadius: '5px',
                                    width: '60px'
                                },
                                buttonsMargin: 5
                            }} />
                    </p>
                </div>
            </div>

            <div className="less_space">
                <div className="inline_buttons">
                    <button onClick={randomImage} className="button">Click for New Meme </button>

                </div>
                <div className="inline_buttons">
                    <FileUpload setFile={setFile} file={file} />
                </div>

                <div className="inline_buttons">
                    <button onClick={downloadPng}>Download</button>
                </div>
            </div>

            <div ref={imageToFile} className="container">
                <div id="target">
                    <Draggable>
                        <p className="font top_text content">{topLine}</p>
                    </Draggable>
                </div>

                {!file ? <img src={images[newImage].url} className="img_resize" /> :
                    <img src={URL.createObjectURL(file)} className="img_resize" />}
                <div id="targetmiddle">
                    <Draggable>
                        <p className="font middle_text contentmiddle">{middleLine}</p>
                    </Draggable>
                </div>

                <div id="targetbottom">

                    <Draggable>
                        <p className="font bottom_text contentbottom">{bottomLine}</p>
                    </Draggable>
                </div>
            </div>



        </>
    )
}

export default Display;