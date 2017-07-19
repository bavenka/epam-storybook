import React from 'react'
import Content from '../content'
import './index.css'

const TextButton = ({style, disabled, imgUrl, spinnerStyle, text, textStyle, contentStyle}) => (
    <button className='text-button-default-state' style={style} disabled={disabled}>
        <Content contentStyle={contentStyle} imgUrl={imgUrl} spinnerStyle={spinnerStyle} text={text}
                 textStyle={textStyle}/>
    </button>
);
export default TextButton;