import React from "react";
import APIURL from "../helpers/environment";
import "./styles.css";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";

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
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e: any) => this.setState({email: e.target.value})}
              name="email"
              value={this.state.email}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={(e: any) => this.setState({password: e.target.value})}
              name="password"
              value={this.state.password}
            />
          </FormGroup>
          <Button type="submit">LOGIN</Button>
        </Form>
      </div>
    );
  }
}
export default Login;
