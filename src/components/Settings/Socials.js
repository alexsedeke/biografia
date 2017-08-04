import React from 'react';
import update from 'immutability-helper';
import * as firebase from 'firebase';
//import { Field } from '../Field';
//import { notifications } from '../../service/notifications';
import './socials.css';

class Socials extends React.Component {
    state = {
        socials: {}
    }

    constructor() {
        super();
        this.dbItemRef = this.getDBRef().child('socials');
    }

    getDBRef( key ) {
        return firebase.database().ref( key );
    }

    /**
     * Set state only if component is mounted.
     * This ensure listners will setState only on mounted coponents.
     * @param {object} value
     */
    setMountedState( value ) {
        if (this._isMounted === true) {
            this.setState( value );
        }
    }

    componentDidMount() {
        this.listenForSocials();
    }

    componentWillMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
        this.dbItemRef.off();
    }

    listenForSocials() {
        this.dbItemRef.on('value', (socials) => {
            socials.forEach((socialRecord) => {
                this.setMountedState({
                    socials: update(this.state.socials, {[socialRecord.key]: {$set: socialRecord.val()}})
                });
            } );
        } );

        this.dbItemRef.on('child_removed', (removedSocial) => {
            let _socials = this.state.socials;
            delete(_socials[removedSocial.key]);
            this.setMountedState({
                socials: _socials
            });
        })
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
        this.dbItemRef.child(key).remove((error) => {
            if (error) {
                // call notification
            }
        });
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
