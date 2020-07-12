import React from "react";

const ErrorBirthdate = (props) => {
  if (!props.val) {
    return (
      <div className="text-danger">La fecha de nacimiento no es válida</div>
    );
  } else {
    return null;
  }
};

export { ErrorBirthdate };
