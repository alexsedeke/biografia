import React, {
    Component
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import * as firebase from 'firebase';
import { NavigationBar } from './components/NavigationBar';
import {
    Signin,
    SecuredRoute,
    UnsecuredRoute
} from './components/Auth';
import { NoRouteMatch } from './components/NoRouteMatch';
import { SettingsRouter } from './components/Settings';
import { PageHome } from './components/PageHome';
import './App.css';

class App extends Component {
    state = {
        currentUser: null
    }
    
    componentDidMount() {
        const ele = document.getElementById( 'ipl-progress-indicator' )
        if( ele ) {
            setTimeout( () => {
                ele.classList.add( 'available' )
                setTimeout( () => {
                    ele.outerHTML = ''
                }, 2000 )
            }, 1000 )
        }
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(  user => {
            if (user === null) {
                localStorage.removeItem('user', null);
            } else {
                localStorage.setItem('user', user.uid);
            }

            this.setState({
                currentUser: user
            });

        } );
    }

    render() {
        return(
            <Router>
                <main className="App">
                    <NavigationBar />

                    <Switch>
                        <Route exact path="/" component={PageHome}/>
                        <UnsecuredRoute path="/signin" component={Signin}/>
                        <SecuredRoute path="/settings" component={SettingsRouter}/>
                        <Route component={NoRouteMatch}/>
                    </Switch>
                </main>
            </Router>
        );
    }
}

export default App;
