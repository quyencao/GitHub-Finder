import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import NavBar from "./components/layout/NavBar";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import DetailsUser from "./components/users/DetailsUser";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <NavBar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/user/:login' component={DetailsUser} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
