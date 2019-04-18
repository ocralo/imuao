import React, { Component } from "react";
import "./Chip.css";


export default class Chip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameProyect: this.props.nameProyect
    };
  }
  render() {
    return (
      <div
        className="rel-chip d-flex align-items-center border rounded-pill m-1 bg-warning shadow-sm"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        <img
          className="rel-chip-img"
          src="./assets/img/Image_desktop.png"
          alt=""
        />
        <span className="rel-chip-text">{this.state.nameProyect}</span>
      </div>
    );
  }
}
