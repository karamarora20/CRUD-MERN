import Headerr from "../components/header";
import INP_field from "../components/form-input";
import { useState } from "react";
import '../App.css';
import { motion } from 'framer-motion'
const handleChange=(e)=>{}
const Read_form=()=> { 
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
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1, transition:{duration:0.2}}}
    exit={{opacity:0,transitionEnd: { display: "none" }}}
    >
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
</motion.div>
);};
export default Read_form;