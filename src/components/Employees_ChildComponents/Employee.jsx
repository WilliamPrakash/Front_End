import React, {useState} from 'react'
import EditEmployee from './EditEmployee.jsx'

export default function Employee(props) {
    const [edit, setEditStatus] = useState(false);

    function toggleEditPopup() {
        setEditStatus(edit => !edit);
    };

    return (
        <li className='li_employee' key={props.employee.id}>
            <p>{ 'Id: ' + props.employee.id + ', Name: ' + props.employee.name + ', Email: ' + props.employee.email + ', Occupation: ' + props.employee.occupation }</p>
            <button onClick={toggleEditPopup}>Edit {props.employee.name}</button>
            {edit ? <EditEmployee props={props}/> : null}
        </li>
    );
}
