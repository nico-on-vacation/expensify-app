import { login, logout } from '../../actions/auth'

test('should set uid on login', () => {
    const uid = '4otng0vn29utbw0sf'
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should clear uid on logout', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})