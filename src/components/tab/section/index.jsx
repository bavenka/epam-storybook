import React, {PropTypes} from 'react'
import './index.css';

class Section extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick(this.props.sectionName);
    }


    render() {
        return (
            <li className={`section ${ this.props.isSelected ? 'selected-section' : ''}`}
                onClick={this.onClick} name={this.props.sectionName}>
                <span> {this.props.sectionName}</span>
            </li>
        )
    }
}
export default Section;