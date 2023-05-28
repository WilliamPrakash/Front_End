import './css/App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//import ??? from '/components/???.js'

// line 8-20 is throwing a 'React' must be in scope when using JSX
export default function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>App.js header</h1>
        {/* browser router */}
      </header>
      <body>
        <h2>body</h2>
        <p>skajdhfklashvicshaaiwbeib</p>
      </body>
    </div>
  );
}

