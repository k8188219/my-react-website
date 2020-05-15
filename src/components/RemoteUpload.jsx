import React, { Component } from "react";
import AlertMessage from "./AlertMessage";

class RemoteUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      name: "",
      alerts: [],
    };
  }

  autoGenerateFileName = ({target}) => {
    const urlParse = /https?:\/\/.+[/]([^/?]+).*/.exec(target.value) || [];
    const filename = decodeURIComponent(urlParse[1] || "");
    this.setState({ url: target.value, name: filename });
  };

  submitForm = () => {
    const { url, name } = this.state;

    if (url === "" || name === "") {
      this.setState((prevState) => ({
        alerts: [
          ...prevState.alerts,
          {
            timestamp: new Date().getTime() + "" + this.state.alerts.length,
            msg: "Please fill in all required fields.",
          },
        ],
      }));
      return;
    }

    fetch("https://remote-upload.herokuapp.com/", {
      body: new URLSearchParams({
        url,
        name,
      }).toString(),
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/x-www-form-urlencoded" },
    }).then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  refreshList = () => {
    if (window.debug_mode) return this.refreshList;
    fetch("https://remote-upload.herokuapp.com/?list", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    return this.refreshList;
  };

  componentDidMount() {
    //setInterval(this.refreshList(), 3000);
  }
  alertDissmissHandler = (index) => {
    this.setState((prevState) => ({
      alerts: [
        ...prevState.alerts.slice(0, index),
        ...prevState.alerts.slice(index + 1),
      ],
    }));
  };

  render() {
    return (
      <>
        <div id="alertBox" className="floating_alert">
          {this.state.alerts.map(({ msg, timestamp }, i) => (
            <AlertMessage
              key={timestamp}
              msg={msg}
              alertDissmissHandler={() => {
                this.alertDissmissHandler(i);
              }}
            />
          ))}
        </div>
        <div className="container">
          <form action="" method="get" id="form">
            <div className="form-row" style={{ overflow: "auto" }}>
              <div className="col-md-4 col-sm-6 col-12">
                <input
                  type="text"
                  className="form-control mb-2 mr-sm-2"
                  name="url"
                  placeholder="url"
                  onChange={this.autoGenerateFileName}
                  value={this.state.url}
                />
              </div>
              <div className="col-md-2 col-sm-4 col-8">
                <input
                  type="text"
                  className="form-control mb-2 mr-sm-2"
                  name="name"
                  placeholder="name"
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                  }}
                  value={this.state.name}
                />
              </div>
              <div className="col-md-1 col-sm-2 col-4">
                <input
                  onClick={this.submitForm}
                  type="button"
                  className="btn btn-primary mb-2"
                  value="Submit"
                />
              </div>
            </div>
          </form>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th style={{ width: "60%" }}>Name</th>
                  <th style={{ width: "40%" }}>Progress</th>
                </tr>
              </thead>
              <tbody id="list"></tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default RemoteUpload;
