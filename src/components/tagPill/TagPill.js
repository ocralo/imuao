import React, { Component } from "react";
import "./TagPill.css";

export default class TagPill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagProyect: this.props.tagProyect
    };
  }
  render() {
    return (
      <div
        className="rel-tag d-flex align-items-center border rounded-pill m-1 bg-warning shadow-sm"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        <span className="rel-tag-text">{this.props.tagProyect}</span>
      </div>
    );
  }
}
