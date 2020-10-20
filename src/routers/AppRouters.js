import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {useDispatch} from 'react-redux';

import {firebase} from '../firebase-config';
import { PrivateRoute } from './PrivateRouter';
import {PublicRoute} from './PublicRoute';
import Login from '../components/entry/Login';
import Register from '../components/entry/Register';
import Home from '../components/Home';
import Profile from '../components/Profile';
import ListProjects from '../components/emp/ListProjects';
import NewProject from '../components/emp/NewProject';
import Tasacion from '../components/emp/Tasacion';
import NotFound from '../components/NotFound';
import { login } from '../actions/auth';



export const AppRouter = () => {
  
  const dispatch = useDispatch();

  const [ checking, setChecking ] = useState(true);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);



  useEffect(() => {
      
      firebase.auth().onAuthStateChanged( (user) => {

          if ( user?.uid ) {
              dispatch( login( user.uid, user.displayName ) );
              setIsLoggedIn( true );
          } else {
              setIsLoggedIn( false );
          }

          setChecking(false);

      });
      
  }, [ dispatch, setChecking, setIsLoggedIn ]);

  if ( checking ) {
    return (
        <h1>Espere...</h1>
    )
}




  return(
    //uso de router para poder alternar los componentes quee comforman las vistas

    <Router>
      <div className="container">
        <Switch>
          <PublicRoute path="/" isAuthenticated={isLoggedIn} exact>
              <Login/>
          </PublicRoute>
          <PublicRoute path="/registro" isAuthenticated={isLoggedIn}  exact>
              <Register/>
          </PublicRoute>
          <PrivateRoute  path="/home"    isAuthenticated={isLoggedIn}  exact>
     
              <Home/>
          </PrivateRoute>
          <PrivateRoute path="/perfil"    isAuthenticated={isLoggedIn}  exact>
              <Profile/>
          </PrivateRoute>
          <PrivateRoute path="/proyectos"    isAuthenticated={isLoggedIn}  exact>
              <ListProjects/>
          </PrivateRoute>
          <PrivateRoute path="/nuevo"    isAuthenticated={isLoggedIn}  exact>
              <NewProject/>
          </PrivateRoute>
          <PrivateRoute path="/tasacion"    isAuthenticated={isLoggedIn}  exact>
              <Tasacion/>
          </PrivateRoute>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>

  )
};

