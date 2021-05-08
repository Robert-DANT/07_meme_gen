import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import FileUpload from './FileUpload'
import domtoimage from 'dom-to-image'

const Display = ({ images }) => {

    const [newImage, setNewImage] = useState(0);
    const [topLine, setTopLine] = useState('');
    const [bottomLine, setBottomLine] = useState('');
    const [file, setFile] = useState(null)
    const imageToFile = useRef()

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
            link.download = 'awesome_meme.jpeg';
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
                <input type="text" onChange={handleInputTop} placeholder="Enter your Top Line" />
                <input type="text" onChange={handleInputBottom} placeholder="Enter your Bottom Line" />
            </p>

            <button onClick={randomImage}>Click for New Meme </button>
            <button onClick={downloadPng}>Download</button>
            <br />

            <p>



                <div ref={imageToFile} className="container">
                    <p className="font top_text">{topLine}</p>
                    {!file ? <img src={images[newImage].url} className="img_resize" /> :
                        <img src={URL.createObjectURL(file)} className="img_resize" />}
                    <p className="font bottom_text">{bottomLine}</p>
                </div>

            </p>
            <FileUpload setFile={setFile} file={file} />

        </>
    )
}

export default Display;