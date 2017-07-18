import React, {PropTypes} from 'react'

const Switch = ({switchClassName, sliderClassName}) => (
    <label className={switchClassName}>
        <input type="checkbox"/>
        <span className={sliderClassName}/>
    </label>
);

export default Switch;