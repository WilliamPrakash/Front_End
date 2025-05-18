import React from 'react';

export default function NewEmployee(props) {

    return (
        <div>
            <h2>Create New Employee</h2>
            <form id='form' onSubmit={props.handleSubmit}>
                <label>Name:</label>
                <input
                    type='text'
                    name='Name'
                    value={props.employee.Name}
                    onChange={props.handleChange}
                    required
                />
                <label>Email:</label>
                <input
                    type='text'
                    name='Email'
                    value={props.employee.Email}
                    onChange={props.handleChange}
                    required
                />
                <label>Occupation:</label>
                <input
                    type='text'
                    name='Occupation'
                    value={props.employee.Occupation}
                    onChange={props.handleChange}
                    required
                />

                <input type='submit'></input>
            </form>
        </div>
    );
}