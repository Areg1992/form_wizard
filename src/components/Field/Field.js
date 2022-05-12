import React from 'react';
import PropTypes from 'prop-types';
import './Field.scss';

const Field = ({fieldName, ...props }) => {
    return (
        <div className="field">
            <div className="field-label">
                {fieldName}
            </div>
            <input type={props.type} {...props} className="field-input"/>
        </div>
    );
};


Field.propTypes = {
    fieldName: PropTypes.string.isRequired,
};

export default Field;