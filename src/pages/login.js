import React, { Component } from 'react';
import styles from './login.module.css'

class Login extends Component {

  state = {
    credentials: { username: '', password: '' },
    isLogged: false,
  }

  login = event => {
    fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.credentials)
    })
      .then(data => data.json())
      .then(
        data => {
          if (data.token) {
            console.log(data);
            this.props.handleSuccesfulAuth(data)
            alert("Login is successful")
          } else {
            alert("Something wrong")
          }
        }
      )
      .catch(error => console.error(error))
  }

  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  }

  render() {
    return (
      <div className={styles.signupDiv}>
        <div className={styles.signupForm}>
          <h1 className={styles.title}>Welcome back</h1>
          <label>
            Username:
          <input type="text" name="username"
              value={this.state.credentials.username}
              onChange={this.inputChanged} />
          </label>
          <br />
          <label>
            Password:
          <input type="password" name="password"
              value={this.state.credentials.password}
              onChange={this.inputChanged} />
          </label>
          <br />
          <button className={styles.signupBtn} onClick={this.login}>Sign in</button>
          <a className={styles.adminLink} href="http://127.0.0.1:8000/admin">admin</a>
        </div>
      </div>
    );
  }
}

export default Login;