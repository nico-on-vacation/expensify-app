import database from '../firebase/firebase'

// ADD_EXPENSE
const addExpense = (expense) => ({
        type:'ADD_EXPENSE',
        expense
})

const startAddExpense = (expenseData = {}) => {
    return async (dispatch) => { //This will get called internally by redux, that's where the dispatch comes from
        const {
            description = '', 
            note = '',
            amount = 0, 
            createdAt = 0
        } = expenseData

        const expense = {description, note, amount, createdAt}

        database.ref('expenses').push(expense).then((reference) => {
            dispatch(addExpense({
                id: reference.key, //This is the id set in firebase
                ...expense
            }))
        })
    }
}

// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const startRemoveExpense = ({id} = {}) => {
    return async (dispatch) => {
        await database.ref(`expenses/${id}`).remove()
        dispatch(removeExpense({id}))
    }
}

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const startEditExpense = (id, updates) => {
    return async (dispatch) => {
        await database.ref(`expenses/${id}`).update(updates)
        dispatch(editExpense(id,updates))
    }
}

//Set_EXPENSES
const setExpenses = (expenses) => ({
    type:'SET_EXPENSES',
    expenses
})

const startSetExpenses = () => {
    return async (dispatch) => {
        const expenses = []
        const snapshot = await database.ref('expenses').once('value')
            
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        });

        dispatch(setExpenses(expenses))
    }
}

export {
    addExpense, removeExpense, editExpense, setExpenses, 
    startAddExpense, startRemoveExpense, startEditExpense, startSetExpenses
}