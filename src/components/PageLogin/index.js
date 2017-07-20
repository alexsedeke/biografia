import React from 'react';
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

    handleLogin() {
        // handle login here
    }

    render() {
        return (
            <div className="page-home">
                <h1>login</h1>
                <form onSubmit={this.handleLogin}>
                    <label>
                        Username:
                        <input type="text" value={this.state.username} onChange={this.setUsername} placeholder="Your user name" autoFocus required />
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
