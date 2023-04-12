import '../App.css'
import Navbar from '../shared/navbar';
const headerr=(props)=>{
    return(
        <div className="header">
            <Navbar/>
            <h1>{props.txt}</h1>
        </div>
    );
}
export default headerr;