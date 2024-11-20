
const FieldSet = ({label, children})=>{
    return(
        <fieldset>
            {label && <legend>{label}</legend>}
            {children}
        </fieldset>
    );
}

export default FieldSet