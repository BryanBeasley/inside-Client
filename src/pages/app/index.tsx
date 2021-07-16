import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";

import Nav from "../../components/nav/index";




class App extends React.Component {

  render() {
    return (
      <div>
        <Nav />
      </div>
      );
    }
  }
  
  export default App;
  
  //! Notes: 
  //Route will need to be corrected so login is first page. 
  //React notes app tutorial 22:41
  // <Router>
  //   <div className='App'>
  //     <Nav />
  //     <Switch>
  //       <Route path="/" exact component={Splash} />
  //       <Route path="/thoughts" component={Thoughts} />

  //     </Switch>
  //   </div>
  // </Router>