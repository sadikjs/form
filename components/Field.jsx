import React from "react";
const Field = ({ label, children, error }) => {
  getChild(children);
  return (
    <div>
      {label && <label>{label}</label>}
      {children}
      {!!error && <div>{error.message}</div>}
    </div>
  );
};
export default Field;

const getChild = (children) => {
  const child = React.Children.only(children);
  if ("id" in child) {
    return child.props.id;
  }
};
