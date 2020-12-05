import React from 'react'
import { connect } from 'react-redux'
import getVisibleExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00')
    const expensesWord = expensesCount === 1 ? 'expense' : 'expenses'
    return (
        <div>
            <p> Viewing {expensesCount} {expensesWord} totaling {formattedExpensesTotal}</p>
        </div>
    )
}


const mapStateToProps = (state) => {
    const visibleExpenses =  getVisibleExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpenses.length(),
        expensesTotal: getExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)