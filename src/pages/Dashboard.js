import React, { Component } from 'react';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <h2> Is Logged: {this.props.isLogged}</h2>
            </div>
        );
    }
}

