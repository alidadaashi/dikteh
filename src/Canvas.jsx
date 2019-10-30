import React, { useState, useEffect } from "react";
import Question from "./Question";
import db from "../db.json";
const Canvas = () => {
  const [state, setState] = useState([{ A: "...", B: "..." }]);

  const getData = () => {
    fetch("https://my-json-server.typicode.com/alidadaashi/dikteh/db")
      // Call the fetch function passing the url of the API as a parameter
      .then(resp => resp.json())
      .then(function(data) {
        setState(data.posts);
        // Your code for handling the data you get from the API
      })
      .catch(function() {
        // This is where you run code if the server returns any errors
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="questions mt-3">
      <div className="questions__container col-lg-11 mx-auto">
        <h3 className="questions__title text-center">
          لطفا گزینه درست را انتخاب کنید
        </h3>
        <Question test={state} />
      </div>
    </div>
  );
};

export default Canvas;
