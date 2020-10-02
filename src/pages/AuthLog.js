import React, { Component } from 'react';
import Login from './login';

export default class AuthLog extends Component {
    constructor(props) {
        super(props);

        this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this)
    }

    handleSuccesfulAuth(data) {
        this.props.handleLogin(data)
        this.props.history.push("/dashboard")
    }

    render() {
        return (
            <Login handleSuccesfulAuth={this.handleSuccesfulAuth}/>
        );
    }
}
