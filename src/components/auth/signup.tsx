import React from 'react';
import APIURL from '../../helpers/environment';
import { Button, Dropdown } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';


type acceptedProps = {
    updateToken: (newToken: string) => void;
    updateRole: (newUserRole: string) => void;
};

type UserState = {
    email: string;
    password: string;
    role: string;
    firstName: string;
    lastName: string;
};


 class Register extends React.Component<acceptedProps, UserState> {
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
        this.setState({ role: e.target.value });
      };
      handleSubmit = (e: any) => {
        e.preventDefault();
        fetch(`${APIURL}/user/signup`, {
          method: "POST",
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
            role: this.state.role,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
          }),

          headers: new Headers({
            "Content-Type": "application/json",
          }),

        })

          .then((res) => res.json())
          .then((data) => {
            this.props.updateToken(data.sessionToken);
            console.log(data);
          });
      };
       render() {
    return (
      <div id="Register">
        <h2
          style={{
            marginTop: "15%",
            fontFamily: "Shadows Into Light",
          }}
        >
          Register Here!
        </h2>
        <form
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "300px",
            display: "block",
          }}
          onSubmit={this.handleSubmit}
        >
          <TextField
            onChange={(e) => this.setState({ email: e.target.value })}
            id="email"
            label="email"
            inputProps={{
              pattern: ".+@.+.com",
            }}
            title="Must be in standard email format. Ex: youremail@email.com"
          />
          <TextField
            onChange={(e) => this.setState({ password: e.target.value })}
            id="password"
            type="password"
            label="password"
            inputProps={{
              pattern: "[a-zA-Z0-9]+",
              minLength: "5",
              maxLength: "15",
            }}
            title="Password must contain one number, one capital letter, and be 5-15 characters in length."
          />
          <br />
          <Select onChange={this.handleChangeRole}>
            <Dropdown value="Admin">Admin</Dropdown>
            <Dropdown value="Creator">Creator</Dropdown>
          </Select>
          <Button
            style={{
              position: "absolute",
              marginLeft: "5%",
              // marginRight: "auto",
              // width: "300px",
              // display: "block",
            }}
            variant="contained"
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}
export default Register;