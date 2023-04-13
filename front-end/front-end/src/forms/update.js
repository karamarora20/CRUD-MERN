import Headerr from "../components/header";
import INP_field from "../components/form-input";
import '../App.css';
import { useState, useReducer } from "react";
const handleChange=(e)=>{}
const Update_form=()=> {  
  
  const[name,setName]=useState("");
  const[enroll,setenroll]=useState("");
  const[Email,setemail]=useState("");
  const[address,setaddress]=useState("");
  const[city,setcity]=useState("");
  const[phone,setphone]=useState("");

  const [formInput, setFormInput] = useReducer((state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      enroll: "",
      email: "",
      address: "",
      city: "",
      phone: ""
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
      "http://127.0.0.1:4000/update",
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
  <Headerr txt="Enter ID and details"/>
  <form className="form-container">
    <div>
<INP_field Name={"Name"} onchange={handleChange}/>
    <INP_field Name={"ID"} onchange={handleChange}/>
<INP_field Name={"Email"} onchange={handleChange}/>
<INP_field Name={"Phone"} onchange={handleChange}/>
<INP_field Name={"Address"} onchange={handleChange}/>
<INP_field Name={"City"} onchange={handleChange}/>
</div>
<button className="submit">Update</button>
</form>
</div>
);};
export default Update_form;