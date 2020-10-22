import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'


//funcion que engloba las rutas publicas: login y register
export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/"
                        component={ Login }
                    />

                    <Route 
                        exact
                        path="/register"
                        component={ Register }
                    />

                    <Redirect to="/" />


                </Switch>
            </div>

        </div>
    )
}
