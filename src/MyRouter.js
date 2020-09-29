import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/nav';

import Login from './pages/login';
import SignUp from './pages/signup';


const MyRouter = () => {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/signup" component={SignUp}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default MyRouter;
