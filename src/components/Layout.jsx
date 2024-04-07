import React from 'react'
import {Outlet, Link} from 'react-router-dom'

// Code from: https://www.w3schools.com/react/react_router.asp
const Layout = () => {
    return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Page1">Blogs</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
    )
}

export default Layout