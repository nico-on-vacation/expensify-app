import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup add expense action object with input values', () => {
    const expenseData = {
        description: 'Water bill',
        amount: 10000,
        createdAt: 9340,
        note:'Do not waste so much water.'
    }

    const action = addExpense(expenseData)

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
})

test('should setup add expense action object with default values', () => {
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note:''
    }

    const action = addExpense()

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
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
