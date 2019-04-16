import React, { Component } from "react";
import "./Card.css";
import Chip from "../chip/Chip";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      lastName: this.props.lastName,
      code: this.props.code,
      email: this.props.email,
      phone: this.props.phone
    };
    this.title = React.createRef();
  }

  render() {
    return (
      <div className="col-md-4 col-sm-10 col-12">
        <div className="border mt-4 rel-card-background-top shadow">
          <div className="d-flex flex-column align-items-center p-4 rel-title-card-profile">
            <h3 className="rel-text-title-card">{this.state.name} {this.state.lastName}</h3>
            <div className="rel-imagen-profile-card-out">
              <img
                src="./assets/img/rodrigo.jpg"
                className="rel-imagen-profile-card "
                alt=""
              />
            </div>
          </div>
          <div className="rel-body-card-profile p-4">
            <div className="rel-profile-card-personal-data">
              <h5 className="rel-title-card-body">Datos personales</h5>
              <div className="rel-body-card-profile-data">
                <i className="far fa-envelope" /> {this.state.email}
              </div>
              <div className="rel-body-card-profile-data">
                <i className="fas fa-phone" /> {this.state.phone}
              </div>
              <div className="rel-body-card-profile-data">
                <i className="far fa-id-badge mr-2" /> {this.state.code}
              </div>
            </div>
            <div className="rel-profile-card-personal-data">
              <h5 className="rel-title-card-body">Habilidades</h5>
              <div className="rel-body-card-profile-skill">UX</div>
              <div className="rel-body-card-profile-skill">FrontEnd</div>
              <div className="rel-body-card-profile-skill">Unity</div>
            </div>
            <div className="rel-profile-card-personal-data">
              <h5 className="rel-title-card-body">Proyectos</h5>
              <div className="rel-body-card-profile-proyect d-flex align-content-between flex-wrap">
                <Chip />
                <Chip />
                <Chip />
                <Chip />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
