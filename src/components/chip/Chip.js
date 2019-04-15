import React, { Component } from "react";
import "./Chip.css";

export default class Chip extends Component {
  render() {
    return (
      <div className="rel-chip d-flex align-items-center border rounded-pill m-1 shadow-sm">
        <img
          className="rel-chip-img"
          src="./assets/img/Rodrigo.jpg"
          alt=""
        />
        Pitochar
      </div>
    );
  }
}
