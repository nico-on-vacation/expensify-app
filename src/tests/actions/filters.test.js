import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters'
import moment from 'moment'

test('should generate start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})
test('should generate start date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})
test('should generate set text filter action with input value', () => {
    const action = setTextFilter('filter string')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'filter string'
    })
})
test('should generate set text filter action with default value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})
test('should generate sortBy date action', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})
test('should generate sortBy amoun action', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})