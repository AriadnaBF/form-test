import React from "react";

const ErrorGender = (props) => {
  if (!props.val) {
    return <div className="text-danger">Debe escoger un sexo</div>;
  } else {
    return null;
  }
};

export { ErrorGender };
