import React, { Component } from "react";

class AlertMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  clickHandler = () => {
    if (!this.state.show)
      return
    this.setState({ show: false });
    setTimeout(this.props.alertDissmissHandler, 150); // for animation
  };
  render() {
    const { show } = this.state;
    const { msg } = this.props;
    return (
      <div
        className={`alert alert-warning alert-dismissible fade ${
          show ? "show" : ""
        }`}
      >
        <button type="button" className="close" onClick={this.clickHandler}>
          &times;
        </button>
        <strong>Warning: </strong>
        {msg}
      </div>
    );
  }
}

export default AlertMessage;
