import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from "react-router";
import Home from "./Home";
import About from "./About";
import User from "./User";
import NotMatch from "./NotMatch";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app">
        <Switch>
            <Route path='/about' component={About} />
            <Route path='/:user(\d+)' component={User} />
            <Route exact path='/' component={Home} />
            <Route component={NotMatch} />
        </Switch>
      </div>
      </BrowserRouter>
    );
    
    
  }
}

export default App;
