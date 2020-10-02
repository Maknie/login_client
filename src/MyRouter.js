import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/nav';
import Auth from './pages/Auth';
import AuthLog from './pages/AuthLog';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';




export default class MyRouter extends React.Component {
    constructor(){
        super();

        this.state = {
            isLogged: "no",
            user: {}
        }

        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(data){
        this.setState({
            isLogged: "yes",
            user: data
        })
    }


    render() {
        return (
            <Router>
                <Nav />
                <Switch>
                    <Route 
                    exact 
                    path="/home" 
                    render={props => (
                        <Home {...props} isLogged={this.state.isLogged}/>
                    )}
                    />
                    <Route 
                    exact 
                    path="/dashboard"
                    render={props => (
                        <Dashboard {...props} isLogged={this.state.isLogged}/>
                    )}
                    />
                    <Route 
                    exact 
                    path="/login" 
                    render={props => (
                        <AuthLog handleLogin={this.handleLogin} {...props} isLogged={this.state.isLogged}/>
                    )}/>
                    <Route 
                    exact 
                    path="/signup" 
                    render={props => (
                        <Auth handleLogin={this.handleLogin} {...props} isLogged={this.state.isLogged}/>
                    )}/>
                </Switch>
            </Router>
        );
    }
}


