import React from 'react';
import * as firebase from 'firebase';

class Profile extends React.Component {
    state = {
        title: '',
        firstname: '',
        lastname: '',
        email: '',
        occupation: '',
        country: '',
        city: '',
        image: ''
    }

    componentWillMount() {

    }

    handleFieldUpdate = (evt) => {
        let newObject = {};
        newObject[evt.target.id] = evt.target.value;
        this.setState( newObject );
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
                            <input type="text" id="title" value={this.state.title} onChange={this.handleFieldUpdate} placeholder="Title" />
                        </div>
                    </div>

                    <div className="form__subset">
                        <label htmlFor="firstname" className="field__label">Firstname</label>
                        <div className="field__wrapper">
                            <input type="text" id="firstname" value={this.state.firstname} onChange={this.handleFieldUpdate} placeholder="Firstname" />
                        </div>
                    </div>

                    <div className="form__subset">
                        <label htmlFor="lastname" className="field__label">Lastname</label>
                        <div className="field__wrapper">
                            <input type="text" id="lastname" value={this.state.lastname} onChange={this.handleFieldUpdate} placeholder="Lastname" />
                        </div>
                    </div>

                    <div className="form__subset">
                        <label htmlFor="email" className="field__label">Email</label>
                        <div className="field__wrapper">
                            <input type="text" id="email" value={this.state.email} onChange={this.handleFieldUpdate} placeholder="Email" />
                        </div>
                    </div>

                    <div className="form__subset">
                        <label htmlFor="occupation" className="field__label">Occupation</label>
                        <div className="field__wrapper">
                            <input type="text" id="occupation" value={this.state.occupation} onChange={this.handleFieldUpdate} placeholder="Occupation" />
                        </div>
                    </div>

                    <div className="form__subset">
                        <label htmlFor="country" className="field__label">Country</label>
                        <div className="field__wrapper">
                            <input type="text" id="country" value={this.state.country} onChange={this.handleFieldUpdate} placeholder="Country" />
                        </div>
                    </div>

                    <div className="form__subset">
                        <label htmlFor="city" className="field__label">City</label>
                        <div className="field__wrapper">
                            <input type="text" id="city" value={this.state.city} onChange={this.handleFieldUpdate} placeholder="City" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Profile };
