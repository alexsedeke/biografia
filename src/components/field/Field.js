import React from 'react';
import PropTypes from 'prop-types';

class Field extends React.Component {
    render() {
        return (
            <div className="form__subset">
                {this.props.label
                    ?<label htmlFor="firstname" className="field__label">{this.props.label}</label>
                    :null}
                <div className="field__wrapper">
                    <input type={this.props.type} id={this.props.id} value={this.props.value} onChange={this.props.handleUpdate} onBlur={this.props.handleBlur} placeholder={this.props.placeholder} />
                </div>
            </div>
        );
    }
}

Field.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.string,
    handleUpdate: PropTypes.func.isRequired,
    handleBlur:PropTypes.func
}

export { Field };
