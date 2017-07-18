import React, {PropTypes} from 'react'


const textButton = ({buttonName, buttonClassName, style, contentBlockClassName, disabled, spinner}) => (
    <button className={buttonClassName} style={style} disabled={disabled}>
        <div className={contentBlockClassName}>
            {spinner}{buttonName}
        </div>
    </button>
);
export default textButton;