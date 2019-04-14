import React, { Component } from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";

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
      <div className="container-fluid p-0 m-0">
        <nav className="navbar navbar-dark shadow-sm">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <span className="navbar-text">{this.props.name}</span>
        </nav>
      </div>
    );
  }
}
