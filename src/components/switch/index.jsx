import React from 'react'
import PropTypes from 'prop-types';
import './index.css'

const Switch = ({switchStyle, sliderStyle}) => (
    <label className='switch' style={switchStyle}>
        <input type="checkbox"/>
        <span className='slider' style={sliderStyle}/>
    </label>
);

Switch.propTypes = {
    switchStyle: PropTypes.string,
    sliderStyle: PropTypes.string,
};

export default Switch;