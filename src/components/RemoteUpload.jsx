import React, { Component } from "react";

class RemoteUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      name: "",
    };
  }
  autoGenerateFileName = (event) => {
    let urlParse = /https?:\/\/.+[/]([^/?]+).*/.exec(event.target.value) || []
    let filename = decodeURIComponent(urlParse[1] || "")
    this.setState({ url: event.target.value, name: filename })
  };

  submitForm = () => {
    fetch("/", { body: JSON.stringify(this.state), method: "POST" })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )
  }

  refreshList = () => {
    if (window.debug_mode) return this.refreshList;
    fetch("/?list")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error)
        }
      );
    return this.refreshList;
  };
  componentDidMount() {
    setInterval(this.refreshList(), 3000)
  }

  render() {
    return (
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
    );
  }
}

export default RemoteUpload;
