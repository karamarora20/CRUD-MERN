import Headerr from "../components/header";
import INP_field from "../components/form-input";
import '../App.css';
const handleChange=(e)=>{}
const delete_form=()=> {  return(
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
export default delete_form;