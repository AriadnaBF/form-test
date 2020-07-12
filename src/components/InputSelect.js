import React from "react";

const InputSelect = (props) => {
  return (
    <select
      className="form-control"
      value={props.state}
      onChange={props.onChange}
      style={{ borderColor: props.style ? "#ced4da" : "red" }}
    >
      <option selected="true" hidden="true" value="none">
        ---
      </option>

      {props.list.map((num) => {
        if (parseInt(num) < 10) {
          num = "0" + num;
          return <option value={num}>{num}</option>;
        }
        return <option value={num}>{num}</option>;
      })}
    </select>
  );
};

export { InputSelect };
