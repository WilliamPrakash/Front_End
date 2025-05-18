import React from 'react'
import './css/Layout.css'
import {Outlet, Link} from 'react-router-dom'

// Code from: https://www.w3schools.com/react/react_router.asp
const Layout = () => {
    return (
    <>
      <nav>
        <ul className="navBar">
          <Link className="navLink" to="/">App</Link>
          <Link className="navLink" to="/Employees">Employees</Link>
          <Link className="navLink" to="/Expenses">Expenses</Link>
          <Link className="navLink" to="/">Dead Link</Link>
        </ul>
      </nav>
      <Outlet />
    </>
    )
}

export default Layout