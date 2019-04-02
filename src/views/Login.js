import React, { Component } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../logo.svg";
import "../App.css";
import * as firebase from "firebase";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSumit = event => {
    var me = this;
    console.log(me.state.email);
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(function(firebaseUser) {
        console.log("Exito", firebaseUser);
        me.props.history.push("/home");
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error", errorMessage);
      });
    //this.props.history.push('/Home');
  };
  handleChange = event => {
    console.log(event.target.id);
    if (event.target.id === "correo") {
      this.setState({ email: event.target.value });
    } else if (event.target.id === "contraseña") {
      this.setState({
        password: event.target.value
      });
    }
  };
  render() {
    return (
      <section className="container-fluid rel-container">
        <div className="row h-100">
          <div className="col-md-6 rel-imagen-iniciar-sesion rounded-left ">
            <div className="container d-flex justify-content-center align-items-center flex-column h-100">
              <h2 className="rel-titulo d-none d-md-block">REACT JS</h2>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
          <div className="col-md-6 border rounded-right d-flex align-items-center justify-content-center">
            <div className="container ">
              <div className="card p-4 w-100 border-0 rel-card">
                <div className="card-body">
                  <h3 className="card-title">Iniciar Sesion</h3>
                  <h6 className="card-subtitle mb-2 text-muted d-none d-md-block">
                    Para usar nuestra aplicacion por favor iniciar sesion
                  </h6>
                  <form onSubmit={this.handleSumit}>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">
                        Correo electronico
                      </label>
                      <br />
                      <label className="pure-material-textfield-outlined rel-input">
                        <input
                          className="form-control"
                          type="email"
                          id="correo"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                        <span>Correo electronico</span>
                      </label>
                      <small
                        id="emailHelp"
                        className="form-text text-muted d-none d-md-block"
                      >
                        Nunca compartiremos su correo electrónico.
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Contraseña</label>
                      <br />
                      <label className="pure-material-textfield-outlined rel-input">
                        <input
                          className="form-control"
                          type="password"
                          id="contraseña"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                        <span>Contraseña</span>
                      </label>
                      <div className="d-flex justify-content-end">
                        <button
                          type="submit"
                          className="btn btn-dark bg-dark btn-lg m-2"
                          value="Submit"
                        >
                          Ingresar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
