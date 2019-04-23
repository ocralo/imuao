import React, { Component } from "react";
import "./NavRigth.css";

export default class NavRigth extends Component {
  render() {
    return (
      <div className="container-fluid m-0 p-0 h-100  rel-NavRigth shadow">
        <div
          className="nav flex-column nav-pills pt-2 sticky-top w-100"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <div className="ml-4 rel-title-NavRigth">
            <h1 className="w-100">IMUAO</h1>
          </div>
          <a
            className="nav-link active p-3 rel-nav-link w-100"
            id="v-pills-home-tab"
            data-toggle="pill"
            href="#v-pills-home"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            <div className="d-inline-block text-truncate w-100">
              <i className="far fa-id-badge mr-2 rel-nav-icon" />
              Portafolios
            </div>
          </a>
          <a
            className="nav-link p-3 rel-nav-link w-100"
            id="v-pills-profile-tab"
            data-toggle="pill"
            href="#v-pills-profile"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            <div className="d-inline-block text-truncate w-100">
              <i className="far fa-user rel-nav-icon mr-2" />
              Perfil
            </div>
          </a>
          <a
            className="nav-link p-3 rel-nav-link w-100"
            id="v-pills-messages-tab"
            data-toggle="pill"
            href="#v-pills-messages"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            <div className="d-inline-block text-truncate w-100">
              <i className="fas fa-cog mr-2 rel-nav-icon" />
              Configuración
            </div>
          </a>
        </div>
      </div>
    );
  }
}
