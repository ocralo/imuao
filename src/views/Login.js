import React, { Component } from "react";
import "./Login.css";
import * as firebase from "firebase";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.email = React.createRef();
    this.password = React.createRef();
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
        var errorMessage = error.message;
        console.log("Error", errorMessage);
      });
    //this.props.history.push('/Home');
  };
  handleChange = event => {
    console.log(this.state.password + "----" + this.state.email);
    if (event.target.id === "correo") {
      this.setState({ email: this.email.current.value });
    } else if (event.target.id === "contraseña") {
      this.setState({
        password: this.password.current.value
      });
    }
  };
  render() {
    return (
      <section className="container-fluid rel-container">
        <div className="row h-100">
          <div className="col-md-6 rel-imagen-iniciar-sesion rounded-left ">
            <div className="container d-flex justify-content-center align-items-center flex-column h-100">
              <img
                src="./assets/img/Logo-UAO.png"
                className="App-logo"
                alt="logo"
              />
            </div>
          </div>
          <div className="col-md-6 border rounded-right d-flex align-items-center justify-content-center">
            <div className="container ">
              <div className="card p-4 w-100 border-0 rel-card">
                <div className="card-body">
                  <div className="mb-5">
                    <h1 className="card-title rel-text-center">
                      Iniciar Sesión
                    </h1>
                    <h6 className="card-subtitle mb-2 text-muted d-none d-md-block rel-text-center">
                      Para usar nuestra aplicacion por favor iniciar sesion
                    </h6>
                  </div>
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
                          ref={this.email}
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
                      <label htmlFor="exampleInputPassword1">
                        Contraseña
                      </label>
                      <br />
                      <label className="pure-material-textfield-outlined rel-input">
                        <input
                          className="form-control"
                          type="password"
                          id="contraseña"
                          ref={this.password}
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                        <span>Contraseña</span>
                      </label>
                      <div className="d-flex justify-content-end">
                        <button
                          type="submit"
                          className="btn btn-danger btn-lg m-2 pl-4 pr-4"
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
