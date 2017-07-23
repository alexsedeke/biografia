import React, {
    Component
} from 'react';
//import logo from './logo.svg';
import './App.css';
import { PageRouter } from './components/PageRouter';
import * as firebase from 'firebase';

class App extends Component {
    state = {
        currentUser: null
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
            <div className="App">
                <PageRouter />
            </div>
        );
    }
}
export default App;
