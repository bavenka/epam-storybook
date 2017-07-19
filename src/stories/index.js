import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Switch from '../components/switch/index';
import TextButton from '../components/button/textButton/index';
import NavigationTab from '../components/tab/navigationTab/index'
import img from '../components/button/circle-loading-black.png';

let testMassive = [
    {
        key: 'Selected Option',
        value: [<div>
            <h3>Paris</h3>
            <p>
                Paris is the capital of France.
            </p>
        </div>]
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
        value: [<div>
            <h3>Test</h3>
            <p>Test section.</p>
        </div>]
    }
];

storiesOf('Switch', module)
    .add('switch', () => (
        <Switch/>
    ));
storiesOf('Text button', module)
    .add('regular', () => (
        <TextButton disabled={false} imgUrl={img} text='Processing'/>
    ));
storiesOf('Tab', module)
    .add('navigationControls', () => (
        <NavigationTab sectionAndContentPairArray={testMassive}/>
    ));








