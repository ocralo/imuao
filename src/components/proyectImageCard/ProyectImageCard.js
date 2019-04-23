import React, { Component } from "react";
import "./ProyectImageCard.css";


var me;
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
      user:this.props.user
    };
  }

  handleClick(e) {
    me.state.proyectFuntion(
      me.state.thishome,
      me.state.user,
      "block",
      "none",
      me.state.proyect
    );
    console.log(me.state.card);
  }

  render() {
    me = this;
    return (
      <div className="col-md-4 p-1">
        <div className="card text-white w-100 rel-card-proyect-image">
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
