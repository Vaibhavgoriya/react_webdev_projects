//useState
//useEffect
//useReducer
//useContext
//useMemo useReference
//useCallback

//state , this.setState

import {useState} from "react";

const Hooks1=()=>{
    const [name] = useState("?hello ?world");
    return <h1>{name}</h1>
}
export default Hooks1;


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Hooks1 from './Components/Date_6_1_2025/Hooks1.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Hooks1/>
//   </StrictMode>,
// )