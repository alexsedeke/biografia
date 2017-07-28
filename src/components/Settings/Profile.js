import React from 'react';
import update from 'immutability-helper';
import * as firebase from 'firebase';
import { Field } from '../Field';

class Profile extends React.Component {
    state = {
        title: {
            value: '',
            origin: ''
        },
        firstname: {
            value: '',
            origin: ''
        },
        lastname: {
            value: '',
            origin: ''
        },
        email: {
            value: '',
            origin: ''
        },
        occupation: {
            value: '',
            origin: ''
        },
        country: {
            value: '',
            origin: ''
        },
        city: {
            value: '',
            origin: ''
        },
        image: {
            value: '',
            origin: ''
        }
    }

    constructor() {
        super();
        this.db = firebase.database().ref();
    }

    componentDidMount() {
        this.db.child('profile').on('value', (snapshot) => {
            snapshot.forEach((childSnap) => {
                if ((typeof this.state[childSnap.key] === 'object') && (childSnap.val()) ) {
                    this.setState({
                        [childSnap.key]: {
                            value: childSnap.val(),
                            origin: childSnap.val()
                        }
                    });
                }
            });
        } );
    }

    handleFieldUpdate = ( evt ) => {
        this.setState( {
            [ evt.target.id ]: update( this.state[ evt.target.id ], {
                value: {
                    $set: evt.target.value
                }
            } )
        } );
    }

    handleOnBlur = (evt) => {
        let field = evt.target.id;
        let value = evt.target.value;

        if (this.state[field].origin !== value) {
            this.db.child('profile').update( { [field]: value } ).then( () => {
                this.setState( {
                    [ field ]: update( this.state[ field ], {
                        origin: {
                            $set: value
                        }
                    } )
                } );
            });
        }
    }

    render() {
        return (
            <div className="column-view limit-width">
                <div className="column">
                    content column 1
                </div>
                <div className="column">
                    <Field type="text" id="title" label="Title" placeholder="Title" value={this.state.title.value} handleUpdate={this.handleFieldUpdate} handleBlur={this.handleOnBlur} />
                    <Field type="text" id="firstname" label="Firstname" placeholder="Firstname" value={this.state.firstname.value} handleUpdate={this.handleFieldUpdate} handleBlur={this.handleOnBlur} />
                    <Field type="text" id="lastname" label="Lastname" placeholder="Lastname" value={this.state.lastname.value} handleUpdate={this.handleFieldUpdate} handleBlur={this.handleOnBlur} />
                    <Field type="text" id="email" label="Email" placeholder="Email" value={this.state.email.value} handleUpdate={this.handleFieldUpdate} handleBlur={this.handleOnBlur} />
                    <Field type="text" id="occupation" label="Occupation" placeholder="Occupation" value={this.state.occupation.value} handleUpdate={this.handleFieldUpdate} handleBlur={this.handleOnBlur} />
                    <Field type="text" id="country" label="Country" placeholder="Country" value={this.state.country.value} handleUpdate={this.handleFieldUpdate} handleBlur={this.handleOnBlur} />
                    <Field type="text" id="city" label="City" placeholder="City" value={this.state.city.value} handleUpdate={this.handleFieldUpdate} handleBlur={this.handleOnBlur} />
                </div>
            </div>
        );
    }
}

export { Profile };
