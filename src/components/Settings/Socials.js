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

    handleFieldUpdate = (evt) => {
        this.setState({
            socials: update(this.state.socials, { [evt.target.dataset.key]: {[evt.target.dataset.field]: {$set: evt.target.value} } })
        });
    }

    handleSave = (evt) => {
        this.getDBRef(`/socials/${[evt.target.dataset.key]}`).update({[evt.target.dataset.field]: evt.target.value});
    }

    listSocialItems() {
        return Object.entries(this.state.socials).map( social => {
            return <li key={social[0]} className="social__item">
                        <div className="social__item-content">
                            <input type="text" value={social[1].caption} data-key={social[0]} data-field="caption" onBlur={this.handleSave} onChange={this.handleFieldUpdate} placeholder="Name" className="ordinaryField" />
                            <input type="text" value={social[1].link} data-key={social[0]} data-field="link" onBlur={this.handleSave} onChange={this.handleFieldUpdate} className="ordinaryField" placeholder="Link to social account" />
                            <input type="text" value={social[1].icon} data-key={social[0]} data-field="icon" onBlur={this.handleSave} onChange={this.handleFieldUpdate} className="ordinaryField" placeholder="Link to sicial icon" />
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
            icon: '/social.svg'
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
