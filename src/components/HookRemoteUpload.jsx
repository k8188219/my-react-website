import React from "react";
import AlertMessage from "./AlertMessage";
import useRemoteUpload from "../hooks/useRemoteUpload";

function HookRemoteUpload() {
  const [alerts, list, bindUrl, bindName, submitForm, alertDissmissHandler] = useRemoteUpload();
  return (
    <>
      <div id="alertBox" className="floating_alert">
        {alerts.map((props, i) => (
          <AlertMessage
            alertDissmissHandler={() => {
              alertDissmissHandler(props.key);
            }}
            {...props}
          />
        ))}
      </div>
      <div className="container px-0 py-4 vh-100">
        <div className="bg-transparent-white shadow rounded py-4 py-md-5 px-4 px-md-5 h-100 position-relative overflow-hidden d-flex flex-column">
          <form action="" method="get" id="form">
            <div className="form-row pt-2 justify-content-end" style={{ overflow: "auto" }}>
              <div className="col-xl-4 col-lg-5 col-sm-6 col-12">
                <input type="text" className="form-control mb-2 mr-sm-2" placeholder="url" {...bindUrl} />
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-4 col">
                <input type="text" className="form-control mb-2 mr-sm-2" placeholder="name" {...bindName} />
              </div>
              <input onClick={submitForm} type="button" className="btn btn-primary mb-2" value="Submit" />
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
              <tbody id="list">
                {Object.keys(list).map((key) => {
                  return (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{list[key]}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="japanese-cube blur"></div>
        </div>
      </div>
    </>
  );
}

export default HookRemoteUpload;
