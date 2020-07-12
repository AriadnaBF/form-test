import React from "react";

const ErrorMail = (props) => {
  if (!props.val) {
    return <div className="text-danger">Email no válido</div>;
  } else {
    return null;
  }
};

export { ErrorMail };
