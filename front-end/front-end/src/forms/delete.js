import Headerr from "../components/header";
import INP_field from "../components/form-input";
import { useState, useReducer } from "react";
import '../App.css';
const handleChange=(e)=>{
  
}
const Delete_form=()=> { 
  
 
  const[enroll,setenroll]=useState("");


  const handleChange=async (event) => {
    setenroll(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `http://127.0.0.1:4000/delete/:${enroll}}`,
    )
      .then((Response) => Response.json())
      .then((response) => alert("success:", response.msg))
      .catch((err) => console.log("error:", err));

  };
  
  return(
    <div >
  <Headerr txt="Enter The ID to Delete"/>
  <form className="form-container">
    <div>
<INP_field Name={"ID"} onchange={handleChange}/>

</div>
<button className="submit">Delete</button>
</form>
</div>
);};
export default Delete_form;