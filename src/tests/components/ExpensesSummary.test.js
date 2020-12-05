import React from 'react'
import { shallow } from 'enzyme'
import {ExpensesSummary} from '../../components/ExpensesSummary'

test('should render ExpensesSummary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={195}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={34147357294}/>)
    expect(wrapper).toMatchSnapshot()
})