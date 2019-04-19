import React, { Component } from "react";
import "./ProyectImageCard.css";

export default class ProyectImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleProyect: this.props.titleProyect,
      tagProyect: this.props.tagProyect,
      descriptionProyect: this.props.descriptionProyect
    };
  }
  render() {
    return (
      <div className="col-md-4 p-1">
        <div className="card text-white w-100 ">
          <img
            src="./assets/img/Image_desktop.png"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay rel-card-title-proyect rounded p-2 ">
            <h3 className="card-title mt-5 ">{this.props.titleProyect}</h3>
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
