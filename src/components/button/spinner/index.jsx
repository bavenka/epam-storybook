import React, {PropTypes} from 'react'
import './index.css'

const Spinner = ({style, imgUrl}) => (
    <img className='spinner' style={style} alt='' src={imgUrl}/>
);

Spinner.propTypes = {
    onClick: React.PropTypes.func
};

export default Spinner;