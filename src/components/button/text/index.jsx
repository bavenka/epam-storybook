import React from 'react'
import PropTypes from 'prop-types';

const Text = ({text, style}) => (
    <span style={style}>
        {text}
    </span>
);

Text.propTypes = {
    text: PropTypes.string,
    style: PropTypes.string,
};

export default Text;