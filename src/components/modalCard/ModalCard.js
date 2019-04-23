import React, { Component } from "react";
import "./ModalCard.css";
import BarProgres from "../barProgres/BarProgres";
import ProyectImageCard from "../proyectImageCard/ProyectImageCard";

export default class ModalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carduser: this.props.carduser,
      skillsCard: this.props.carduser.skills,
      skill: [],
      thishome: this.props.thishome,
      proyectFuntion: this.props.proyectFuntion
    };
  }

  render() {
    var me = this;
    return (
      <div className="rel-modal-card">
        <div
          className="modal fade bd-example-modal-lg"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
          id="modalcard"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header rel-modal-header text-center border-0">
                <div className="rel-imagen-profile-modal-out">
                  <img
                    src="./assets/img/Image_desktop.png"
                    className="rel-imagen-profile-modal "
                    alt=""
                  />
                </div>
                <div className="d-flex flex-column w-100 h-100 ml-4">
                  <h3 className="modal-title w-100 text-white mb-2">
                    {this.props.carduser.name} {this.props.carduser.lastname}
                  </h3>
                  <p className="text-white-50">{this.props.carduser.code}</p>
                </div>
                <button
                  type="button"
                  className="close text-light"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body border-0">
                <div className="row">
                  <div className="col-md-3 mt-5">
                    <div className="rel-profile-model-personal-data">
                      <h5 className="rel-title-model-body">Datos personales</h5>
                      <div className="rel-body-model-profile-data d-inline-block text-truncate w-100">
                        <i className="far fa-envelope mr-2" />
                        {this.props.carduser.email}
                      </div>
                      <div className="rel-body-model-profile-data d-inline-block text-truncate w-100">
                        <i className="fas fa-phone mr-2" />
                        {this.props.carduser.phone}
                      </div>
                      <div className="rel-body-model-profile-data d-inline-block text-truncate w-100">
                        <i className="far fa-id-badge mr-2 ml-1" />
                        {this.props.carduser.code}
                      </div>
                    </div>
                    <div className="rel-profile-card-personal-data">
                      <h5 className="rel-title-card-body">Habilidades</h5>
                      {this.props.carduser.skills &&
                        Object.keys(this.props.carduser.skills).map(
                          (key, i) => {
                            //return me.props.carduser.skills[key];
                            return (
                              <div
                                key={i}
                                className="rel-body-card-profile-skill mb-2 ml-2"
                              >
                                {key}{" "}
                                <BarProgres
                                  percentage={me.props.carduser.skills[key]}
                                />
                              </div>
                            );
                          }
                        )}
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row mr-2 overflow-auto rel-modal-proyect-card">
                      {this.props.carduser.portfolio &&
                        Object.keys(this.props.carduser.portfolio).map(
                          (key, i) => {
                            return (
                              <ProyectImageCard
                                titleProyect={
                                  this.props.carduser.portfolio[key].name
                                }
                                tagProyect={
                                  this.props.carduser.portfolio[key].type
                                }
                                descriptionProyect={
                                  this.props.carduser.portfolio[key].description
                                }
                                key={i}
                                thishome={this.state.thishome}
                                proyectFuntion={this.state.proyectFuntion}
                                proyect={this.state.carduser.portfolio}
                                user={this.state.carduser}
                              />
                            );
                          }
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
