//import React, { useRef } from 'react';

const FileUpload = ({ file, setFile }) => {
    // const fileInput = useRef(null)



    // const handleUploadBtn = () => {
    //     fileInput.current.click()
    // }

    const handleUploadField = (e) => {
        // if (e.target.files[0].size <= 500000 && e.target.files[0].type === "image") {
        setFile(e.target.files[0])
        //} //if the conditon is not given, show something, but the file will need to get stored then
        console.log(file)
    }


    const handleRemove = (e) => {
        setFile(null)
    }

    return (
        <>
            <div>
                <p>Drag and drop</p>
                {/* <button type='button' onClick={handleUpload}>Upload</button> */}
                <input type='file' title='' value='' onChange={handleUploadField} />
            </div>
            <button type='button' onClick={handleRemove}>Remove File</button>
        </>
    )
}


export default FileUpload