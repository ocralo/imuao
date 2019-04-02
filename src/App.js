import React, { Component } from 'react';
import './App.css';
import Loadable from "react-loadable";
import {HashRouter, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDX3XfOXAfEbLOyXY-khxYBlcMD3996XE0",
  authDomain: "imuao-administrador.firebaseapp.com",
  databaseURL: "https://imuao-administrador.firebaseio.com",
  projectId: "imuao-administrador",
  storageBucket: "imuao-administrador.appspot.com",
  messagingSenderId: "1000065554199"
};
firebase.initializeApp(config);

const loading = () => (
  <div className="rel-cargando">
    <div
      className="spinner-border"
      role="status"
    >
      <span className="sr-only">Cargando...</span>
    </div>
  </div>
  
);
const Login = Loadable({
  loader: () => import('./views/Login'),
  loading
});
const Home = Loadable({
  loader: () => import("./views/Home"),
  loading
});

class App extends Component {



  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" name="Login - IMUAO" component={Login}/>
          <Route exact path="/Home" name="Home - IMUAO" component={Home} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
