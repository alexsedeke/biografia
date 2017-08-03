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
        this.db = firebase.database().ref();
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
