import '../App.css';
const INPform= (props) => {
    const { onchange,Name,val } = props;
    
    
    return (
        
            <div >
            <label className="form-label" htmlFor={Name}>{Name}:</label>
            <input
                type="text"
                name={Name}
                placeholder={`Enter ${Name}`}
                onChange={onchange}
                value={val}
            />
            </div>
    );
};
export default INPform;