import React from 'react'
import '../css/Layout.css'
import {Outlet, Link} from 'react-router-dom'

// Code from: https://www.w3schools.com/react/react_router.asp
const Layout = () => {
    return (
    <>
      <nav class="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Page1">Page1</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
    )
}

export default Layout