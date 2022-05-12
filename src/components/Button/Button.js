import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({text, primary, ...props}) => {
    return (
        <>
            {props.link ? (
                <Link to={props.link} className={`btn ${primary ? 'btn-primary' : 'btn-stroke'}`}>
                    <span>
                        {text}
                    </span>
                </Link>
            ):(
                <button type="submit" {...props} className={`btn ${primary ? 'btn-primary' : 'btn-stroke'}`}>
                    <span>
                        {text}
                    </span>
                </button>
            )}
        </>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    primary: PropTypes.bool.isRequired,
};

export default Button;