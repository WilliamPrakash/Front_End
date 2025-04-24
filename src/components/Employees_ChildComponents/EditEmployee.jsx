import React from 'react';
//import $ from 'jquery';

export default function EditEmployee(props) {
    //console.log(props);

    function handleSubmit(formData) {
        console.log(formData.target)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type='text' defaultValue={props.employee.name}/>
            <br />
            <label>Email: </label>
            <input type='text' defaultValue={props.employee.email}/>
            <br />
            <label>Occupation: </label>
            <input type='text' defaultValue={props.employee.name}/>
            <br />
            <input type='submit'/>
        </form>        
    );
}