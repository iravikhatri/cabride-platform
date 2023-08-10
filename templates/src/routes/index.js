import React from 'react';
import { Route, Redirect } from 'react-router-dom';


function isAuthed(){
    return !localStorage.getItem("isAuth") ? true : false;
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props => {
        if (isAuthed()) {
            // authorised so return component
            return <Component {...props} />
        }

        // not logged in so redirect to login page with the return url
        return <Redirect to={{ pathname: '/accounts/login', state: { from: props.location } }} />
    }} />
)

export const AuthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props => {
        if (isAuthed()) {
            console.log(isAuthed())
            // authorised so redirect to home page
            return <Redirect to={{ pathname: '/'}} />
        }

        console.log(isAuthed())

        // not logged in so render login page with the return url
        return <Component {...props} />
    }} />
)