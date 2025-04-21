import React from 'react'
import Employee from './Employee.jsx'

export default function EmployeeList() {
    /* API call(s) here?? */

    const employees = [{
        Id: 998,
        Name: 'Jeff',
        Email: 'jeff@email.com',
        Occupation: 'Chef'
    },{
        Id: 999,
        Name: 'Christina',
        Email: 'christina@email.com',
        Occupation: 'CEO of Christina Cnterprises'
    }]

    return (
        <ul>
            {employees.map(emp => (
                <Employee key={emp.Id} employee={emp} />
            ))}
        </ul>
    )
}