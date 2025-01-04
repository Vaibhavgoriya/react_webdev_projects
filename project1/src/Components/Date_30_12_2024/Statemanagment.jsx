import * as React from "react";
class Statemanagment_30_12_2024 extends React.Component {
  state = {
    first: "loading....",
    second: "loading...",
    third: "loading...",
    fourth: "loading...",
    cmplmsg: "loading done",
  };
  constructor() {
    super();
    setTimeout(() => {
      this.setState({ first: "done" });
    }, 2000);
    setTimeout(() => {
      this.setState({ second: "done" });
    }, 4000);
    setTimeout(() => {
      this.setState({ third: "done" });
    }, 6000);
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        first: state.cmplmsg,
        second: state.cmplmsg,
        third: state.cmplmsg,
        fourth: state.cmplmsg,
      }));
    }, 8000);
  }
  render() {
    return (
      <div>
        <ul>
          {Object.keys(this.state)
            .filter((keys) => keys !== "cmplmsg")
            .map((keys) => (
              <li key={keys}>
                <strong>{keys} : </strong>
                {this.state[keys]}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
export default Statemanagment_30_12_2024;

//1. Copy one state from another
//2. Function chaining in JS
//3. Map
//4. Filter
//5. How to use state without declaring it insode render method
//6. Expansion or Spread operator
//7. Scripting


//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
//import './index.css'
//import Statemanagment from './Components/Date_30_12_2024/Statemanagment.jsx'
//
//createRoot(document.getElementById('root')).render(
//  <StrictMode>
//    <Statemanagment/>
//  </StrictMode>,
//)