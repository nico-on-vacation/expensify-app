import React from 'react'
import {shallow} from 'enzyme'
import "regenerator-runtime/runtime"
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startEditExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = {
        push: jest.fn()
    }
    wrapper = shallow(<EditExpensePage 
        expense={expenses[0]} 
        history={history} 
        startEditExpense={startEditExpense} 
        startRemoveExpense={startRemoveExpense}
    />)
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle startRemoveExpense', () => {
    //* prop('')() is not needed as the onClick handler does not take in any arguments
    //* so just triggering the click with simulate is enough
    wrapper.find('button').simulate('click')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[0].id})
    expect(history.push).toHaveBeenLastCalledWith('/')
})

test('should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
})