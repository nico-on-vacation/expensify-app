import database from '../firebase/firebase'

// ADD_EXPENSE
const addExpense = (expense) => ({
        type:'ADD_EXPENSE',
        expense
})

const startAddExpense = (expenseData = {}) => {
    return async (dispatch, getState) => { //This will get called internally by redux, that's where the dispatch comes from
        const uid = getState().auth.uid
        const {
            description = '', 
            note = '',
            amount = 0, 
            createdAt = 0
        } = expenseData

        const expense = {description, note, amount, createdAt}

        database.ref(`users/${uid}/expenses`).push(expense).then((reference) => {
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
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        await database.ref(`users/${uid}/expenses/${id}`).remove()
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
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        await database.ref(`users/${uid}/expenses/${id}`).update(updates)
        dispatch(editExpense(id,updates))
    }
}

//Set_EXPENSES
const setExpenses = (expenses) => ({
    type:'SET_EXPENSES',
    expenses
})

const startSetExpenses = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        const expenses = []
        const snapshot = await database.ref(`users/${uid}/expenses`).once('value')
            
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