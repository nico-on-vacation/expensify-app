import database from '../firebase/firebase'

// ADD_EXPENSE
const addExpense = (expense) => ({
        type:'ADD_EXPENSE',
        expense
})

const startAddExpense = (expenseData = {}) => {
    return (dispatch) => { //This will get called internally by redux, that's where the dispatch comes from
        const {
            description = '', 
            note = '',
            amount = 0, 
            createdAt = 0
        } = expenseData

        const expense = {description, note, amount, createdAt}

        return database.ref('expenses').push(expense).then((reference) => {
            dispatch(addExpense({
                id: reference.key, //This is the id set in firebase
                ...expense
            }))
        })
    }
}

// REMOVE_EXPENSE
const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export {addExpense, removeExpense, editExpense, startAddExpense}