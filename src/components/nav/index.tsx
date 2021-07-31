import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import HomePage from "../../pages/home";
import Habits from "../../components/habits";
import {Nav, Button} from "reactstrap";

import "./styles.css";

type acceptedProps = {
  token: string | null;
  clickLogout: () => void;
};
export default class NavigationBar extends React.Component<acceptedProps, {}> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {};
    console.log(props);
  }
  render() {
    return (
      <div>
        <div className="nav-body">
          <h3 className="text-focus-in nav-text">JOURNAL </h3>
          <hr />

          <p className="nav-text">Books</p>
          <hr />

          <p className="nav-text">Notes </p>
          <hr />

          <p className="nav-text">Habits </p>
          <hr />
          <h3 className="text-focus-in nav-text">INSIDE </h3>

          <Nav vertical className="nav-button">
            <Button
              className="nav-bttn"
              color="primary"
              onClick={this.props.clickLogout}
            >
              <Link style={{color: "#000000"}} to="/">
                LOGOUT
              </Link>
            </Button>{" "}
          </Nav>

          <Nav vertical className="sidebarList"></Nav>
        </div>
        <div className="mainPage">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    );
  }
}
