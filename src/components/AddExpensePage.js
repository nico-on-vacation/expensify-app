import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component{
  onSubmit = (expense) => {
    // props.dispatch(addExpense(expense))
    // * With the mapDispatchToProps setup the code becomes
    // * more testable, as there is not a function inside a
    // * function that is called 
    this.props.startAddExpense(expense)
    this.props.history.push('/') //Switching over to dashboard
  }

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)
