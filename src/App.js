import React from 'react';
import './css/App.css';
import Page1 from './components/Page1.jsx'
// why use functional react? 
// https://stackoverflow.com/questions/36097965/when-to-use-es6-class-based-react-components-vs-functional-es6-react-components#:~:text=React.,using%20them%20in%20new%20code.%22

export default function App() {
    return (
    <div className='App'>
      <h1>App.js</h1>
      <Page1/>
    </div>
  );
}

