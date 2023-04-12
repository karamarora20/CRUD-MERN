import Headerr from "../components/header";
import INP_field from "../components/form-input";
import '../App.css';
const handleChange=(e)=>{}
const create_form=()=>{
    return(
        <div >
      <Headerr txt="Enter your details"/>
      <form className="form-container">
        <div>
    <INP_field Name={"Name"} onchange={handleChange}/>
    <INP_field Name={"ID"} onchange={handleChange}/>
    <INP_field Name={"Email"} onchange={handleChange}/>
    <INP_field Name={"Phone"} onchange={handleChange}/>
    <INP_field Name={"Address"} onchange={handleChange}/>
    <INP_field Name={"City"} onchange={handleChange}/>
    </div>
    <button className="submit">Submit</button>
    </form>
    </div>
    );
}
export default create_form;