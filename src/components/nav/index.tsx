import { Button, MenuItem } from "@material-ui/core";
import MenuList from "@material-ui/core/MenuList";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Auth from "../../pages/splash/index";
import Thoughts from '../../pages/thoughts/index';
// import Trackers from '../../pages/trackers/index';
import "./styles.css";


type acceptedProps = {
    sessionToken: string | null;
    clickLogout: () => void;
    topicId: number | null;
    commentId: number | null;
    updateTopicId: (newTopicId: number) => void;
    updateCommentId: (newCommentId: number) => void;
  };

class Nav extends React.Component <acceptedProps, {}> {
    
    constructor(props: acceptedProps) {
        super(props);
        this.state = {};
        console.log(props);
      }


      render() {
          return(

      <div>
      <div id="banner2">
        <h3 className="text-focus-in"
          id="title2"
          style={{
            fontFamily: "Rock Salt",
            fontSize: "4rem",
            marginTop: "2%",
            marginLeft: "35%",
            width: "500px",
            display: "block",
            paddingBottom: "10px",
          }}
        >
          INSIDE
        </h3>
      </div>

      <MenuList>
        <MenuItem component={Link} to="/">
          Home
        </MenuItem>
        <MenuItem component={Link} to="/thoughts">
          Journal
        </MenuItem>
        <MenuItem component={Link} to="/habits">
          Habits
        </MenuItem>
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={this.props.clickLogout}
        >
          <Link style={{ color: "#000000" }} to="/">
            Logout
          </Link>
        </Button>
      </MenuList>
      <Switch>
        <Route exact path="/">
            {/* <Auth /> */}
          {/* <Auth sessionToken={this.props.sessionToken} /> */}
        </Route>

        <Route exact path="/thoughts">
            <Thoughts />
          {/* <Thoughts sessionToken={this.props.sessionToken} /> */}
        </Route>
        <Route exact path="/habits">
          {/* <Trackers
            sessionToken={this.props.sessionToken}
            updateTopicId={this.props.updateTopicId}
            topicId={this.props.topicId}
        /> */}
        </Route>
      </Switch>
    </div>
  );
}
}
export default Nav;


//     render() {
//         const navStyle = {
//             color: "#424242",
//         };
//         return (

//             <nav>
//                 <h3 className="text-focus-in">INSIDE</h3>
//                 <ul className="nav-links">
//                     <Link style={navStyle} to="/">
//                         <li>Login</li>
//                     </Link>
//                     <Link style={navStyle} to="/thoughts">
//                         <li>Thoughts</li>
//                     </Link>
//                     <Link style={navStyle} to="/habits">
//                         <li>Trackers</li>
//                     </Link>
//                 </ul>
//             </nav>
//         );
//     }
// }