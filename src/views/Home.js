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
      card: {}
    };
    this.title = React.createRef();
  }

  componentWillMount() {
    const attemptCard = firebase
      .database()
      .ref()
      .child("users");

    attemptCard.on("value", snapshot => {
      this.setState({
        card: snapshot.val()
      });
      console.log(this.state.card);
    });
  }

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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
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
