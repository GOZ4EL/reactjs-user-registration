import "./textField.css";
import React from "react";
import TextField from "@matrial-ui/core/TextField";

function TextBox(props) {
  return (
    <div className="form">
      <TextField
        label={props.label}
        variant="outlined"
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default TextBox;
