import Headerr from "../components/header";
import INP_field from "../components/form-input";
import '../App.css';
const handleChange=(e)=>{}
const read_form=()=> {  return(
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
export default read_form;