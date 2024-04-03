import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './css/index.css';
import Home from './components/Home'
import Page1 from './components/Page1'

// index.js handles app startup, routing, and other functions

// these are the url paths
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="page1" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)*/

