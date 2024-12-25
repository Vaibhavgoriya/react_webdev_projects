import React from "react";
import Sample2 from "./Sample2";
import Timetable from "./Timetable";


class Sample extends React.Component {
    render() {
        return (
            <div>
            <h1>Hello World</h1>
            <p>This is a sample React component.</p>
            <Sample2/>
            <Timetable/>
            </div>
        );
    }
};

export default Sample;


