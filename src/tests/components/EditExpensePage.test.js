import React from 'react'
import {shallow} from 'enzyme'
import "regenerator-runtime/runtime"
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = {
        push: jest.fn()
    }
    wrapper = shallow(<EditExpensePage 
        expense={expenses[0]} 
        history={history} 
        editExpense={editExpense} 
        removeExpense={removeExpense}
    />)
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle removeExpense', () => {
    //* prop('')() is not needed as the onClick handler does not take in any arguments
    //* so just triggering the click with simulate is enough
    wrapper.find('button').simulate('click')
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[0].id})
    expect(history.push).toHaveBeenLastCalledWith('/')
})

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
})