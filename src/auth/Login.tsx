import React from "react";
import APIURL from "../helpers/environment";
import "./styles.css";
import {Form, FormGroup, Label, Input} from "reactstrap";
import Button from "@material-ui/core/Button";

type acceptedProps = {
  updateToken: any;
};

type userState = {
  email: string;
  password: string;
};

class Login extends React.Component<acceptedProps, userState> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(`${APIURL}/user/login`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.updateToken(data.token);
        console.log(data, "LOGIN TOKEN DATA!");
      });
  };

  render() {
    return (
      <div id="Login">
        <h1 className="auth-text">Login</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup className="email">
            <Label id="emailLabel" htmlFor="email" className="email">
              Email
            </Label>
            <Input
              id="emailInput"
              onChange={(e: any) => this.setState({email: e.target.value})}
              name="email"
              value={this.state.email}
            />
          </FormGroup>
          <FormGroup className="password">
            <Label htmlFor="password" id="pwLabel">
              Password
            </Label>
            <Input
              id="pwInput"
              onChange={(e: any) => this.setState({password: e.target.value})}
              name="password"
              value={this.state.password}
            />
          </FormGroup>
          <Button
            variant="contained"
            color="primary"
            className="login-btn"
            type="submit"
          >
            LOGIN
          </Button>
        </Form>
      </div>
    );
  }
}
export default Login;
