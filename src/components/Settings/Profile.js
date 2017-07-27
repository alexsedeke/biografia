import React from 'react';
import update from 'immutability-helper';
import * as firebase from 'firebase';

class Profile extends React.Component {
    state = {
        title: {
            value: '',
            origin: '',
            required: false,
            message: ''
        },
        firstname: {
            value: '',
            origin: '',
            required: true,
            message: ''
        },
        lastname: {
            value: '',
            origin: '',
            required: true,
            message: ''
        },
        email: {
            value: '',
            origin: '',
            required: false,
            message: ''
        },
        occupation: {
            value: '',
            origin: '',
            required: false,
            message: ''
        },
        country: {
            value: '',
            origin: '',
            required: false,
            message: ''
        },
        city: {
            value: '',
            origin: '',
            required: false,
            message: ''
        },
        image: {
            value: '',
            origin: '',
            required: false,
            message: ''
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
        let {fielding: id, val: value} = evt.target;
        console.log(fielding, val);

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
                    <div className="form__subset">
                        <label htmlFor="title" className="field__label">Title</label>
                        <div className="field__wrapper">
                            <input type="text" id="title" value={this.state.title.value} onChange={this.handleFieldUpdate} onBlur={this.handleOnBlur} placeholder="Title" />
                        </div>
                    </div>

                    <div className="form__subset">
                        <label htmlFor="firstname" className="field__label">Firstname</label>
                        <div className="field__wrapper">
                            <input type="text" id="firstname" value={this.state.firstname.value} onChange={this.handleFieldUpdate} onBlur={this.handleOnBlur} placeholder="Firstname" />
                        </div>
                    </div>

                    <div className="form__subset">
                        <label htmlFor="lastname" className="field__label">Lastname</label>
                        <div className="field__wrapper">
                            <input type="text" id="lastname" value={this.state.lastname.value} onChange={this.handleFieldUpdate} onBlur={this.handleOnBlur} placeholder="Lastname" />
                        </div>
                    </div>

                    <div className="form__subset">
                        <label htmlFor="email" className="field__label">Email</label>
                        <div className="field__wrapper">
                            <input type="text" id="email" value={this.state.email.value} onChange={this.handleFieldUpdate} onBlur={this.handleOnBlur} placeholder="Email" />
                        </div>
                    </div>

                    <div className="form__subset">
                        <label htmlFor="occupation" className="field__label">Occupation</label>
                        <div className="field__wrapper">
                            <input type="text" id="occupation" value={this.state.occupation.value} onChange={this.handleFieldUpdate} onBlur={this.handleOnBlur} placeholder="Occupation" />
                        </div>
                    </div>

                    <div className="form__subset">
                        <label htmlFor="country" className="field__label">Country</label>
                        <div className="field__wrapper">
                            <input type="text" id="country" value={this.state.country.value} onChange={this.handleFieldUpdate} onBlur={this.handleOnBlur} placeholder="Country" />
                        </div>
                    </div>

                    <div className="form__subset">
                        <label htmlFor="city" className="field__label">City</label>
                        <div className="field__wrapper">
                            <input type="text" id="city" value={this.state.city.value} onChange={this.handleFieldUpdate} onBlur={this.handleOnBlur} placeholder="City" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Profile };
