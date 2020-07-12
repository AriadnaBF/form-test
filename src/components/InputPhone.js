import React from "react";
import { ErrorPhone } from "./ErrorPhone";

const InputPhone = (props) => {
  return (
    <div className="form-group">
      <div className="d-flex">
        <label
          className="mr-3 col-form-label"
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
      <ErrorPhone val={props.error} />
    </div>
  );
};

export { InputPhone };
