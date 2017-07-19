import React from 'react'
import PropTypes from 'prop-types';
import Spinner from '../spinner'
import Text from '../text'
import './index.css'


const Content = ({imgUrl, spinnerStyle, text, contentStyle, textStyle}) => (
    <div className='button-content-container' style={contentStyle}>
        <Spinner imgUrl={imgUrl} style={spinnerStyle}/>
        <Text text={text} style={textStyle}/>
    </div>
);

Content.propTypes = {
    contentStyle: PropTypes.string,
    imgUrl: PropTypes.string,
    spinnerStyle: PropTypes.string,
    text: PropTypes.string,
    textStyle:PropTypes.string
};

export default Content;