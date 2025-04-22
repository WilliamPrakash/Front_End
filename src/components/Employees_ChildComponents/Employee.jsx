import React from 'react'

export default function Employee(props) {

    return (
        <li className='li_employee' key={props.employee.id}>
            <p>{ 'Id: ' + props.employee.id + ', Name: ' + props.employee.name + ', Email: ' + props.employee.email + ', Occupation: ' + props.employee.occupation }</p>
        </li>
    )
}