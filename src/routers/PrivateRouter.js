import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    console.log(isAuthenticated)


      //si el usuario esta logeado, ingresará al home y sino se redirecciona al home
    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/" /> )
            )}
        
        />
    )
};

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};
