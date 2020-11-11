import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';

import {useDispatch} from 'react-redux';

import {firebase} from '../firebase-config';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRouter';
import {PublicRoute} from './PublicRoute';


import { login } from '../store/actions/auth';
import { DashboardRouters } from './DashboardRouters';





export const AppRouter = () => {
  
  const dispatch = useDispatch();

  //estados que permitiran diferenciar entre usuario logeado o no para vizualisacion de las rutas
  const [ checking, setChecking ] = useState(true);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);



  useEffect(() => {
      
      firebase.auth().onAuthStateChanged( (user) => {

          if ( user?.uid ) {
              dispatch( login( user.uid, user.displayName ) );
              setIsLoggedIn (true);
          
          } else {
           console.log('hola');
           setIsLoggedIn (false);
          }

          setChecking(false);

      });
      
  }, [ dispatch, setChecking, setIsLoggedIn]);

  if ( checking ) {
    return (
        <h1>Espere...</h1>
    )
}

  return(
    //uso de router para poder alternar los componentes quee comforman las vistas en rutas publicas y privadas

    <Router>
      <div className="container">
        <Switch>
          <PublicRoute path="/"  isAuthenticated={isLoggedIn} component = {AuthRouter} exact />
          <PublicRoute path="/register"  isAuthenticated={isLoggedIn} component = {AuthRouter} exact />
          <PrivateRoute  path="/home"   isAuthenticated={isLoggedIn}   component = {DashboardRouters}  />

          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>

  )
};

