import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import Header from '../components/Header'

export const PublicRoute = ({
    isAuthenticated, 
    component: Component, //This is a rename as the component needs to be uppercase to be rendered
    ...rest //This gives you access to all other props
}) => (
    <Route {...rest} component={(props) => {
        return isAuthenticated ? (
            <Redirect to="/dashboard" />
        ) : (
            <Component {...props} />
        )
    }}/>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid //flip defined/undefined to true/false
})

export default connect(mapStateToProps)(PublicRoute)