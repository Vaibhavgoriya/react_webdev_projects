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