import React, { Component } from 'react';
import './App.css';
import Loadable from "react-loadable";
import {HashRouter, Route, Switch} from "react-router-dom";

const loading = () => <div>Cargando...</div>;
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
