import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import Header from '../components/Header'

export const PrivateRoute = ({
    isAuthenticated, 
    component: Component, //This is a rename as the component needs to be uppercase to be rendered
    ...rest //This gives you access to all other props
}) => (
    <Route {...rest} component={(props) => {
        return isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
    }}/>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid //flip defined/undefined to true/false
})

export default connect(mapStateToProps)(PrivateRoute)