import React, {PropTypes, Component} from 'react'
import './index.css';
import Content from '../content'
import Section from '../section'

class NavigationTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sectionName: props.sectionAndContentPairArray[0].key,
        };
        this.onSectionClickHandle = this.onSectionClickHandle.bind(this);
    }

    onSectionClickHandle(name) {
        this.setState({sectionName: name})
    }

    render() {
        const {sectionAndContentPairArray} = this.props;
        const {sectionName} = this.state;
        let contentElementIndex;
        return (
            <div>
                <ul className='sections-container'>
                    {
                        sectionAndContentPairArray.map((content) =>
                            <Section key={content.key} sectionName={content.key} onClick={this.onSectionClickHandle}
                                     isSelected={sectionName === content.key}/>
                        )
                    }
                </ul>

                <Content content={sectionAndContentPairArray.find(content => content.key === sectionName).value}/>
            </div>
        )
    }
}

NavigationTab.propTypes = {
    sectionAndContentPairArray: PropTypes.array.isRequired,
};
export default NavigationTab;