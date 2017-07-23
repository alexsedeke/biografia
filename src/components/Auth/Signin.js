import React from 'react';
import * as firebase from 'firebase';
import { Redirect } from 'react-router-dom';
//import PropTypes from 'prop-types';

class Signin extends React.Component {
    state = {
        username: '',
        password: '',
        message: '',
        success: false
    }

    setUsername = (evt) => {
        this.setState({
            username: evt.target.value
        });
    }

    setPassword = (evt) => {
        this.setState({
            password: evt.target.value
        });
    }

    handleLogin = (evt) => {
        evt.preventDefault();
        this.setState({
            message: ''
        })
        // handle login here
        const auth = firebase.auth();
        const signinPromise = auth.signInWithEmailAndPassword( this.state.username, this.state.password );
        signinPromise.then(() => {
            this.setState({
                success: true
            });
        }).catch(e => {
            this.setState({
                message: e.message
            });
        });
    }
    render() {
        return (
            <div className="login-view">
                <h1>login</h1>
                <form onSubmit={this.handleLogin}>
                    <label>
                        Username:
                        <input type="email" value={this.state.username} onChange={this.setUsername} placeholder="Your user name" autoFocus required />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={this.state.password} onChange={this.setPassword} placeholder="Your secret password" required />
                    </label>
                    <button>Login</button>
                </form>
                <p>{this.state.message}</p>
                <div>{this.state.success?<Redirect to="/admin" />:''}</div>
            </div>
        )
    }
}

export { Signin };
