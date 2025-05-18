import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from '../src/App.jsx';
import Layout from '../src/Layout.jsx'
import Employees from '../src/Employees.jsx'
import Expenses from '../src/Expenses.jsx'

// index.js handles app startup, routing, and other functions
// https://www.w3schools.com/react/react_router.asp
// <Route>s can be nested. The first one has a path of / and renders the Layout component
// Nested <Route>s inherit and add to the parent route
// So the route to the page1 component would be /page1

export default function Index() {
  return (
    // BrowserRouter only handles URL routing.
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<App />} />
          <Route path='Expenses' element={<Expenses />} />
          <Route path='Employees' element={<Employees />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// container??
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
