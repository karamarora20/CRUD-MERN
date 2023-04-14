
import { BrowserRouter } from "react-router-dom"
import './App.css';
import { useState } from 'react';
import AnimatedRoutes from './components/AnimatedRoutes';
import Navbar from './shared/navbar';
function App() {
const [value,setvalue]= useState("");
const[answer,setanswer]= useState("")

async function get_answer(val){
  // console.log(val);
  const result= await fetch('http://localhost:4000/solve',{
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      image:val
    })  
})
 const data= await result.json();
 setanswer(data.hel);
}
console.log(`answer="${answer}"`)
// const handleChange=(e)=>{}
  return (
  
    <div >
      <BrowserRouter>
      <Navbar/>
      <AnimatedRoutes/>
      </BrowserRouter>
    </div>

  );
}

export default App;
