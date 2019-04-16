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
      ux: ""
    };
    this.title = React.createRef();
  }

  componentWillMount() {
    var me = this;
    var aux = [];
    Object.keys(me.state.skillsCard).forEach(function(k) {
      aux[k] = me.state.skillsCard[k];
      me.setState({
        skills: aux
      });
    });
  }

  componentDidMount() {
    console.log(this.state.skills.FrontEnd);
  }

  render() {
    var me = this;
    Object.keys(this.state.skills).forEach(function(k) {
      console.log(k + " - " + me.state.skills[k]);
    });
    return (
      <div className="col-md-4 col-sm-10 col-12">
        <div className="border mt-4 rel-card-background-top shadow">
          <div className="d-flex flex-column align-items-center p-4 rel-title-card-profile">
            <h3 className="rel-text-title-card">
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
              <div className="rel-body-card-profile-data">
                <i className="far fa-envelope mr-2" />
                {this.state.email}
              </div>
              <div className="rel-body-card-profile-data">
                <i className="fas fa-phone mr-2" />
                {this.state.phone}
              </div>
              <div className="rel-body-card-profile-data">
                <i className="far fa-id-badge mr-2 ml-1" />
                {this.state.code}
              </div>
            </div>
            <div className="rel-profile-card-personal-data">
              <h5 className="rel-title-card-body">Habilidades</h5>
              {Object.keys(this.state.skills).map(function(k) {
                return (
                  <div className="rel-body-card-profile-skill d-flex justify-content-between mb-2">
                    {k}{" "}
                    <BarProgres
                      percentage={me.state.skills[k]}
                    />
                  </div>
                )
              })}
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
