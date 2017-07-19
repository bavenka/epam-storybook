import React from 'react'
import Spinner from '../spinner'
import Text from '../text'
import './index.css'


const Content = ({imgUrl, spinnerStyle, text, contentStyle, textStyle}) => (
    <div className='button-content-container' style={contentStyle}>
        <Spinner imgUrl={imgUrl} style={spinnerStyle}/>
        <Text text={text} style={textStyle}/>
    </div>
);
export default Content;