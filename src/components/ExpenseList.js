import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpense from '../selectors/expenses'

//* This named export is for imports at tests
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ?(
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} /> 
                })
            )
        }
    </div>
)

//Define what you want to have access to in the redux store
const mapStateToProps = (state) => { 
    return{
      expenses: selectExpense(state.expenses, state.filters)
    }
}

//This way of exporting connect()() is most common
export default connect(mapStateToProps)(ExpenseList)
