import React, { Component } from "react";
import "./Proyect.css";
import TagPill from "../tagPill/TagPill";
import ProyectImageCard from "../proyectImageCard/ProyectImageCard";

var me;
export default class Proyect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateDiv: this.props.stateDiv,
      card: this.props.card,
      proyect: this.props.proyect,
      thishome: this.props.thishome,
      proyectFuntion: this.props.proyectFuntion
    };
  }
  handleClick(e) {
    me.state.proyectFuntion(me.state.thishome, me.state.card, "none", "block");
    //me.state.thishome;
  }
  render() {
    me = this;
    const divStyle = {
      display: this.props.stateDiv
    };
    return (
      <div className="container-fluid" style={divStyle}>
        <div className="row">
          <div className="col-12">
            <div className="row rel-head-proyect">
              <i
                className="fas fa-chevron-left rel-arrow-proyect text-white-50"
                onClick={this.handleClick}
              />
              <h1 className="text-center text-light w-100 mt-4 rel-text-title-proyect">
                {this.props.proyect.name}
              </h1>
              <div className="rel-img-profile-proyect">
                <div className="rel-imagen-profile-proyect-out">
                  <img
                    src="./assets/img/Image_desktop.png"
                    className="rel-imagen-profile-proyect"
                    alt=""
                  />
                </div>
                <div className="rel-profile-data-proyect pl-3">
                  <h3 className="text-white">
                    {this.props.card.name} {this.props.card.lastname}
                  </h3>
                  <p className="text-white">{this.props.card.code}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 offset-md-2 rel-text-proyect">
                <p>{this.props.proyect.description}.</p>
                <div className="d-flex flex-wrap">
                  <TagPill tagProyect={me.props.proyect.type} />
                </div>
                <div className="mt-5">
                  <h3 className="rel-title-other">Otros proyectos</h3>
                  <div className="row ml-0">
                    {this.props.card.portfolio &&
                      Object.keys(this.props.card.portfolio).map(
                        (key, i) => {
                          if (
                            this.props.card.portfolio[key].name !==
                            me.props.proyect.name
                          ) {
                            return (
                              <ProyectImageCard
                                key={i}
                                titleProyect={
                                  me.props.card.portfolio[key].name
                                }
                                tagProyect={
                                  me.props.card.portfolio[key].type
                                }
                                descriptionProyect={
                                  me.props.card.portfolio[key].description
                                }
                              />
                            );
                          } else {
                            return null;
                          }
                        }
                      )}
                  </div>
                </div>
              </div>
              <div className="col-md-5 ">
                <div className="rel-video-proyect">
                  <iframe
                    title="proyect"
                    width="560"
                    height="315"
                    src={
                      "https://www.youtube.com/embed/" +
                      (me.props.proyect.url &&
                        me.props.proyect.url.slice(
                          me.props.proyect.url.length - 11,
                          me.props.proyect.url.length
                        ))
                    }
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="mt-4">
                  <h5 className="rel-title-other">
                    Imágenes del proyecto IMUAO
                  </h5>
                  <div className="rel-img-proyects">
                    <img
                      className="rounded"
                      src="./assets/img/Image_desktop.png"
                      alt=""
                    />
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
