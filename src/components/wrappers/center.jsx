import React, {PropTypes} from 'react'

const styles = {
    textAlign: 'center',
};

const Center = ({ children }) => (
    <div style={styles}>
        { children }
    </div>
);

Center.propTypes = {
    children: PropTypes.object.isRequired
};

export default Center;


