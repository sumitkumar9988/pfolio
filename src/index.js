import React from 'react';
import ReactDOM from 'react-dom';
import  './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './store';
import ReactGA from 'react-ga';
// UA-209183733-1
// google analtics tracking ID
import mixpanel from 'mixpanel-browser';
mixpanel.init('a1590672c1769cbb672d7ec1b20e145a', {debug: true}); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
