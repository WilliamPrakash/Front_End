import React from 'react';
import './css/App.css';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import page1 from './components/page1'

export default function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>App.js header</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/page1"></Route>
          </Routes>
        </BrowserRouter>
      </header>

      <body>
        <h2>body</h2>
        <p>skajdhfklashvicshaaiwbeib</p>
      </body>
    </div>
  );
}

