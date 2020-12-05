//#region Moment
//* Add and Subtract time
moment().add(4, 'days') //Here you can define other time units

//* Get timestamp as number
moment().valueOf()

//* Get start or end of certain time unit
moment().startOf('month') // Here you could pass in other unit for example day, second or year
moment().endOf('month')
//#endregion
    //#region Testing
    //#region Jest
//* Assign value
expect(value).toBe(expectedValue)

//* Compare two objects
expect(object).toEqual(anotherObject) 

//* Expect any value of certain type in object
//  Practical for dynamic values that change
expect(object).toBe({
    id: expect.any(String) //can pass in other types
})

//* Check if a function has been called
const onSubmitSpy = jest.fn()
    onSubmitSpy('Andrew', 'Philly')
    expect(onSubmitSpy).toHaveBeenCalledWith('Andrew', 'Philly')
//#endregion
    //#endregion
    //#region Enzyme
    //*Create a Snapshot test
    //* ps: you can create as many snapshots in one test case
    //*     as you like.
    const wrapper = shallow(<ComponentToTest />)
    expect(wrapper).toMatchSnapshot()

    //*Simulate Action
    // tag-of-test-thing for example: 'form'
    // action-to-simulate for example: 'submit', 'click', ...
    wrapper.find('tag-of-test-thing').simulate('action-to-simulate', {
        preventDefault: () => {}
        //This is an example to pass along the values needed
        // for the event. This is a substitution for e.preventDefault()
        // that is used in the form.onSubmit function to prevent it
        // from throwing an error as 'e' containing the function
        // needs to be provided 
    })
    
    //*Check the state
    expect(wrapper.state('some-state-value')).toBe(value)
    //#endregion
//#endregion