import Headerr from "../components/header";
import INP_field from "../components/form-input";
import '../App.css';
import { useReducer, useState } from "react";
import{motion} from 'framer-motion'


const Create_form= ()=>{
  const[Name,setName]=useState("");
  const[Enroll,setenroll]=useState("");
  const[Email,setemail]=useState("");
  const[Address,setaddress]=useState("");
  const[City,setcity]=useState("");
  const[Phone,setphone]=useState("");

  const [formInput, setFormInput] = useReducer((state, newState) => ({ ...state, ...newState }),
    {
      Name: "",
      Enrollment: "",
      Email: "",
      Address: "",
      City: "",
      Phone: ""
    }
  );


  const handleChange=async (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setFormInput({ [name]: value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      ...formInput,
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
      .then((response) => alert("success"))
      .catch((err) => alert("error:", err));
  };

    return(
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:0.35}}}
        exit={{opacity:0,transitionEnd: { display: "none" }}}
        >
      <Headerr txt="Enter your details"/>
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
    <INP_field Name={"Name"} onchange={handleChange}/>
    <INP_field Name={"Enrollment"} onchange={handleChange}/>
    <INP_field Name={"Email"} onchange={handleChange}/>
    <INP_field Name={"Phone"} onchange={handleChange}/>
    <INP_field Name={"Address"} onchange={handleChange}/>
    <INP_field Name={"City"} onchange={handleChange}/>
    </div>
    <button className="submit">Submit</button>
    </form>
    </motion.div>
    );
}
export default Create_form;