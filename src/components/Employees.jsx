import React, { useState } from 'react';
import EmployeeList from './Employees_ChildComponents/EmployeeList.jsx';
import NewEmployee from './Employees_ChildComponents/NewEmployee.jsx';
import $ from 'jquery';

export default function Employees() {
    //const [employee, setEmployee] = useState({'Name': null, 'Email': null, 'Occupation': null});

    //function createEmployee(name, email, occupation) {
    function createEmployee() {
        //let x = $('form').serialize();

        let employee = {'Name': null, 'Email': null, 'Occupation': null};
        let newEmployee = {
            'Name': employee.name,
            'Email': employee.email,
            'Occupation': employee.occupation
        }
        // Post
        $.ajax({
            type: 'POST',
            url: '127.0.0.1:5215/api/Employees/CreateEmployee',
            data: JSON.stringify(newEmployee),
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
            {/*<NewEmployee createEmployee={createEmployee} employee={employee} setEmployee={setEmployee}/>*/}
            <NewEmployee createEmployee={createEmployee}/>
        </div>
    )
}