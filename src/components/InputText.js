import React from "react";
import { ErrorText } from "./ErrorText";

const InputText = (props) => {
  return (
    <div className="form-group">
      <div className="d-flex">
        <label
          className="col-form-label mr-3"
          style={{ color: props.error ? "black" : "red" }}
        >
          {props.label}
        </label>
        <input
          type="text"
          className="form-control"
          id={props.id}
          onChange={props.handletext}
          style={{ borderColor: props.error ? "#ced4da" : "red" }}
        />
      </div>
      <ErrorText val={props.error} />
    </div>
  );
};

export { InputText };
