import React from 'react'
import Employee from './Employee.jsx'
import $ from 'jquery'

export default function EmployeeList() {
    /* API call(s) here?? */
    $.get({
        type: 'GET',
        url: 'http://127.0.0.1:5215/api/Employees/GetEmployees',
        dataType: 'JSON',
        success: function(data) {
            console.log(data)
        }
    })
    
    const employees = [{
        Id: 998,
        Name: 'Jeff',
        Email: 'jeff@email.com',
        Occupation: 'Chef'
    },{
        Id: 999,
        Name: 'Christina',
        Email: 'christina@email.com',
        Occupation: 'CEO of Christina Enterprises'
    }]

    return (
        <ul>
            {employees.map(emp => (
                <Employee key={emp.Id} employee={emp} />
            ))}
        </ul>
    )
}