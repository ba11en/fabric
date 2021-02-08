import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import MyFirstFabricCanvas from "./Components/MyFirstFabricCanvas";
import AlphaBelt from "./Components/AlphaBelt";

ReactDOM.render(
  // <MyFirstFabricCanvas />,
  <AlphaBelt />,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
