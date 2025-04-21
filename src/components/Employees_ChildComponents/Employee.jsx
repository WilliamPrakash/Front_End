import React from 'react'

export default function Employee(props) {

    return (
        <li className='li_employee' key={props.employee.Id}>
            <p>{ 'Id: ' + props.employee.Id + ', Name: ' + props.employee.Name + ', Email: ' + props.employee.Email + ', Occupation: ' + props.employee.Occupation }</p>
        </li>
    )
}