import '../App.css';
const INPform= (props) => {
    const { handleChange,Name } = props;
    return (
        
            <div >
            <label className="form-label" htmlFor={Name}>{Name}:</label>
            <input
                type="text"
                name={Name}
                placeholder={`Enter ${Name}`}
                onChange={handleChange}
            />
            </div>
    );
};
export default INPform;