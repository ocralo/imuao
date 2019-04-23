import React, { Component } from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import NavRigth from "../../components/navRigth/NavRigth";
import Card from "../../components/card/Card";
import ModalCard from "../../components/modalCard/ModalCard";
import firebase from "firebase";
import Proyect from "../../components/proyect/Proyect";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      card: [],
      proyectCard:{},
      user: {},
      displayProyect: "none",
      displayCards:"block"
    };
    this.SeeCard = this.SeeCard.bind(this);
  }

  componentDidMount = event => {
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

  ModalRender(e, userCard) {
    e.setState({
      user: userCard
    });
  }

  SeeCard(e, userCard, dProyect, dCards, proyectCard) {
    e.setState({
      user: userCard,
      displayProyect: dProyect,
      displayCards: dCards,
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
            <Header name="" lastName=""/>
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
