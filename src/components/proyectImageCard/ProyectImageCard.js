import React, { Component } from "react";
import "./ProyectImageCard.css";

export default class ProyectImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleProyect: this.props.titleProyect,
      tagProyect: this.props.tagProyect,
      descriptionProyect: this.props.descriptionProyect,
      thishome: this.props.thishome,
      proyectFuntion: this.props.proyectFuntion,
      proyect: this.props.proyect,
      user: this.props.user
    };
    this.handleClick = this.handleClick.bind(this);
  }
  /**
   * metodo que se ejecuta cunado se de click en el la card del proyecto y ejecuta la funcion,
   * que mostrara el proyecto
   * 
   */
  handleClick(e) {
    this.state.proyectFuntion(
      this.state.thishome,
      this.state.user,
      "block",
      "none",
      this.state.proyect
    );
  }

  render() {
    return (
      <div className="col-md-4 p-1">
        <div
          className="card text-white w-100 rel-card-proyect-image"
          onClick={this.handleClick}
        >
          <img
            src="./assets/img/Image_desktop.png"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay rel-card-title-proyect rounded p-2 ">
            <h3 className="card-title mt-4 d-inline-block text-truncate w-100">
              {this.props.titleProyect}
            </h3>
            <p className="rel-card-text-tag">{this.props.tagProyect}</p>
            <p className="card-text rel-card-tex-description w-100 text-left text-white-50">
              {this.props.descriptionProyect}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
