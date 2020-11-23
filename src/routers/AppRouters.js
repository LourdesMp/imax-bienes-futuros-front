import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { firebase } from '../firebase-config';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRouter';
import { PublicRoute } from './PublicRoute';


import { loginSuccess, startLogout} from '../store/actions/auth';
import { DashboardRouters } from './DashboardRouters';





export const AppRouter = () => {

  const dispatch = useDispatch();

  const {
    isLoading,
    isSuccess,
    isError,
    data,
    error
  } = useSelector(state => state.authReducer.user);
  console.log(data);

  //estados que permitiran diferenciar entre usuario logeado o no para vizualisacion de las rutas
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  useEffect(() => {

    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(loginSuccess({
          email: user.email,
          uid: user.uid
        }));

      } else {
        startLogout();

      }

      setChecking(false);


    });

  }, []);

  // useEffect(() => {
  //   dispatch(checkingUser())
  // //  const user  = firebase.auth().currentUser
  // //  console.log(user)
  // }, [])

  if (checking) {
    return (
      <h1>Espere...</h1>
    )
  }

  return (
    //uso de router para poder alternar los componentes quee comforman las vistas en rutas publicas y privadas

    <Router>
      <div className="container">
        <Switch>
          <PublicRoute path="/" isAuthenticated={isSuccess} component={AuthRouter} exact />
          <PublicRoute path="/register" isAuthenticated={isSuccess} component={AuthRouter} exact />
          <PrivateRoute path="/home" isAuthenticated={isSuccess} component={DashboardRouters} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>

  )
};

