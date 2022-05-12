import React from 'react';
import PropTypes from 'prop-types';
import './Radio.scss';

const Radio = ({label, ...props}) => {
    return (
      <div className="radio-wrapper">
          <div className="radio">
              <input type="radio" id={label} {...props}/>
              <span/>
              <label htmlFor={label}>
                  {label}
              </label>
          </div>
      </div>
    );
};

Radio.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Radio;