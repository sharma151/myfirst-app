import React from "react";
import ReactDOM from "react-dom";

let name = "saurav";
let ln = 13;

ReactDOM.render(
  <div>
    <h1>My name is {name}</h1>
    <p> My lucky number is {ln}</p>
  </div>,
  document.getElementById("root")
);
