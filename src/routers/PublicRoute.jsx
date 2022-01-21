import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

export const PublicRoute = ({component:Component, isLoggedIn, ...rest}) => {
    return (
        <Route {...rest}
            render={props => (
                isLoggedIn ? (
                    <Redirect to="/" />
                ) : (
                    <Component {...props} />
                )
            )}
        />
    );
};
