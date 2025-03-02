import React from 'react'
import '../css/Layout.css'
import {Outlet, Link} from 'react-router-dom'

// Code from: https://www.w3schools.com/react/react_router.asp
const Layout = () => {
    return (
    <>
      <nav>
        <ul className="navBar">
          <Link className="navLink" to="/">Home</Link>
          <Link className="navLink" to="/Page1">Page1</Link>
          <Link className="navLink" to="/">Dead Link 1</Link>
          <Link className="navLink" to="/">Dead Link 2</Link>
        </ul>
      </nav>
      <Outlet />
    </>
    )
}

export default Layout