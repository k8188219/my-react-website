import React, { Component } from "react";

class AlertMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      idOfSettimeout: null
    };
  }

  clickHandler = () => {
    if (!this.state.show) return;
    this.setState({ show: false });
    setTimeout(this.props.alertDissmissHandler, 150); // for animation
  };

  getAlertType = () => {
    const { type } = this.props;
    const types = { error: "alert-danger", warning: "alert-warning", success: "alert-success" };

    return types[type] || "alert-warning";
  };

  componentDidMount() {
    if(this.props.type === "error") return
    const idOfSettimeout = setTimeout(this.clickHandler, 3000);
    this.setState({ idOfSettimeout });
  }
  componentWillUnmount() {
    clearTimeout(this.state.idOfSettimeout);
  }

  render() {
    const { show } = this.state;
    const { msg, type } = this.props;
    return (
      <div className={`alert ${this.getAlertType()} alert-dismissible fade ${show ? "show" : ""}`}>
        <button type="button" className="close" onClick={this.clickHandler}>
          &times;
        </button>
        <strong>{type || "warning"}: </strong>
        {msg}
      </div>
    );
  }
}

export default AlertMessage;
