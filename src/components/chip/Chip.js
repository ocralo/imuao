import React, { Component } from "react";
import "./Chip.css";

var me;
export default class Chip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameProyect: this.props.nameProyect,
      thishome: this.props.thishome,
      proyectFuntion: this.props.proyectFuntion,
      proyect: this.props.proyect,
      card:this.props.card
    };
  }

  handleClick(e) {
    me.state.proyectFuntion(
      me.state.thishome,
      me.state.proyect,
      "block",
      "none",
      me.state.card
    );
    console.log(me.state.card)
  }

  render() {
    me = this;
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
