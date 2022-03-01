// import React from "react";
import { useSelector } from "react-redux";

const selectUpKey = state => state.upKey;
const selectUpUrl = state => state.upURL;

export const Uploadfile = (selectedFile) => {
    const upKey = useSelector(selectUpKey);
    const upUrl = useSelector( selectUpUrl)
    const urlAddress =  `${upUrl}${upKey}`;
    console.log('urlAddress -> ', urlAddress);

    const formData = new FormData();
    
    formData.append('File', selectedFile);

    fetch(
        urlAddress,
        {
            method: 'POST',
            body: formData,
        }
    )
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

export default Uploadfile;

