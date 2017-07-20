import React from 'react';
import firebase from 'firebase';

class PageHome extends React.Component {
    state = {
        dbval: 'static'
    }

    componentDidMount() {
        const cvRef = firebase.database().ref().child('Config');
        cvRef.on('value', snap => {
            this.setState({
                dbval: snap.val()
            });
        });
    }

    render() {
        return (
            <div className="page-home">
                <h2>so you are now on page home {this.state.dbval}</h2>
            </div>
        )
    }
}

export { PageHome };
