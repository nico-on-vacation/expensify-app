import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import "regenerator-runtime/runtime"
import { addExpense, startAddExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'

const createMockStore = configureMockStore([thunk])

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense(
        '123abc',
        {
            thisUpdate: 'update'
        }
    )

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            thisUpdate: 'update'
        }
    })
})

test('should setup add expense action object with input values', () => {
    const action = addExpense(expenses[0])

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    })
})

test('should add expense to database and store', async () => {
    const store = createMockStore({})
    const expenseData = {
        description: 'mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: '75384'
    }
    
    store.dispatch(startAddExpense(expenseData))
    const actions = store.getActions()
    console.log(actions)
})

// test('should add expense to database and store', (done) => {
    
// })
