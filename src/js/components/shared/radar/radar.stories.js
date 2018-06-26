import React from 'react';
import { storiesOf } from '@storybook/react';
import globalDecorator from 'global-decorator';
import Radar from './';
import 'react-vis/dist/style.css';

const stories = storiesOf('Radar', module);
stories.addDecorator(globalDecorator);

const data = [
	{ name: 'Toto', axeA: 10, axeB: 5, axeC: 5 },
	{ name: 'Titi', axeA: 5, axeB: 7, axeC: 8 },
	{ name: 'Tata', axeA: 0, axeB: 3, axeC: 9 },
];

stories.add('Default', () => <Radar data={data} />);
