import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this)
    }

    handleSuccesfulAuth(data) {
        this.props.history.push("/dashboard")
    }

    render() {
        return (
            <div>
                <h1> Home page</h1>
                <h2>Is logged: {this.props.isLogged}</h2>
            </div>
        );
    }
}
