import React, { Component } from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import NavRigth from "../../components/navRigth/NavRigth";
import Card from "../../components/card/Card";
import ModalCard from "../../components/modalCard/ModalCard";
import firebase from "firebase";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      card: [],
      user: {}
    };
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

        console.log(jsonCard);
      });
    });
  };

  ModalRender(e, userCard) {
    e.setState({
      user: userCard
    });
  }

  render() {
    return (
      <div className="container-fluid m-0 p-0 h-100 ">
        <ModalCard
          carduser={this.state.user}/>
        <div className="row m-0 p-0 w-100 h-100">
          <div className="col-md-2 m-0 p-0">
            <NavRigth />
          </div>
          <div className="col-md-10 m-0 p-0">
            <Header name="momo" lastName="GG" />
            <div className="container mt-5">
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
