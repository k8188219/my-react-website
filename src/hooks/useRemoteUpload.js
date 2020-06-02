import { useState, useEffect } from "react";
import useInput from "./useInput";

function useRemoteUpload() {
  const [url, bindUrl, resetUrl] = useInput("");
  const [name, bindName, resetName, setName] = useInput("");
  const [alerts, setAlerts] = useState([]);
  const [list, setList] = useState({});

  const refreshList = (cb) => {
    fetch("https://remote-upload.herokuapp.com/?list", {
      credentials: "include"
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          cb && cb({ ...result });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const submitForm = () => {
    if (url === "" || name === "") {
      setAlerts((prevAlerts) => [
        ...prevAlerts,
        {
          key: new Date().getTime() + "" + prevAlerts.length,
          msg: "Please fill in all required fields."
        }
      ]);
      return;
    }

    fetch("https://remote-upload.herokuapp.com/", {
      body: new URLSearchParams({
        url,
        name
      }).toString(),
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/x-www-form-urlencoded" }
    }).then(
      (result) => {
        setAlerts((prevAlerts) => [
          ...prevAlerts,
          {
            type: "success",
            key: new Date().getTime() + "" + prevAlerts.length,
            msg: name + " add into upload queue."
          }
        ]);
        refreshList(setList);
      },
      (error) => {
        setAlerts((prevAlerts) => [
          ...prevAlerts,
          {
            type: "error",
            key: new Date().getTime() + "" + prevAlerts.length,
            msg: "An error occurred."
          }
        ]);
        console.log(error);
      }
    );
    resetUrl();
    resetName();
  };

  const alertDissmissHandler = (key) => {
    setAlerts((prevAlerts) => {
      const index = prevAlerts.findIndex((alert) => alert.key === key);
      return [...prevAlerts.slice(0, index), ...prevAlerts.slice(index + 1)];
    });
  };

  useEffect(() => {
    const urlParse = /https?:\/\/.+[/]([^/?]+).*/.exec(url) || [];
    const filename = decodeURIComponent(urlParse[1] || "");
    setName(filename);
  }, [url, setName]);

  useEffect(() => {
    refreshList(setList);
    const i = setInterval(refreshList, 3000, setList);
    return () => {
      clearInterval(i);
    };
  }, []);

  return [alerts, list, bindUrl, bindName, submitForm, alertDissmissHandler];
}

export default useRemoteUpload;
