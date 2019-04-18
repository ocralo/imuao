import React, { Component } from "react";
import "./ModalCard.css";

export default class ModalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carduser: this.props.carduser
    };
    this.showCardProyects = this.showCardProyects.bind(this);
  }

  showCardProyects(card) {
    console.log("holi bb")
  }


  render() {
    return (
      <div className="rel-modal-card">
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {this.state.name} {this.state.lastname}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
