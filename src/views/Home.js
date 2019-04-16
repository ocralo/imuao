import React, { Component } from "react";
import "./Home.css";
import Header from "../components/header/Header";
import NavRigth from "../components/navRigth/NavRigth";
import Card from "../components/card/Card";
import firebase from "firebase";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      card: []
    };
    this.title = React.createRef();
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
          lastname: val.lastName,
          name: val.name,
          phone: val.phone
        };
        auxCard.push(jsonCard);
        me.setState({
          card: auxCard
        });

        console.log(snapshot.val());
      });
      /*this.setState({
        card: snapshot.val(),
        name: snapshot.name
      });*/
    });
  };

  render() {
    return (
      <div className="container-fluid m-0 p-0 h-100 ">
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
                      console.log(key);
                      return (
                        <Card
                          name={key.name}
                          lastName={key.lastName}
                          code={key.code}
                          email={key.email}
                          phone={key.phone}
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
