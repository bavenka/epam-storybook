import React, {PropTypes} from 'react'
import './index.css';
import Content from '../content'
import Section from '../section'

class NavigationTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sectionName: props.mapSectionContent[0].key,
        };
        this.onSectionClickHandle = this.onSectionClickHandle.bind(this);
    }

    onSectionClickHandle(name) {
        this.setState({sectionName: name})
    }

    render() {
        return (
            <div>
                <ul className='sections-container'>
                    {
                        this.props.mapSectionContent.map((content) =>
                            <Section key={content.key} sectionName={content.key} onClick={this.onSectionClickHandle}
                                     isSelected={this.state.sectionName === content.key}/>
                        )
                    }
                </ul>
                <Content
                    content={this.props.mapSectionContent.find(content => content.key === this.state.sectionName).value}/>
            </div>
        )
    }
}
export default NavigationTab;