import React, { Component } from "react";
import Nav from "./components/Nav";
import Login from "./components/Login";
import HookRemoteUpload from "./components/HookRemoteUpload";

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="jumbotron text-center">
          <h1>Remote-Upload.HerokuApp.Com</h1>
          <p>Upload everything to your Google Drive</p>
        </div>
        <Login>
          <HookRemoteUpload />
        </Login>
      </>
    );
  }
}

export default App;
