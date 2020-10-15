import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Login from './components/entry/Login';
import Register from './components/entry/register';
import Home from './components/Home';
import Profile from './components/Profile';
import ListProjects from './components/emp/ListProjects';
import NewProject from './components/emp/NewProject';
import Tasacion from './components/emp/Tasacion';
import NotFound from './components/NotFound';

function App() {
  return(
    //uso de router para poder alternar los componentes quee comforman las vistas
    <Router>
      <div className="conatiner">
        <Switch>
          <Route path="/" exact>
              <Login/>
          </Route>
          <Route path="/registro" exact>
              <Register/>
          </Route>
          <Route path="/home" exact>
              <Home/>
          </Route>
          <Route path="/perfil" exact>
              <Profile/>
          </Route>
          <Route path="/proyectos" exact>
              <ListProjects/>
          </Route>
          <Route path="/nuevo" exact>
              <NewProject/>
          </Route>
          <Route path="/tasacion" exact>
              <Tasacion/>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;