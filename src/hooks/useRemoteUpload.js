import { useState, useEffect } from "react";
import useInput from "./useInput";

function useRemoteUpload() {
  const [url, bindUrl, resetUrl] = useInput("");
  const [name, bindName, resetName, setName] = useInput("");
  const [alerts, setAlerts] = useState([]);
  const [list, setList] = useState({});

  const submitForm = () => {
    if (url === "" || name === "") {
      setAlerts(prevAlerts => [
        ...prevAlerts,
        {
          timestamp: new Date().getTime() + "" + prevAlerts.length,
          msg: "Please fill in all required fields.",
        },
      ]);
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
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  };

  const alertDissmissHandler = index => {
    setAlerts(prevAlerts => [
        ...prevAlerts.slice(0, index),
        ...prevAlerts.slice(index + 1),
      ]);
  };

  useEffect(() => {
    console.log('autoGenerate')
    const urlParse = /https?:\/\/.+[/]([^/?]+).*/.exec(url) || [];
    const filename = decodeURIComponent(urlParse[1] || "");
    setName(filename);
  }, [url]);

  useEffect(() => {
    console.log('mount')

    const refreshList = () => {
      if (window.debug_mode) return refreshList;
      fetch("https://remote-upload.herokuapp.com/?list", {
        credentials: "include",
      })
        .then(res => res.json())
        .then(
          result => {
            console.log(result);
            setList({...result})
          },
          error => {
            console.log(error);
          }
        );
      return refreshList;
    };
    const i = setInterval(refreshList(), 3000);
    return () => {
      clearInterval(i);
    };
  }, []);

  return [alerts, list, bindUrl, bindName, submitForm, alertDissmissHandler]
}

export default useRemoteUpload;
