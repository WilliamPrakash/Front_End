import React from 'react';
import './css/App.css';
import {createBrowserRouter,createRoutesFromElements,Route,Link,Outlet,RouterProvider} from 'react-router-dom';
import {page1} from './components/page1';
// ^^ page1 needs to be in brackets if it's not a default export (currently is a named export)

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<page1/>}></Route>
      </Route>
    )
  )

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>App.js header</h1>
        <RouterProvider router={router}/>
      </header>

      <body>
        <h2>body</h2>
        <p>skajdhfklashvicshaaiwbeib</p>
      </body>
    </div>
  );
}

const Root = () => {
  return (
    <> 
      <div> 
        <Link to="/"> Home </Link> 
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  )
}
