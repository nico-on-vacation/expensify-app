//HOC Higher order component - a component (hoc) that renders another component
//Reuse code
//Render hijacking
//Prop manipulation
//abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1> 
        <p>Some info: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p> This is private info. Please don't share. </p>}
            <WrappedComponent {...props}/>
        </div>
    )
}//Spreading out the props will pass all key-value-pairs down to the component

const requireAuthentication = (WrappedComponent) => {
    //* The return is the HOC
    return (props) => (
        <div>
            {!props.isAuthenticated ? (
                <p> This requires authentication </p>
            ) : (
                <WrappedComponent {...props} />
            )}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info)

const AdminInfo = withAdminWarning(Info)


// ReactDOM.render(<AdminInfo isAdmin={false} info="This got passed" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="This got passed" />, document.getElementById('app'))