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
      <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand">
          <img
            src="https://react-bootstrap.github.io/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          IMUAO
        </div>
        <span className="navbar-text">{this.props.name}</span>
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
      </nav>
    );
  }
}
