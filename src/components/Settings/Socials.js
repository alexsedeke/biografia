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
        this.dbItemRef = this.getDBRef().child('socials');
    }

    getDBRef() {
        return firebase.database().ref();
    }

    componentDidMount() {
        this.listenForSocials();
    }


    listenForSocials() {
        this.dbItemRef.on('value', (socials) => {
            socials.forEach((socialRecord) => {
                this.setState({
                    socials: update(this.state.socials, {[socialRecord.key]: {$set: socialRecord.val()}})
                });
            } );
        } );
    }

    listSocialItems() {
        return Object.entries(this.state.socials).map( social => {
            return <li key={social[0]} className="social__item">
                        <div className="social__item-content">
                            {social[1].caption}, {social[1].link}, {social[1].icon}
                        </div>

                        <div className="social__item-delete" onClick={() => this.removeSocialItem(social[0])}>
                            delete
                        </div>
                   </li>
        });
    }

    removeSocialItem( key ) {
        this.dbItemRef.child(key).remove();
    }

    handleAddSocial = ( evt ) => {
        this.dbItemRef.push({
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
