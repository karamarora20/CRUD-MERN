import Headerr from "../components/header";
import INP_field from "../components/form-input";
import { useState } from "react";
import '../App.css';
const handleChange=(e)=>{}
const Read_form=()=> { 
  const[enroll,setenroll]=useState("");


  const handleChange=async (event) => {
    setenroll(event.target.value)
    console.log(enroll);
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
  <Headerr txt="Enter Enrollment ID to search"/>
  <form className="form-container">
    <div>
    <INP_field Name={"Enrollment"} onchange={handleChange}/>
<INP_field Name={"Name"} onchange={handleChange}/>
<INP_field Name={"Email"} onchange={handleChange}/>
<INP_field Name={"Phone"} onchange={handleChange}/>
<INP_field Name={"Address"} onchange={handleChange}/>
<INP_field Name={"City"} onchange={handleChange}/>
</div>
<button className="submit">Search</button>
</form>
</div>
);};
export default Read_form;