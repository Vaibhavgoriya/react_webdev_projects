import React from "react";

class Propes_30_12_2024 extends React.Component {
  state = {
    first: true,
    second: 5.4,
    third: "hello",
    color1: "purple",
  };
  constructor() {
    super();
    setTimeout(() => {
      this.setState({
        first: true,
        second: 5.4,
        third: "hello",
        color1: "green",
      });
    }, 3000);
  }
  render() {
    const { first, second, third,color1 } = this.state;
    return (
      <div>
        <button className="button" disabled={first}>
          my button
        </button>
        <p style={{ color: color1}}>
          value of Float variable <strong>{second} </strong>
        </p>
        <p>
          value of String variable <strong>{third}</strong>
        </p>
        {/* <style>
          {`
            .button{
            color:blue;
           
            }
            p{
            color:green;
            }
            `}
        </style> */}
      </div>
    );
  }
}

export default Propes_30_12_2024;




//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
//import './index.css'
//import Propes11 from './Components/Date_30_12_2024/Propes11.jsx'
//
//createRoot(document.getElementById('root')).render(
//  <StrictMode>
//    <Propes11/>
//  </StrictMode>,
//)