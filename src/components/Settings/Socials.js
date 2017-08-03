import React from 'react';
import update from 'immutability-helper';
import * as firebase from 'firebase';
import { Field } from '../Field';
import { notifications } from '../../service/notifications';
import './socials.css';

class Socials extends React.Component {
    state = {

    }

    constructor() {
        super();
        this.db = firebase.database().ref();
    }

    render() {
        return (
            <div className="socials-view limit-width">
                <h2>Socials placeholder</h2>
            </div>
        );
    }
}

export { Socials };
