import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

/* 
  index.js typically handles your app startup, 
  routing, and other functions of your application,
  and also does require other modules to add functionality
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

