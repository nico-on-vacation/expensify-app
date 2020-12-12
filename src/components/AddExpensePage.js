import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component{
  onSubmit = (expense) => {
    this.props.startAddExpense(expense)
    this.props.history.push('/') //Switching over to dashboard
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm 
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}

// * With the mapDispatchToProps setup the code becomes
// * more testable, as there is not a function inside a
// * function that is called 
const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)
