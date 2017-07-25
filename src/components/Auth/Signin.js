import React from 'react';
import * as firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import './Signin.css';

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
            <div className="signin__view">
                <div>{this.state.success?<Redirect to="/admin" />:''}</div>
                <div className="signin__box">
                    <h1>Sign In</h1>
                    <form onSubmit={this.handleLogin}>
                        <div className="form__subset">
                            <label className="field__label">Username</label>
                            <div className="field__wrapper">
                                <input type="email" value={this.state.username} onChange={this.setUsername} placeholder="Your user name" autoFocus required />
                            </div>
                        </div>
                        <div className="form__subset">
                            <label className="field__label">Password</label>
                            <div className="field__wrapper">
                                <input type="password" value={this.state.password} onChange={this.setPassword} placeholder="Your secret password" required />
                            </div>
                        </div>
                        <div className="form__subset--right">
                            <button className="button">Sign In</button>
                        </div>
                    </form>
                    <p>{this.state.message}</p>
                </div>
            </div>
        )
    }
}

export { Signin };
