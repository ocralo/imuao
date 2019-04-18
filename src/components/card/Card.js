import React, { Component } from "react";
import "./Card.css";
import Chip from "../chip/Chip";
import BarProgres from "../barProgres/BarProgres";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      lastName: this.props.lastName,
      code: this.props.code,
      email: this.props.email,
      phone: this.props.phone,
      skillsCard: this.props.skills,
      skills: [],
      proyectCard: this.props.portfolio,
      proyect: []
    };
  }

  componentWillMount() {
    var me = this;
    var aux = [];
    var aux2 = [];
    Object.keys(me.state.skillsCard).forEach(function(k) {
      aux[k] = me.state.skillsCard[k];
      me.setState({
        skills: aux
      });
    });

    Object.keys(me.state.proyectCard).forEach(function(k,i) {
      aux2[i] = me.state.proyectCard[k].name;
      me.setState({
        proyect: aux2
      });
    });
  }

  render() {
    var me = this;
    return (
      <div className="col-md-4 col-sm-10 col-12">
        <div className="border mt-4 rel-card-background-top shadow">
          <div className="d-flex flex-column align-items-center p-4 rel-title-card-profile text-center">
            <h3 className="rel-text-title-card d-inline-block text-truncate w-100">
              {this.state.name} {this.state.lastName}
            </h3>
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
              <div className="rel-body-card-profile-data d-inline-block text-truncate w-100">
                <i className="far fa-envelope mr-2" />
                {this.state.email}
              </div>
              <div className="rel-body-card-profile-data d-inline-block text-truncate w-100">
                <i className="fas fa-phone mr-2" />
                {this.state.phone}
              </div>
              <div className="rel-body-card-profile-data d-inline-block text-truncate w-100">
                <i className="far fa-id-badge mr-2 ml-1" />
                {this.state.code}
              </div>
            </div>
            <div className="rel-profile-card-personal-data">
              <h5 className="rel-title-card-body">Habilidades</h5>
              {Object.keys(this.state.skills).map(function(k) {
                return (
                  <div key={k} className="rel-body-card-profile-skill d-flex justify-content-between mb-2">
                    {k} <BarProgres percentage={me.state.skills[k]} />
                  </div>
                );
              })}
            </div>
            <div className="rel-profile-card-personal-data">
              <h5 className="rel-title-card-body">Proyectos</h5>
              <div className="rel-body-card-profile-proyect d-flex align-content-between flex-wrap">
                {this.state.proyect.map((key) => {
                  return <Chip key={key} nameProyect={key} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
