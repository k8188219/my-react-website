import React, { Component } from "react";
import Nav from "./components/Nav";
import Login from "./components/Login";
import HookRemoteUpload from "./components/HookRemoteUpload";

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="jumbotron bg-lite-purple text-center mb-4">
          <h1>Remote-Upload.HerokuApp.Com</h1>
          <p>Upload everything to your Google Drive</p>
        </div>
        <Login>
          <>
            <div id="message" className="container bg-lite-purple shadow rounded py-4 px-4 px-md-5">
              <p className="mb-0">
                <strong>HI! </strong>If you are a guest your file will be uploaded to{" "}
                <a
                  href="https://drive.google.com/drive/folders/12EBu-uQ5q5dj6fsrL1bDIeqUiZnyQRA8"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  here
                </a>
                . And your maximum upload file size is 20MB.
              </p>
            </div>
            <HookRemoteUpload />
          </>
        </Login>
      </>
    );
  }
}

export default App;
