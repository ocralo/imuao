import React, { Component } from "react";
import "./BarProgres.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: this.props.percentage
    };
  }
  render() {
    const divStyle = {
      width: this.state.percentage + "%"
    };
    return (
      <div className="border rounded-pill w-75 ml-2">
        <div
          className="rounded-pill bg-warning d-flex justify-content-center text-white rel-barProgres-text"
          style={divStyle}
        >
          {this.state.percentage}%
        </div>
      </div>
    );
  }
}
