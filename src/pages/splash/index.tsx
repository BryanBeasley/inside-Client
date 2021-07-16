  import React from 'react';
import {  Button,  } from 'reactstrap';
import Login from "../../components/auth/login";
import Register from "../../components/auth/signup";

type acceptedProps = {
  updateToken: (newToken: string) => void;
  updateRole: (newUserRole: string) => void;
};

type userState = {
  showLogin: boolean;
};

 class Auth extends React.Component<acceptedProps, userState> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      showLogin: false,
    };
  }
  loginToggle = (event: any) => {
    event.preventDefault();
    if (this.state.showLogin === false) {
      return this.setState({
        showLogin: true,
      });
    }
    if (this.state.showLogin === true) {
      return this.setState({
        showLogin: false,
      });
    }
  };
  render() {
    return (
      <div>
        <div id="banner">
          <h1 id="Title1">Inside Journal</h1>
        </div>
        <div id="container">
          {this.state.showLogin ? (
            <div>
              <Register
                updateToken={this.props.updateToken}
                updateRole={this.props.updateRole}
              />
            </div>
          ) : (
            <div>
              <Login updateToken={this.props.updateToken} />
            </div>
          )}
          <br />
          
          <Button
            style={{
              position: "relative",
              left: "50%",
              top: "75%",
              marginBottom: "20px",
              padding: "20px, 50px, 20px",
            }}
            variant="contained"
            onClick={(e) => {
              this.loginToggle(e);
            }}
          >
            {this.state.showLogin ? "Login" : "Sign up"}
          </Button>
        </div>
        <p
          style={{
            fontFamily: "Architects Daughter",
            fontSize: "24px",
            position: "relative",
            top: "75%",
            marginBottom: "20px",
            maxWidth: "700px",
            marginLeft: "30%",
          }}
        >Each new day is a blank page!
          
        </p>
      </div>
    );
  }
}
export default Auth;
