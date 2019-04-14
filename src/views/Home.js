import React, { Component } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/header/Header";
import NavRigth from "../components/navRigth/NavRigth";

export default class Home extends Component {
    render(){
        return (
          <div className="container-fluid m-0 p-0 h-100">
            <div className="row m-0 p-0 w-100 h-100">
              <div className="col-md-2 m-0 p-0">
                <NavRigth />
              </div>
              <div className="col-md-10 m-0 p-0">
                <Header name="momo" lastName="GG" />
              </div>
            </div>
          </div>
        );
    }
}
