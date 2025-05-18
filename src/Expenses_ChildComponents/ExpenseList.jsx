import React from 'react'
import Expense from './Expense.jsx'

export default function ExpenseList() {
    /* API call(s) here?? */

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
            {expenses.map(exp => (
                <Expense key={exp.Id} expense={exp}/>
            ))}
        </ul>
    )
}