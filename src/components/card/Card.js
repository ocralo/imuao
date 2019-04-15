import React, { Component } from "react";
import "./Card.css";
import Chip from "../chip/Chip";

export default class Card extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="border mt-4 rel-card-background-top shadow">
          <div className="d-flex flex-column align-items-center p-4 rel-title-card-profile">
            <h3 className="rel-text-title-card">Rodrigo Escobar Lopez</h3>
            <img
              src="./assets/img/rodrigo.jpg"
              className="rel-imagen-profile-card"
              alt=""
            />
          </div>
          <div className="rel-body-card-profile p-4">
            <div className="rel-profile-card-personal-data">
              <h5 className="rel-title-card-body">Datos personales</h5>
              <div className="rel-body-card-profile-data">
                <i className="far fa-envelope" />{" "}
                rodrigo.escobar_lop@uao.edu.co
              </div>
              <div className="rel-body-card-profile-data">
                <i className="fas fa-phone" /> 3124556789
              </div>
              <div className="rel-body-card-profile-data">
                <i className="far fa-id-badge mr-2" /> 2104567
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
