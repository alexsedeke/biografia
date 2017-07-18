import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import { PageRouter } from './components/PageRouter';

class App extends Component {
    render() {
        return(
            <div className="App">
                <PageRouter />
            </div>
        );
    }
}
export default App;
