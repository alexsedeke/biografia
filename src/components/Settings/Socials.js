import React from 'react';
import update from 'immutability-helper';
import * as firebase from 'firebase';
import { Field } from '../Field';
import { notifications } from '../../service/notifications';
import './socials.css';

class Socials extends React.Component {
    state = {
        socials: {}
    }

    constructor() {
        super();
        this.db = firebase.database().ref();
    }

    componentDidMount() {
        this.db.child('socials').on('value', (snapshot) => {
            snapshot.forEach((childSnap) => {
                this.setState({
                    socials: update(this.state.socials, {[childSnap.key]: {$set: childSnap.val()}})
                });
            } );
        } );
    }

    listSocialItems() {
        return Object.entries(this.state.socials).map( social => {
            return <li key={social[0]} className="social__link">
                        {social[1].caption}, {social[1].link}, {social[1].icon}
                   </li>
        });
    }

    handleAddSocial = (evt) => {
        this.db.child('socials').push({
            sort: 1,
            caption: 'new social connection',
            link: 'please set your connection link',
            icon: 'set link to icon to dislay'
        });
    }

    render() {
        return (
            <div className="socials-view limit-width">
                <ul className="socials__list">
                  { this.listSocialItems() }
                  <li className="socials__add" onClick={this.handleAddSocial}>+</li>
                </ul>
            </div>
        );
    }
}

export { Socials };
