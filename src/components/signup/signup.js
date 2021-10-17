import "./signup.css";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div className="card">
        <Card>
          <CardContent>
            <h1>Registration Form Here</h1>
          </CardContent>
          <CardActions>
            <Button> Button </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default SignUp;
