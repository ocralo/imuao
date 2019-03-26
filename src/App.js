import React, { Component } from 'react';
import './App.css';
import Loadable from "react-loadable";
import {HashRouter, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const loading = () => (
  <div
    class="spinner-border"
    role="status"
  >
    <span class="sr-only">Cargando...</span>
  </div>
);
const Login = Loadable({
  loader: () => import('./views/Login'),
  loading
});

class App extends Component {



  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" name="Login - IMUAO" component={Login}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
