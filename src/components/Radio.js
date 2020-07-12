import React from "react";

const Radio = (props) => {
  return (
    <span style={{ color: props.error ? "black" : "red" }}>
      <input
        type="radio"
        name="gender"
        value={props.gendervalue}
        onChange={props.handlegender}
      />{" "}
      <span>{props.gender}</span>{" "}
    </span>
  );
};

export { Radio };
