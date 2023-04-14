import Headerr from "../components/header";
import INP_field from "../components/form-input";
import { useState, useReducer } from "react";
import '../App.css';

const Delete_form=()=> { 
  
 
  const[enroll,setenroll]=useState("");


  const handleChange=async (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setenroll(value)
    console.log(name,value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      'Enrollment': enroll
    };


    fetch(
      "http://127.0.0.1:4000/create",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((Response) => Response.json())
      .then((response) => console.log("success:", response.msg))
      .catch((err) => console.log("error:", err));
  };
  
  return(
    <div >
  <Headerr txt="Enter The Enrollment ID to Delete"/>
  <form className="form-container">
    <div>
<INP_field Name={"Enrollment"} onchange={handleChange}/>

</div>
<button className="submit">Delete</button>
</form>
</div>
);};
export default Delete_form;