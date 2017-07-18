import React, {PropTypes, Component} from 'react'
import './index.css';

class Section extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick(this.props.sectionName);
    }


    render() {
        let {sectionName, isSelected} = this.props;

        return (
            <li className={`section ${ isSelected ? 'selected-section' : ''}`}
                onClick={this.onClick} name={sectionName}>
                <span>{sectionName}</span>
            </li>
        )
    }
}

Section.propTypes = {
    sectionName: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

export default Section;