import React from 'react';
import update from 'immutability-helper';
import * as firebase from 'firebase';
import { Field } from '../Field';
import { notifications } from '../../service/notifications';
import './sections.css';

class Sections extends React.Component {
    state = {

    }

    constructor() {
        super();
        this.dbItemRef = this.getDBRef().child('socials');
    }


    getDBRef() {
        return firebase.database().ref();
    }


    componentDidMount() {
        this.dbItemRef.on('value', (snap) => {
            console.log('something');
        });
    }


    componentWillUnmount() {
        this.dbItemRef.off();
    }

    render() {
        return (
            <div className="sections-view limit-width">
                <h2>Sections placeholder</h2>
            </div>
        );
    }
}

export { Sections };
