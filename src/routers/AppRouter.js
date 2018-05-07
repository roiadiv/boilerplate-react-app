import React from 'react';
import {Router, Route , Switch,Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import DashboardPage from '../components/DashboardPage';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRout from './PrivateRout';
import PublicRout from './PublicRout';

export const history = createHistory();
const AppRouter = ()=>(
    <Router history = {history}>
    <div>
        <Switch> 
        <PublicRout path = '/' component = {LoginPage} exact ={true}/>   
        <PrivateRout path = '/dashboard' component = {DashboardPage} />  
        <Route path = '/help' component = {HelpPage} />
        <Route component={NotFoundPage} />
        </Switch>
    </div>
    </Router>
);
export default AppRouter;

