import React from 'react'
import './index.css'

const Switch = ({switchStyle, sliderStyle}) => (
    <label className='switch' style={switchStyle}>
        <input type="checkbox"/>
        <span className='slider' style={sliderStyle}/>
    </label>
);

export default Switch;