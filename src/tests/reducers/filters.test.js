import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', () => {
    //@@INIT was found out via redux chrome tool, what redux dispatches first to filtersReducer
    const state = filtersReducer(undefined, {type:'@@INIT'}) 
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount', //date or amount
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const action = {
        type: 'SORT_BY_DATE'
    }
    const state = filtersReducer( currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const text = 'This is my filter text'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer( undefined, action)
    expect(state.text).toBe(text)
})

test('should set start date', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0).add(4,'days')
    }
    const state = filtersReducer( undefined, action)
    expect(state.startDate).toEqual(moment(0).add(4,'days'))
})

test('should set end date', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0).add(4,'days')
    }
    const state = filtersReducer( undefined, action)
    expect(state.endDate).toEqual(moment(0).add(4,'days'))
})
