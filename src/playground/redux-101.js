import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type:'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type:'DECREMENT',
  decrementBy
})

const setCount = ({ count }) => ({
  type:'SET', 
  count
})

const resetCount = () => ({
  type:'RESET'
})

//Reducers
//Action determine what happens, reducers determine how it happens
//1.Reducers are pure functions - this means the output only depends on the input
//2.Never change state or action
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state
  }
}

const store = createStore(countReducer)


const unsubscribe = store.subscribe(() => { //the return is the function to unsubscribe 
  console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy: 20}))
store.dispatch(decrementCount({decrementBy: 31}))
store.dispatch(setCount({count: 9}))
store.dispatch(resetCount())

//* These got replaced with the function creating the action objects
//* for benefits like auto-complete and not running into the risk of typos
// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// })

// store.dispatch({
//   type:'SET',
//   count: 101
// })


// unsubscribe()