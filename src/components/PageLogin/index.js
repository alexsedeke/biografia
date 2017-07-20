import React from 'react';
import firebase from 'firebase';
//import PropTypes from 'prop-types';

class PageLogin extends React.Component {
    state = {
        username: '',
        password: ''
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
        // handle login here
        const auth = firebase.auth();
        const authPromise = auth.signInWithEmailAndPassword( this.state.username, this.state.password );
        authPromise.catch(e => console.log(e.message));
    }

    render() {
        return (
            <div className="page-home">
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
            </div>
        )
    }
}

export { PageLogin };
