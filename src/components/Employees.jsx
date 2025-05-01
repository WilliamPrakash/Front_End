import React, { useState } from 'react';
import EmployeeList from './Employees_ChildComponents/EmployeeList.jsx';
import NewEmployee from './Employees_ChildComponents/NewEmployee.jsx';
import $ from 'jquery';

export default function Employees() {
    const [employee, setEmployee] = useState({Name: '', Email: '', Occupation: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevData => ({...prevData, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(employee);
        createEmployee();
    }

    function createEmployee() {
        // Post
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:5215/api/Employees/CreateEmployee',
            data: JSON.stringify(employee),
            dataType: 'JSON',
            contentType: "application/json; charset=utf-8",
            success: function(res) {
                console.log(res);
            }
        });
    }

    return (
        <div>
            <h1>Employee</h1>
            <EmployeeList />
            <br />
            <NewEmployee handleChange={handleChange} handleSubmit={handleSubmit} employee={employee}/>
        </div>
    )
}