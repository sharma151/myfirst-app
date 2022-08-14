import React from "react";
import ReactDOM from "react-dom";

const date = new Date(2022, 1, 1, 10);
const currentTime = date.getHours();
let customStyle = {
  color: "",
};
let greeting;
if (currentTime <= 12) {
  greeting = "GoodMorning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "GoodAfternoon";
  customStyle.color = "green";
} else {
  greeting = "GoodNight";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 style={customStyle}>{greeting}</h1>
  </div>,
  document.getElementById("root")
);
