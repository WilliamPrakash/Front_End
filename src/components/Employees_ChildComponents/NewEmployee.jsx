import React, { useState } from 'react';
import $ from 'jquery';

export default function NewEmployee(props) {
    const [employee, setEmployee] = useState({Name: null, Email: null, Occupation: null});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevData => ({...prevData, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //let x = $('form').serialize();
        //const formData = new FormData();

        console.log(employee);
    }

    return (
        <div>
            <h2>Create New Employee</h2>
            <form id='form' onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type='text'
                    name='Name'
                    value={employee.Name}
                    onChange={handleChange}
                    required
                />
                <label>Email:</label>
                <input
                    type='text'
                    name='Email'
                    value={employee.Email}
                    onChange={handleChange}
                    required
                />
                <label>Occupation:</label>
                <input
                    type='text'
                    name='Occupation'
                    value={employee.Occupation}
                    onChange={handleChange}
                    required
                />

                <input type='submit'></input>
            </form>
        </div>
    );
}