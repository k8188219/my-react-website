import React, { Component } from "react";
import Nav from "./components/Nav";
import RemoteUpload from "./components/RemoteUpload";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="jumbotron text-center">
          <h1>Remote-Upload.HerokuApp.Com</h1>
          <p>Upload everything to your Google Drive</p>
        </div>
        <div id="alertBox" className="floating_alert"></div>
        <RemoteUpload />
      </>
    );
  }
}

export default App;
