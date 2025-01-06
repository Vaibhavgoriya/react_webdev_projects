import  { useState } from 'react'

const Hooks3 = () => {
    const[color,setcolor]=useState("green");
    const[font,setfont]=useState("");
    const[blg,setbld]=useState(100);
    const[txtdec,settxtdec]=useState(100);
  return (
    <div>
        <input type='radio' name='color' onChange={()=>{setcolor("Yellow")}}/>{"Yellow"}<br/>
        <input type='radio' name='color' onChange={()=>{setcolor("Red")}}/>{"Red"}<br/>
        <input type='radio' name='color' onChange={()=>{setcolor("Blue")}}/>{"Blue"}<br/>
        <br />
        <p style={{color:color}}>Vaibhav Goriya</p>

        <hr />
        <input type='checkbox' name='bld'  onChange={(e)=>{setbld(e.target.checked ?900:100)}}/>{"bold"}<br/>
        <input type='checkbox' name='font' onChange={(e)=>{setfont(e.target.checked ?'italic':'normal')}}/>{"italic"}<br/>
        <input type='checkbox' name='txtdec' onChange={(e)=>{settxtdec(e.target.checked ?'underline':"" )}}/>{"underline"}<br/>
        <br />
        <p style={{ fontStyle:font ,fontWeight:blg,textDecoration:txtdec}}>Vaibhav Goriya</p>

    </div>
    
  )
}

export default Hooks3



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Hooks3 from './Components/Date_6_1_2025/Hooks3.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Hooks3/>
//   </StrictMode>,
// )