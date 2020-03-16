import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WerewolfRole from './components/werewolf/role';
import WerewolfRule from './components/werewolf/rule';
import WerewolfRoom from './components/werewolf/room';
import Notfound from './components/notfound'
import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';

import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
    <Router>
        <nav class="navbar navbar-expand-lg navbar-static-top navbar-light bg-light">
            <div class="container-fluid">
                <ul class="nav navbar-nav" >
                    <li class="nav-item p-2">
                        <NavLink exact activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li class="nav-item p-2">
                        <NavLink activeClassName="active" to="/werewolf/rule">Rule</NavLink>
                    </li>
                    <li class="nav-item p-2">
                        <NavLink activeClassName="active" to="/werewolf/role">Role</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/werewolf/rule" component={WerewolfRule} />
            <Route path="/werewolf/role" component={WerewolfRole} />
            <Route path="/werewolf/room/:id" component={WerewolfRoom} />
            <Route component={Notfound} />
        </Switch>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
