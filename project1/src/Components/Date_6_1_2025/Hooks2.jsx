import { useState } from "react"

const Hooks2 = () => {
    const [name, setname] = useState("V.G")
  return (
    <div>
      <input type="text" name="name" id="name" value={name} onChange={(e) => setname(e.target.value)} />
      <h1>{name}</h1>
    </div>
  )
}

export default Hooks2




// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Hooks2 from './Components/Date_6_1_2025/Hooks2.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Hooks2/>
//   </StrictMode>,
// )