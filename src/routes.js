import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/login.js';
import Register from './pages/register.js';

import history from './history';

export default function Routes() {
    return (
        <BrowserRouter history={history}>
           <Switch>
               <Route history={history} path="/" exact component={Login}/>
               <Route history={history} path="/register" component={Register}/>
           </Switch>
        </BrowserRouter>
     )
 }