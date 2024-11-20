
const Number = ({value, onChange, ...rest})=>{
    const handleChange =(e)=>{
        const number = e.target.valueAsNumber || 0; 
        onChange(number)
    }
    return(
        <input 
        type="number"
        onChange={handleChange}
        value={value}
        {...rest}
        />
    );
}
export default Number