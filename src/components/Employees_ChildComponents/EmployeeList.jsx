/* Source: https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import
Importing things from a module outside of curly braces is a default import. It doesn't matter
what name youre assigning it when importing, because it always resolves to whatever the
default export is. Importing things inside curly braces is a named import. It only works
if the file you're importing from contains an import with the same name. In this case,
the name matters 'cause you're importing a specific thing by it's export name. A module can
have only one default export, but as many named exports as you'd like. */
import React, { useState, useEffect } from 'react'
import Employee from './Employee.jsx'
import $ from 'jquery'

// Source for useEffect logic: https://dev.to/sergioholgado/how-to-fetch-data-before-rendering-in-react-js-3750

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
        useEffect() will re-run after every re-render of the component.
    */

    return (
        <ul>
            {employeeData.map(emp => (
                <Employee key={emp.id} employee={emp} />
            ))}
        </ul>
    )
}