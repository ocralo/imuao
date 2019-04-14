import React, { Component } from "react";
import "./NavRigth.css";
import "bootstrap/dist/css/bootstrap.css";

export default class NavRigth extends Component {
  render() {
      return (
        <div className="container-fluid m-0 p-0 w-100 h-100 pt-2 rel-NavRigth shadow">
          <div className="ml-4 rel-title-NavRigth">
            <h1>IMUAO</h1>
          </div>
          <div
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              class="nav-link active p-3 rel-nav-link"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <div><img src="" alt=""></img> Portafolios</div>
            </a>
            <a
              class="nav-link p-3 rel-nav-link"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Perfil
            </a>
            <a
              class="nav-link p-3 rel-nav-link"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Configuración
            </a>
          </div>
        </div>
      );
  }
}
