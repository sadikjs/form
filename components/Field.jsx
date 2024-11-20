import React from "react";
const Field = ({label, children, htmlFor, error})=>{
    const id = htmlFor || getChildId(children)
    return(
        <div>
            {label && <label>{label}</label>}
            {children}
            {!! error && <div>{error.message}</div>}
        </div>
    );
}
export default Field

const getChildId = (children) => {
    const child = React.Children.only(children);

    if ("id" in child?.props) {
        return child.props.id;
    }
};