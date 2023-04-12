import Create_form from './forms/create';
import Update_form from './forms/update';
import Delete_form from './forms/delete';
import Read_form from './forms/read';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import { useState } from 'react';


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
      <Routes>
  <Route path="*" element={<Create_form />} />
  <Route exact path="/update" element={<Update_form />} />
  <Route exact path="/delete" element={<Delete_form />} />
  <Route exact path="/read" element={<Read_form />} />
</Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
