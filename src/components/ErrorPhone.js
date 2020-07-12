import React from "react";

const ErrorPhone = (props) => {
  if (!props.val) {
    return (
      <div className="text-danger">El número de teléfono no es válido</div>
    );
  } else {
    return null;
  }
};

export { ErrorPhone };
