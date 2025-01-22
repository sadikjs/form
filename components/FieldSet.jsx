const FieldSet = ({ label, children, className }) => {
  return (
    <fieldset className={className}>
      {label && <legend>{label}</legend>}
      {children}
    </fieldset>
  );
};

export default FieldSet;
