import React, {useState} from 'react';
import EditEmployee from './EditEmployee.jsx';
import $ from 'jquery';

export default function Employee(props) {
    const [edit, setEditStatus] = useState(false);

    function toggleEditPopup() {
        setEditStatus(edit => !edit);
    };

    function handleSubmitCallback (id, name, email, occupation) {
        // updatedEmployee will map to Employee model
        const updatedEmployee = {
            'Id': id,
            'Name': name,
            'Email': email,
            'Occupation': occupation
        };

        $.ajax({
            type: 'PUT',
            url: 'http://127.0.0.1:5215/api/Employees/UpdateEmployee',
            data: JSON.stringify(updatedEmployee),
            dataType: 'JSON',
            contentType: "application/json; charset=utf-8",
            success: function(res) {
                console.log(res);
            }
        });
    };

    return (
        <li className='li_employee' key={props.employee.id}>
            <p>{ 'Id: ' + props.employee.id + ', Name: ' + props.employee.name + ', Email: ' + props.employee.email + ', Occupation: ' + props.employee.occupation }</p>
            <button onClick={toggleEditPopup}>Edit {props.employee.name}</button>
            {edit ? <EditEmployee employee={props.employee} handleSubmitCallback={handleSubmitCallback}/> : null}
        </li>
    );
}
