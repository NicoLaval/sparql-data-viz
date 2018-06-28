import React from 'react';
import * as C from './components';

export const items = [
	{ route: '/', title: 'Sommaire', body: <C.Home /> },
	{ route: '', title: 'Démographie', type: 'SubHeader' },
	{
		route: '/legal-pop',
		title: 'Populations légales',
		body: <C.LegalPop />,
	},
	{
		route: '/pop-evolution',
		title: 'Evolutions des populations',
		body: <C.PopEvolution />,
	},
];
