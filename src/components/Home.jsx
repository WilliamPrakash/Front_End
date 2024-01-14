import React from 'react'
import {createBrowserRouter,createRoutesFromElements,Route,Link,Outlet,RouterProvider} from 'react-router-dom';
// ^^ components needs to be in brackets if it's not a default export (currently is a named export)
// this is being weird, come back to this page later

export default function home() {
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Root/>}>
            <Route path="./components/home" element={<home/>}/>
          </Route>
        )
      )
    
      return (
        <div className='App'>
          <header className='App-header'>
            <h1>Home component</h1>
            <RouterProvider router={router}/>
          </header>
    
          <body>
            <h2>body</h2>
            <p>skajdhfklashvicshaaiwbeib</p>
          </body>
        </div>
      )
}

const Root = () => {
    return (
      <> 
        <div> 
          <Link to="/"> Home </Link>
          <Link to="./components/home"> home </Link>
        </div>
        <div>
          <Outlet/>
        </div>
      </>
    )
}
