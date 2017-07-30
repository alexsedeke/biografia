import React from 'react';
import update from 'immutability-helper';
import * as firebase from 'firebase';
import { Field } from '../Field';
import './profile-image.css';

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
        image: '',
        profileimage: {
            path: '',
            url: ''
        }
    }

    constructor() {
        super();
        this.db = firebase.database().ref();
    }

    componentDidMount() {
        this.db.child('profile').on('value', (snapshot) => {
            snapshot.forEach((childSnap) => {
                if (typeof this.state[childSnap.key] === 'object' ) {
                    this.setState({
                        [childSnap.key]: {
                            value: childSnap.val(),
                            origin: childSnap.val()
                        }
                    });
                } else {
                    this.setState({
                        [childSnap.key]: childSnap.val()
                    });
                }
            });
            this.setImageUrl();
        } );
    }

    setImageUrl() {
        if( this.state.image !== this.state.profileimage.path ) {
            if( !this.state.image ) {
                this.setState( {
                    profileimage: {
                        path: '',
                        url: ''
                    }
                } );
            } else {
                firebase.storage().ref( this.state.image ).getDownloadURL().then( (url) => {
                    this.setState( {
                        profileimage: {
                            path: this.state.image,
                            url: url
                        }
                    } );
                });
            }
        }
    }

    deleteImage( path) {
        let storageRef = firebase.storage().ref( path );
        storageRef.delete().then( () => {
            console.log('old file successfuly deteted', path);
        } ).catch( (err) => {
            console.log('old file could not be deteted');
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
            this.db.child('profile').update( { [field]: value } )
        }
    }

    handleOnFileChange = (evt) => {
        let file = evt.target.files[0];
        let path = 'profile/public/' + file.name;
        let storage = firebase.storage().ref( path );
        let uploadTask = storage.put( file );
        uploadTask.on('state_changed',
            // progress
            (snapshot) => {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('percentage:', percentage);
                // this.setState({
                //     image: update(this.state.image, {progress: {$set: percentage}})
                // });
            },
            // error handleOnFileChange
            (err) => {
                console.log(err);
            },
            // completed
            () => {
                this.deleteImage( this.state.image );
                this.db.child('profile').update( { image: path } );
            }
        );
    }

    render() {
        return (
            <div className="column-view limit-width">
                <div className="column">
                    <picture className="profile-image">
                        <img src={this.state.profileimage.url} alt="Profile" />
                    </picture>
                    <input type="file" id="profile-upload" name="profile-upload" className="inputfile" onChange={this.handleOnFileChange} />
                    <label htmlFor="profile-upload">Choose a file</label>
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
