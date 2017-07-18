import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import Center from '../components/wrappers/center';
import Switch from '../components/switch/switch';
import TextButton from '../components/button/textButton';
import Spinner from '../components/button/spinner/index';
import NavigationTab from '../components/tab/navigationTab/index'
import buttonStyles from '../styles/buttonStyles.css'
import switchStyles from '../styles/switchStyles.css'
import textButtonStyles from '../components/button/textButtonStyles.css'
import spinnerStyles from '../styles/spinnerStyles.css'
import img from '../components/circle-loading-black.png';
import ButtonName from '../components/button/buttonName';

let contentMassive = [
    {
        key: 'Selected Option',
        value: <div>
            <h3>Paris</h3>
            <p>
                Paris is the capital of France.
            </p>
        </div>
    },
    {
        key: 'Not Selected Option',
        value: [<div>
            <h3>London</h3>
            <p>London is the capital city of England.</p>
        </div>,
            <div>
                <h3>Test</h3>
                <p>Test section.</p>
            </div>,
            <div>
                <h3>Paris</h3>
                <p>
                    Paris is the capital of France.
                </p>
            </div>,
            <div>
                <h3>Paris</h3>
                <p>
                    Paris is the capital of France.
                </p>
            </div>]
    },

    {
        key: 'Test section',
        value: <div>
            <h3>Test</h3>
            <p>Test section.</p>
        </div>
    }
];

storiesOf('Switch', module)
    .add('switch', () => (
        <Center>
            <Switch switchClassName='switch'
                    sliderClassName='slider'/>
        </Center>
    ));
storiesOf('Text button', module)
    .add('regular', () => (
        <Center>
            <TextButton buttonClassName='text-button-default-state'
                        contentBlockClassName='button-content-block'
                        disabled={false}
                        spinner={(<Spinner spinnerBlockClassName='spinnerBlock'
                                           imgUrl={img}/>)}
                        buttonName={(<ButtonName name='Processing'/>)}>
            </TextButton>
        </Center>
    ));
storiesOf('Tab', module)
    .add('navigationControls', () => (
        <Center>
            <NavigationTab mapSectionContent={contentMassive}/>
        </Center>
    ));








