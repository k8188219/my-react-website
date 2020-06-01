import React, { Component } from "react";
const LOGIN_STATE = {
  INIT: 0,
  NOT_LOGIN: 1,
  LOGIN: 2
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: LOGIN_STATE.INIT
    };
  }
  initToolTip = () => {
    window.$('[data-toggle="tooltip"]').tooltip();
  };
  chechLogin = () => {
    fetch("https://remote-upload.herokuapp.com/", { redirect: "manual", credentials: "include" }).then((res) => {
      if (res.type === "opaqueredirect") {
        console.log("notLogin");
        this.setState({ login: LOGIN_STATE.NOT_LOGIN });
      } else {
        this.setState({ login: LOGIN_STATE.LOGIN });
      }
    }, console.log);
  };
  handleClick = () => {
    const top = window.screen.height > 600 ? (window.screen.height - 600) / 2 : 0;
    const left = window.screen.width > 600 ? (window.screen.width - 600) / 2 : 0;
    const newWindow = window.open(
      "https://remote-upload.herokuapp.com/",
      "",
      `toolbar=no,location=yes,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=599,height=600,top=${top},left=${left}`
    );
    const timer = setInterval(() => {
      if (newWindow.closed) {
        clearInterval(timer);
        this.chechLogin();
      }
    }, 100);
  };

  componentDidMount() {
    this.chechLogin();
  }

  componentDidUpdate() {
    this.initToolTip();
  }

  loginPage = ({show = false} = {}) => {
    return (
      <>
        <div className="modal-backdrop show"></div>
        <div className={`modal d-block fade ${show ? "show" : ""}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <form className="form-signin text-center">
                  <svg className="mb-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="135" height="135">
                    <path
                      fill="#bbdefb"
                      d="M24,5c10.477,0,19,8.523,19,19s-8.523,19-19,19S5,34.477,5,24S13.523,5,24,5z"
                    ></path>
                    <path fill="#3f51b5" d="M32 24L20 14 20 34z"></path>
                    <path fill="#3f51b5" d="M5 21H22V27H5z"></path>
                  </svg>
                  <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email address" disabled />
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password" disabled />
                  <span tabIndex="0" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                    <input className="btn btn-lg btn-primary btn-block" value="Sign in" disabled />
                  </span>

                  <div className="mt-1 mb-1">- OR -</div>
                  <div className="btn btn-block btn-lg btn-outline-primary mb-5" onClick={this.handleClick}>
                    <img
                      className="navbar-toggler-icon"
                      alt=""
                      src="https://img.icons8.com/color/48/000000/google-logo.png"
                    />
                    <span className="pl-2 pr-2">Sign in</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  render() {
    const arr = {
      [LOGIN_STATE.INIT]: this.loginPage(),
      [LOGIN_STATE.NOT_LOGIN]: this.loginPage({show: true}),
      [LOGIN_STATE.LOGIN]: this.props.children
    };
    return arr[this.state.login];
  }
}

export default Login;
