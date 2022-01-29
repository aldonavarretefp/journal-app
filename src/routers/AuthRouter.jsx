import React from 'react';
import { Redirect } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

import 'animate.css'
export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container in fadeIn">
                <Switch>
                    <Route path="/auth/login" component={LoginScreen} />
                    <Route path="/auth/register" component={RegisterScreen} />
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </div>
    );
};
