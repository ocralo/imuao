import React, { Component } from "react";
import "./Card.css";
import Chip from "../chip/Chip";
import BarProgres from "../barProgres/BarProgres";

var me;
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
      card: this.props.card,
      modalfunction: this.props.modalfunction,
      thishome: this.props.thishome,
      proyectFuntion: this.props.proyectFuntion
    };
  }

  componentWillMount() {
    var aux = [];
    me = this;
    Object.keys(me.state.skillsCard).forEach(function(k) {
      aux[k] = me.state.skillsCard[k];
      me.setState({
        skills: aux
      });
    });
  }

  handleClick(e) {
    me.state.modalfunction(me.state.thishome, me.state.card);
    console.log(e.target.className)
  }

  render() {
    me = this;
    return (
      <div className="col-md-4 col-sm-10 col-12">
        <div
          className="border rounded-bottom rel-card-background-top shadow"
          onClick={this.handleClick}
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
        >
          <div className="d-flex flex-column align-items-center p-4 rel-title-card-profile text-center">
            <h3 className="rel-text-title-card d-inline-block text-truncate w-100">
              {this.state.name} {this.state.lastName}
            </h3>
            <div className="rel-imagen-profile-card-out">
              <img
                src="./assets/img/Image_desktop.png"
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
              {Object.keys(this.state.skills).map((k, i) => {
                return (
                  <div
                    key={i}
                    className="rel-body-card-profile-skill d-flex justify-content-between mb-2 ml-2"
                  >
                    {k} <BarProgres percentage={me.state.skills[k]} />
                  </div>
                );
              })}
            </div>
            <div className="rel-profile-card-personal-data">
              <h5 className="rel-title-card-body">Proyectos</h5>
              <div className="rel-body-card-profile-proyect d-flex align-content-between flex-wrap">
                {me.state.proyectCard &&
                  Object.keys(me.state.proyectCard).map((key, i) => {
                    console.log();
                    return (
                      <Chip
                        key={i}
                        nameProyect={me.state.proyectCard[key].name}
                        card={this.state.card}
                        proyectFuntion={me.state.proyectFuntion}
                        proyect={me.state.proyectCard[key]}
                        thishome={me.state.thishome}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
