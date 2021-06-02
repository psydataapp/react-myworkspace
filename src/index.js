import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; // ./ : 현재 디렉토리에 있는
import reportWebVitals from "./reportWebVitals";

// Root 컴포넌트를 로딩하는 영역
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//comment 추가
