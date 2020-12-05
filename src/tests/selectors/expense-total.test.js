import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('Should return 0 if no expenses', () => {
    expect(getExpensesTotal([])).toBe(0)
})

test('Should correctly add up a single expense', () => {
    expect(getExpensesTotal([expenses[0]])).toBe(expenses[0].amount)
})

test('Should correctly add up multiple expenses', () => {
    const expectedSum = expenses[0].amount + expenses[1].amount + expenses[2].amount
    expect(getExpensesTotal(expenses)).toBe(expectedSum)
})