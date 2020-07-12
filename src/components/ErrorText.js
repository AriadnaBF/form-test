import React from "react";

const ErrorText = (props) => {
  if (!props.val) {
    return (
      <div className="text-danger">
        Este campo debe tener por lo menos 3 caracteres
      </div>
    );
  }
  return null;
};

export { ErrorText };
