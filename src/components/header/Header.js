import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: ""
    };
  }
  render() {
    return (
      <div className="container-fluid p-0 m-0 sticky-top rel-navbar">
        <nav className="navbar navbar-dark shadow-sm ">
          <form className="form-inline">
            <i className="fas fa-search rel-search-icon-header" />
            <input
              className="form-control mr-sm-2 rel-search-input"
              type="search"
              placeholder="Buscar compañeros, proyectos o habilidades"
              aria-label="Search"
            />
          </form>
          <div className="d-flex align-items-center">
            <i className="fas fa-bell pr-2 border-right rel-icon-header" />
            <p className="mb-0 ml-2 mr-2">Rodrigo</p>
            <i className="fas fa-chevron-down rel-icon-header" />
            <img
              src="./assets/img/Rodrigo.jpg"
              className="rel-img-profile-header"
              alt=""
            />
          </div>
        </nav>
      </div>
    );
  }
}
