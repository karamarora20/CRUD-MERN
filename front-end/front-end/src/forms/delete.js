import Headerr from "../components/header";
import INP_field from "../components/form-input";
import { useState, useReducer } from "react";
import '../App.css';
import{motion} from 'framer-motion'
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
      "http://127.0.0.1:4000/delete",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((Response) => Response.json())
      .then((response) => alert(response.msg))
      .catch((err) => alert("error:", err));
  };
  
  return(
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1, transition:{duration:0.2}}}
    exit={{opacity:0,transitionEnd: { display: "none" }}}
    >
  <Headerr txt="Enter The Enrollment ID to Delete"/>
  <form className="form-container" onSubmit={handleSubmit}>
    <div>
<INP_field Name={"Enrollment"} onchange={handleChange}/>

</div>
<button className="submit">Delete</button>
</form>
</motion.div>
);};
export default Delete_form;