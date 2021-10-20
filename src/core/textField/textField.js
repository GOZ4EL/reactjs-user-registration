import "./textField.css";
import React from "react";
import TextField from "@material-ui/core/TextField";

function TextBox(props) {
  return (
    <div className="form">
      <TextField
        label={props.label}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        variant="outlined"
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default TextBox;
