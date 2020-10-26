import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from '../components/Home';
import Profile from '../components/Profile';
import ListProjects from '../components/emp/ListProjects';
import NewProject from '../components/emp/NewProject';
import Tasacion from '../components/emp/Tasacion';
import ListTasaciones from '../components/emp/ListTasaciones';
import NotFound from '../components/NotFound';


//función que engloba las rutas que estaran dentro de la vista home

export const DashboardRouters = () => {
    return (
        <div className="dash__main">
            <div className="dash__box-container">
                <Switch>
                    <Route exact path="/home" component={ Home }/>
                    <Route exact path="/home/perfil" component={ Profile }/>
                    <Route exact path="/home/proyectos" component={ ListProjects }/>
                    <Route exact path="/home/newProject" component={ NewProject }/>
                    <Route exact path="/home/tasaciones" component={ ListTasaciones }/>
                    <Route exact path="/home/newTasacion" component={ Tasacion }/>
                    <Route exact path="/notfound" component={ NotFound }/>
                </Switch>
            </div>

        </div>
    )
}
