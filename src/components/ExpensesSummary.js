import React from 'react'
import { connect } from 'react-redux'
import getVisibleExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpensesSummary = (props) => {
    const expensesTotal = getExpensesTotal(props.expenses)
    return (
        <div>
            <p> Viewing {props.expenses.length} totaling {numeral(expensesTotal/100).format('$0,0.00')}</p>
        </div>
    )
}


const mapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpensesSummary)