import React, { useState, useEffect } from 'react'
import Employee from './Employee.jsx'
import $ from 'jquery'

export default function EmployeeList() {
    const [employeeData, setEmployeeData] = useState([])

    /* Data needs to be fetched before mount (insertion into the DOM)
       The useEffect hook fetches data within the hook, which is executed before mount */
    useEffect(() => {
        // Fetch data from API
        $.get({
            type: 'GET',
            url: 'http://127.0.0.1:5215/api/Employees/GetEmployees',
            dataType: 'JSON',
            success: function(data) {
                console.log(data)
                setEmployeeData(data)
            }
        })
    }, [])
    /* The second arg for useEffect() is an optional list of dependencies. If omitted,
        useEffect() will re-run after every re-render of the component. */

    return (
        <ul>
            {employeeData.map(emp => (
                <Employee key={emp.id} employee={emp} />
            ))}
        </ul>
    )
}