import "./styles.css";
import React from "react";
import Register from "./Register";
import Login from "./Login";
import {Container, Row, Col, Button} from "reactstrap";

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
      <div className="auth-page">
        <Container className="introText">
          <Row>
            <Col sm="6" className="textCont">
              <h1 className="splash-text">Journal INSIDE</h1>
              <h3 className="splash-text">
                A simple notes app with habit tracking{" "}
              </h3>
              <h3 className="splash-text"> register or sign in now</h3>
            </Col>
          </Row>
        </Container>
        <Container className="logReg">
          <Row className="logArea">
            <div>
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
                variant="contained"
                color="primary"
                onClick={(e) => {
                  this.loginToggle(e);
                }}
              >
                {this.state.showLogin ? "Login" : "Sign up"}
              </Button>
            </div>
          </Row>
        </Container>
        <div>
          <h2 className="shineText">
            {" "}
            THE BEAUTY OF JOURNALING IS THAT IT CAN BE MESSY
          </h2>
        </div>
      </div>
    );
  }
}
export default Auth;
