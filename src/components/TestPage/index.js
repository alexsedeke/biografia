import React from 'react';

export const TestPage = () => (
    <div className="testpage">
        Page for testing purpose only.
        {(this.props && this.props.testValue)? this.props.testValue :'no value given'}
    </div>
)
