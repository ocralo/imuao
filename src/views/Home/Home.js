import React, { Component } from "react";
import "./Home.css";
/**Se importa la libreria firebase */
import firebase from "firebase";

/**
 * Se importan los componentes que se utilizaran a la vista Home
 */
import Header from "../../components/header/Header";
import NavRigth from "../../components/navRigth/NavRigth";
import Card from "../../components/card/Card";
import ModalCard from "../../components/modalCard/ModalCard";
import Proyect from "../../components/proyect/Proyect";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      card: [],
      proyectCard: {},
      user: {},
      displayProyect: "none",
      displayCards: "block"
    };
    this.SeeCard = this.SeeCard.bind(this);
  }
  /**Metodo que se ejecuta antes que se renderice el componente en el DOM
   * en este metodo se leen los datos de firebase, para luego guardarlo en la variable card
   */
  componentWillMount = event => {
    const attemptCard = firebase
      .database()
      .ref()
      .child("users");

    attemptCard.on("value", snapshot => {
      var me = this;
      snapshot.forEach(function(Snapshot) {
        var auxCard = me.state.card;
        var val = Snapshot.val();
        var jsonCard = {
          code: val.code,
          email: val.email,
          lastname: val.lastname,
          name: val.name,
          phone: val.phone,
          skills: val.skills,
          portfolio: val.portfolio
        };
        auxCard.push(jsonCard);
        me.setState({
          card: auxCard
        });
      });
    });
  };
  /**Metodo que cambia los datos que se enviaran a la modal */
  ModalRender(e, userCard) {
    e.setState({
      user: userCard
    });
  }
  /**Metodo que cambia los datos que se envian al comoponente proyec,
   * en el que se recibe los datos del usuario de la card que se mostrara,
   * si el display de la card o del proyecto esta en bloque o ninguna y
   * los datos del proyecto que se selecciono */
  SeeCard(e, userCard, displayProyect, displayCards, proyectCard) {
    e.setState({
      user: userCard,
      displayProyect: displayProyect,
      displayCards: displayCards,
      proyectCard: proyectCard
    });
  }

  render() {
    const divStyle = {
      display: this.state.displayCards
    };
    return (
      <div className="container-fluid m-0 p-0 h-100 ">
        <ModalCard
          carduser={this.state.user}
          proyectFuntion={this.SeeCard}
          thishome={this}
        />
        <div className="row m-0 p-0 w-100 h-100">
          <div className="col-md-2 m-0 p-0">
            <NavRigth />
          </div>
          <div className="col-md-10 m-0 p-0">
            <Header name="" lastName="" />
            <Proyect
              stateDiv={this.state.displayProyect}
              card={this.state.user}
              thishome={this}
              proyectFuntion={this.SeeCard}
              proyect={this.state.proyectCard}
            />
            <div className="container mt-5" style={divStyle}>
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    {this.state.card.map((key, i) => {
                      return (
                        <Card
                          key={key.code}
                          name={key.name}
                          lastName={key.lastname}
                          code={key.code}
                          email={key.email}
                          phone={key.phone}
                          skills={key.skills}
                          portfolio={key.portfolio}
                          card={key}
                          modalfunction={this.ModalRender}
                          thishome={this}
                          proyectFuntion={this.SeeCard}
                        />
                      );
                    })}
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
