import React from "react";
import "./styles.css";
import APIURL from "../helpers/environment";
import {Form, FormGroup, Label, Input} from "reactstrap";
import Button from "@material-ui/core/Button";

type acceptedProps = {
  updateToken: (newToken: string) => void;
  updateRole: (newUserRole: string) => void;
};

type userState = {
  email: string;
  password: string;
  role: string;
  firstName: string;
  lastName: string;
};

class Register extends React.Component<acceptedProps, userState> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
      role: "",
      firstName: "",
      lastName: "",
    };
  }

  handleChangeRole = (e: any) => {
    this.setState({role: e.target.value});
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(
      this.state.email,
      this.state.password,
      this.state.firstName,
      this.state.lastName
    );
    fetch(`${APIURL}/user/register`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        role: this.state.role,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.updateToken(data.token);
        console.log(data);
      });
  };

  render() {
    return (
      <div className="Register">
        <h1>Register Here!</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="email"></Label>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => this.setState({email: e.target.value})}
              id="email"
              label="email"
              inputprops={{pattern: ".+@.+.com"}}
              // name="email" value={this.state.email }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={(e) => this.setState({password: e.target.value})}
              id="password"
              type="password"
              label="password"
              inputprops={{
                minLength: "5",
                maxLength: "15",
              }}
              title="Password be 5-15 characters in length."
              // name="password" value={this.state.password}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              onChange={(e) => this.setState({firstName: e.target.value})}
              id="firstName"
              type="text"
              label="firstName"
              inputprops={{}}
              // name="firstName" value={this.state.firstName}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              onChange={(e) => this.setState({lastName: e.target.value})}
              id="lastName"
              type="text"
              label="lastName"
              inputprops={{}}
              // name="lastName" value={this.state.lastName}
            />
          </FormGroup>
          <Button
            variant="contained"
            color="secondary"
            className="sign-btn"
            type="submit"
          >
            Signup
          </Button>
        </Form>
      </div>
    );
  }
}
export default Register;
