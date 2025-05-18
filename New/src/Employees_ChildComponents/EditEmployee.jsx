import React, {useState} from 'react';
//import $ from 'jquery';

export default function EditEmployee(props) {
    const [name, setName] = useState(props.employee.name);
    const [email, setEmail] = useState(props.employee.email);
    const [occupation, setOccupation] = useState(props.employee.occupation);

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents page refresh
        console.log(name);
        props.handleSubmitCallback(props.employee.id, name, email, occupation);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input 
                type='text'
                onChange={e => setName(e.target.value)}    
                value={name}
            />
            <br />
            <label>Email: </label>
            <input 
                type='text'
                onChange={e => setEmail(e.target.value)}
                value={email}
            />
            <br />
            <label>Occupation: </label>
            <input
                type='text'
                onChange={e => setOccupation(e.target.value)}
                value={occupation}
            />
            <br />
            <input type='submit'/>
        </form>        
    );
}