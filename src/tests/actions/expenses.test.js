import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import "regenerator-runtime/runtime"
import { addExpense, editExpense, removeExpense, setExpenses, startAddExpense, startSetExpenses } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import expensesReducer from '../../reducers/expenses'
// import database from '../../firebase/firebase'

//! NO FIREBASE TESTS AS THEY FAIL
//! IN THE startAddExepense() function the database call never returns
//! If the database call is replaced with another promise-returning function it works
//! So my guess is firebase does not work somehow in the test as data would be pushed
//! to the database
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

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[0])

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    })
})

test('should setup set expense action object with data', () => {
    const actions = setExpenses(expenses)
    expect(actions).toEqual({
        type:'SET_EXPENSES',
        expenses
    })
})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]])
})

// test('should fetch the data from firebase', (done) => {
//     const store = createMockStore({})
//     store.dispatch(startSetExpenses()).then(() => {
//         const actions = store.getActions()
//         expect(actions[0]).toEqual({
//             type:'SET_EXPENSES',
//             expenses
//         })
//         done()
//     })
// })

// test('should add expense to database and store', async () => {
    // ! Not even this works by just trying to interact with firebase solely
    // return database.ref('Testing').set('This is a test').then(() => {
    //     console.log('finished')
    // })


    // const store = createMockStore({});
    // const expenseData = {
    //   description: 'Mouse',
    //   amount: 3000,
    //   note: 'This one is better',
    //   createdAt: 1000
    // };

    // return store.dispatch(startAddExpense(expenseData)).then(() => {
    //   const actions = store.getActions()
    //   console.log(actions)
    // });
// });

// test('should add expense to database and store', async () => {
//     const store = createMockStore({});
//     const expenseData = {
//       description: 'Mouse',
//       amount: 3000,
//       note: 'This one is better',
//       createdAt: 1000
//     };

//     await store.dispatch(startAddExpense(expenseData))
//     const actions = store.getActions()
//     console.log(actions)
// })

// test('Should get sum', (done) => {
//     // const sum = await doWork()
//     // console.log(sum)

//     doWork().then((sum) => {
//         // console.log('Sum is ', sum)
//         expect(sum).toBe(9)
//         done()
//     })
// })

// test('should add expense to database and store', (done) => {
    
// })
