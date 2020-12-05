






//* Testing
store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({
    description: 'Coffee',
    amount: 100,
    createdAt: 5000
}))
const expenseTwo = store.dispatch(addExpense({
    description: 'Donut',
    amount: 150,
    createdAt: 1000
}))

const expenseThree = store.dispatch(addExpense({
    description: 'Carrot',
    amount: 90,
    createdAt: 2500
}))

// store.dispatch(removeExpense({
//     id: expenseOne.expense.id
// }))
// store.dispatch(editExpense(expenseTwo.expense.id, { description: "Updated Coffee", amount: 500 }))

// store.dispatch(setTextFilter('ot'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(-1000))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(2000))

//* Demo state
const demoState= {
    expenses: [{
        id: 'bgenurfwnregthbig',
        description: 'January Rent',
        note: 'This was the final payment',
        amount: 54500, //Sticking with cents
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}
