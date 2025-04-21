import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import Employees from './components/Employees'
import Expenses from './components/Expenses'

// index.js handles app startup, routing, and other functions
// https://www.w3schools.com/react/react_router.asp
// <Route>s can be nested. The first one has a path of / and renders the Layout component
// Nested <Route>s inherit and add to the parent route
// So the route to the page1 component would be /page1

export default function App() {
  return (
    // BrowserRouter only handles URL routing.
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='Expenses' element={<Expenses />} />
          <Route path='Employees' element={<Employees />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

