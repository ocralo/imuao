import React, { Component } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/header/Header";

export default class Home extends Component {
    render(){
        return (
            <Header name="momo" lastName="GG"/>
        )
    }
}
