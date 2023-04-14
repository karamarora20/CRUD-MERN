import '../App.css';
const INPform= (props) => {
    const { onchange,Name,val } = props;
    const change_val = (event) => {
        if(val){
            event.target.value=val;
        }
        else{
        onchange(event);
        }
    }
    return (
        
            <div >
            <label className="form-label" htmlFor={Name}>{Name}:</label>
            <input
                type="text"
                name={Name}
                placeholder={`Enter ${Name}`}
                onChange={change_val}
            />
            </div>
    );
};
export default INPform;