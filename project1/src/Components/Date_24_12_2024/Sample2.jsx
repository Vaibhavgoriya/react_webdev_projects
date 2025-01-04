import React from "react";

export class Sample2 extends React.Component{
    render() {
        return (
            <>
            <label htmlFor="label1"> Name :</label>
            <input type="text" name="name" id="name" />
            <br />
            Male
            <input type="radio" name="radio" id="gender" />
            Female
            <input type="radio" name="radio" id="gender" />
            <br />
            <textaera name="text 1" id="textarea1" cols="30" rows="10"></textaera>
            </>
        );
    }
}

export default Sample2;



//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
//import './index.css'
//import Sample2 from './Components/Date_24_12_2024/Sample2.jsx'
//
//createRoot(document.getElementById('root')).render(
//  <StrictMode>
//    <Sample2/>
//  </StrictMode>,
//)