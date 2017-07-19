import React from 'react'
import Content from '../content'
import PropTypes from 'prop-types'
import './index.css'

const TextButton = ({style, disabled, imgUrl, spinnerStyle, text, textStyle, contentStyle}) => (
    <button className='text-button-default-state' style={style} disabled={disabled}>
        <Content contentStyle={contentStyle} imgUrl={imgUrl} spinnerStyle={spinnerStyle} text={text}
                 textStyle={textStyle}/>
    </button>
);

TextButton.propTypes = {
    disabled: PropTypes.bool,
    style: PropTypes.string,
    contentStyle: PropTypes.string,
    imgUrl: PropTypes.string,
    spinnerStyle: PropTypes.string,
    text: PropTypes.string
};
export default TextButton;