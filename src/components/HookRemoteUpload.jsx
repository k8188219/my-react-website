import React from "react";
import AlertMessage from "./AlertMessage";
import useRemoteUpload from "../hooks/useRemoteUpload";

function HookRemoteUpload() {
  const [
    alerts,
    list,
    bindUrl,
    bindName,
    submitForm,
    alertDissmissHandler,
  ] = useRemoteUpload();
  return (
    <>
      <div id="alertBox" className="floating_alert">
        {alerts.map(({ msg, timestamp }, i) => (
          <AlertMessage
            key={timestamp}
            msg={msg}
            alertDissmissHandler={() => {
              alertDissmissHandler(i);
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
                placeholder="url"
                {...bindUrl}
              />
            </div>
            <div className="col-md-2 col-sm-4 col-8">
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                placeholder="name"
                {...bindName}
              />
            </div>
            <div className="col-md-1 col-sm-2 col-4">
              <input
                onClick={submitForm}
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
            <tbody id="list">
              {Object.keys(list).map((key) => {
                return (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{list[key]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default HookRemoteUpload;
