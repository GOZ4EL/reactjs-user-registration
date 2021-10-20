import "./signup.css";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextBox from "../../core/textField/textField";
import { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div className="card">
        <Card className="cardStyle">
          <CardContent>
            <div className="signupText">SIGNUP</div>
            <TextBox label="Full Name" />
            <TextBox label="Email" />
            <TextBox label="Phone Number" />
            <TextBox label="Password" />
            <TextBox label="Confim Password" />
          </CardContent>

          <CardActions className="CardActions">
            <Button style={{ background: "black", color: "white" }}>
              SIGNUP
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default SignUp;
