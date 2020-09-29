import React, { Component } from 'react';
import styles from './signup.module.css'

class SignUp extends Component {

    state = {
        credentials: {
            username: '',
            password: '',
            email: '',
        },
        passwordRepeat: '',
        signedUp: false,
    }


    register = event => {
        if(this.state.passwordRepeat !== this.state.credentials.password){
            alert("Passwords doesn't match")
            return
        }
        fetch('http://127.0.0.1:8000/api/register/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.credentials)
        })
            .then(data => data.json())
            .then(
                data => {
                    console.log(data.token);
                    this.setState({ signedUp: true })
                    alert(data.token)
                }
            )
            .catch(error => {
                console.error(error)
                alert(error)
            })
    }
    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({ credentials: cred });
    }

    passwordCheck = event => {
        this.setState({passwordRepeat: event.target.value})
    }

    render() {
        return (
            <div className={styles.signupDiv}>
                <div className={styles.signupForm}>
                    <h3 className={styles.title}>Create Account</h3>
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
                    <label>
                        Repeat the password:
                    <input type="password" name="password"
                            value={this.state.passwordRepeat}
                            onChange={this.passwordCheck}
                            />
                    </label>
                    <br />
                    <label>
                        Email:
                    <input type="text" name="email"
                            value={this.state.credentials.email}
                            onChange={this.inputChanged} />
                    </label>
                    <br />
                    <button className={styles.signupBtn} onClick={this.register}>Sign up</button>
                </div>
            </div>
        );
    }
}

export default SignUp;