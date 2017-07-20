import React from 'react';
import firebase from 'firebase';

class PageAdmin extends React.Component {
    state = {
        dbval: 'Admin'
    }

    componentDidMount() {
        // const cvRef = firebase.database().ref().child('Config');
        // cvRef.on('value', snap => {
        //     this.setState({
        //         dbval: snap.val()
        //     });
        // });
    }

    render() {
        return (
            <div className="page-admin">
                <h2>so you are now on page admin {this.state.dbval}</h2>
            </div>
        )
    }
}

export { PageAdmin };
