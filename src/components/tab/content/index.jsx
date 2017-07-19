import React from 'react'
import PropTypes from 'prop-types';
import './index.css'

const Content = ({content}) => (
    <div className='content-container'>
        {content}
    </div>
);

Content.propTypes = {
    content: PropTypes.array.isRequired,
};

export default Content;