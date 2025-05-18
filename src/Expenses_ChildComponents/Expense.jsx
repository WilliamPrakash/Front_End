import React from 'react'

export default function Expense(props) {

    return (
        <li className='li_expense' key={props.expense.Id}>
            <p>{'Id: ' + props.expense.Id + ', Value: ' + props.expense.Value + ', Description: ' + props.expense.Description}</p>
        </li>
    )
}