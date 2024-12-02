import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import Page1 from './components/Page1'

// index.js handles app startup, routing, and other functions
// https://www.w3schools.com/react/react_router.asp
// <Route>s can be nested. The first one has a path of / and renders the Layout component
// Nested <Route>s inherit and add to the parent route
// So the route to the page1 component would be /page1

export default function App() {
  return (
    // BrowserRouter only handles URL routing. Without the Layout, you'd need to manually manipulate the URL
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='page1' element={<Page1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

