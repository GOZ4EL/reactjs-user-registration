import "./signup.css";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextBox from "../../core/textField/textField";
import { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirm: "",
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.label]: e.target.value,
    });
  }

  render() {
    return (
      <div className="card">
        <Card className="cardStyle">
          <CardContent>
            <div className="signupText">SIGNUP</div>
            <TextBox
              label="Full Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <TextBox
              label="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <TextBox
              label="Phone Number"
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <TextBox
              label="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <TextBox
              label="Confim Password"
              value={this.state.passwordConfirm}
              onChange={this.handleChange}
            />
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
