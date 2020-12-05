const getExpensesTotal = (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((a,b) => a+b, 0)
}

export {getExpensesTotal as default}