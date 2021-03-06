import React from 'react'
import PropTypes from 'prop-types';
import './index.css'

const Spinner = ({style, imgUrl}) => (
    <img className='spinner' style={style} alt='' src={imgUrl}/>
);

Spinner.propTypes = {
    imgUrl: PropTypes.string,
    style: PropTypes.string,
};

export default Spinner;