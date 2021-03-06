import React, { Component } from "react";
import "./Chip.css";

export default class Chip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameProyect: this.props.nameProyect,
      thishome: this.props.thishome,
      proyectFuntion: this.props.proyectFuntion,
      proyect: this.props.proyect,
      card: this.props.card
    };

    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * metodo que se ejecuta cunado se de click en la chip y ejecuta la funcion,
   * que mostrara el proyecto
   */

  handleClick(e) {
    this.state.proyectFuntion(
      this.state.thishome,
      this.state.card,
      "block",
      "none",
      this.state.proyect
    );
  }

  render() {
    return (
      <div
        className="rel-chip d-flex align-items-center border rounded-pill m-1 bg-warning shadow-sm"
        data-toggle="modal"
        data-target="#exampleModal"
        data-dismiss="modal"
        onClick={this.handleClick}
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
