import React, { Component } from 'react';
import SignUp from './signup';

export default class Auth extends Component {
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
            <SignUp handleSuccesfulAuth={this.handleSuccesfulAuth}/>
        );
    }
}
