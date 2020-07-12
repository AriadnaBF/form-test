import React from "react";
import { InputSelect } from "./InputSelect";
import { ErrorBirthdate } from "./ErrorBirthdate";

const Birthdate = (props) => {
  function getlist(initialnum, finalnum) {
    const list = [];
    for (let i = finalnum; i >= initialnum; i--) {
      list.push(i);
    }
    return list;
  }

  return (
    <div>
      <div
        className="form-group d-flex justify-content-between"
        style={{ color: props.error ? "black" : "red" }}
      >
        <label className="col-form-label text-left">Fecha de nacimiento</label>{" "}
        <div className="mx-3">
          <InputSelect
            list={getlist(1, 31)}
            onChange={props.handleday}
            state={props.day}
            style={props.error}
          />
        </div>
        <div className="mx-3">
          <InputSelect
            list={getlist(1, 12)}
            onChange={props.handlemonth}
            state={props.month}
            style={props.error}
          />
        </div>
        <div className="mx-3">
          <InputSelect
            list={getlist(1920, 2020)}
            onChange={props.handleyear}
            state={props.year}
            style={props.error}
          />
        </div>
      </div>
      <ErrorBirthdate val={props.error} />
    </div>
  );
};

export { Birthdate };
