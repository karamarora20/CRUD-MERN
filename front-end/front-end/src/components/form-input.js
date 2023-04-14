import '../App.css';
const INPform= (props) => {
    const { onchange,Name } = props;
    return (
        
            <div >
            <label className="form-label" htmlFor={Name}>{Name}:</label>
            <input
                type="text"
                name={Name}
                placeholder={`Enter ${Name}`}
                onChange={onchange}
            />
            </div>
    );
};
export default INPform;