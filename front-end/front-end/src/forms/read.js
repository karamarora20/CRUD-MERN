import Headerr from "../components/header";
import INP_field from "../components/form-input";
import { useState } from "react";
import '../App.css';
import { motion } from 'framer-motion'
const Read_form=()=> { 
  const[enroll,setenroll]=useState("");
  const[record,setrecord]=useState({});




  const handleChange=async (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setenroll(value)
    console.log(name,value);}
  

  const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      'Enrollment': enroll
    };
    console.log(record);

    fetch(
      "http://127.0.0.1:4000/read",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((Response) => Response.json())
      .then((response) => setrecord(response))
      .catch((err) => console.log("error:", err));
  };
  
  
  return(
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1, transition:{duration:0.2}}}
    exit={{opacity:0,transitionEnd: { display: "none" }}}
    >
  <Headerr txt="Enter Enrollment ID to search"/>
  <form className="form-container" onSubmit={handleSubmit}>
    <div>
    <INP_field Name={"Enrollment"} onchange={handleChange}/>
<INP_field Name={"Name"} onchange={handleChange} val={record.Name}/>
<INP_field Name={"Email"} onchange={handleChange} val={record.Email}/>
<INP_field Name={"Phone"} onchange={handleChange} val={record.Phone}/>
<INP_field Name={"Address"} onchange={handleChange} val={record.Address}/>
<INP_field Name={"City"} onchange={handleChange} val={record.City}/>
</div>
<button className="submit">Search</button>
</form>
</motion.div>
);};
export default Read_form;