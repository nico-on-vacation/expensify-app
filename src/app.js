import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import { addExpense, removeExpense } from './actions/expenses'
import { sortByDate, sortByAmount } from './actions/filters'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

store.dispatch(addExpense({
    description: 'Water bill',
    amount: 10000,
    createdAt: 9340
}))
store.dispatch(addExpense({
    description: 'Gas bill',
    amount: 25000
}))
store.dispatch(addExpense({
    description: 'Rent',
    amount: 30000,
    createdAt: 300
}))

// store.dispatch(sortByAmount())
// setTimeout(() => store.dispatch(sortByDate()), 3000)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
