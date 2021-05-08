import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//install service worker when website is loaded
if ('serviceWorker' in navigator) { //<- check if the browser supports serviceworker
  navigator.serviceWorker.register('sw.js') //<- install serviceworker
    .then((registeration) => { console.log("Registeration is successful. scope is: ", registeration.scope); })
    .catch((error) => { console.log("serviceworker registeration failed. error: ", error); })
}