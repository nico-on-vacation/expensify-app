import authReducer from '../../reducers/auth'

test('should handle login action correctly', () => {
    const uid = 'og3n4be0rguvr'
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer({},action)
    expect(state.uid).toBe(uid)
})

test('should handle logout action correctly', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid:'42wbw0ubads'}, action)
    expect(state).toEqual({})
})

test('should handle default action correctly', () => {
    const defaultState = {
        uid: '4ugw0r230wff042n'
    }
    const action = {
        type: 'WRONG TYPE'
    }
    const state = authReducer(defaultState, action)
    expect(state).toEqual(defaultState)
})