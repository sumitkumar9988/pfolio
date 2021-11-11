import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import ReactGA from "react-ga";
import PortfolioPage from "./Portfolio/Route";
// UA-209183733-1

const parsedData = window.location.host.split(".");

if (parsedData.length >= 3) {
  const subDomain = parsedData[0];
  console.log("subdomin", subDomain);
  if (subDomain === "www") {
    window.location.assign("https://firstletter.tech");
  }
  ReactDOM.render(
    <PortfolioPage username={subDomain} />,
    document.getElementById("root")
  );
} else {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
