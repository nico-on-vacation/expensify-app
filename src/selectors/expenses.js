import moment from 'moment'

//* Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const startDataMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase())

        return (startDataMatch && endDateMatch && textMatch)
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount')
            return a.amount < b.amount ? 1 : -1
    })
}

export {getVisibleExpenses as default}