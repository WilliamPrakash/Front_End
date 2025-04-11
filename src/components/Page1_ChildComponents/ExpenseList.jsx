import React from 'react'
import Expense from './Expense.jsx'

export default function ExpenseList() {
    /* API call here then propogate expenses?? */


    // this gets instantiated (that the right word?)
    // everytime the component renders => performance hit
    const expenses = [{
        Id: 1,
        Value: 8000,
        Description: 'expense 1'
    },{
        Id: 2,
        Value: 12345,
        Description: 'expense 2'
    }]

    return(
        <ul>
            {/*expenses.map(exp => (
                <li key={exp.Id}>{'Id: ' + exp.Id + ', Value: ' + exp.Value + ', Description: ' + exp.Description}</li>
            ))*/}
            { expenses.map(exp => (
                <Expense key={exp.Id} expense={exp}/>
            ))}
            
        </ul>
    )
}