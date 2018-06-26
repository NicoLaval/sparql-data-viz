import React from 'react';
import { storiesOf } from '@storybook/react';
import globalDecorator from 'global-decorator';
import Bubble from './';
import 'react-vis/dist/style.css';

const stories = storiesOf('Bubble', module);
stories.addDecorator(globalDecorator);

const xyData = Array(100)
	.fill('')
	.map(a => ({
		x: (Math.random() * 10).toPrecision(2),
		y: (Math.random() * 10).toPrecision(2),
		size: (Math.random() * 10).toPrecision(2),
	}));

stories.add('Default', () => (
	<Bubble
		data={xyData}
		xName="Taux ..."
		yName="Taux ..."
		sizeName="Population"
	/>
));
