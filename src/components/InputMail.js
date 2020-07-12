import React from "react";
import { ErrorMail } from "./ErrorMail";

const InputMail = (props) => {
  return (
    <div className="form-group">
      <div className="d-flex">
        <label
          className="col-form-label mr-4"
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
      <ErrorMail val={props.error} />
    </div>
  );
};

export { InputMail };
