import React from 'react';
import * as C from './components';

export const items = [
	{ route: '/', title: 'Sommaire', body: <C.Home /> },
	{ route: '', title: 'Démographie', type: 'SubHeader' },
	{
		route: '/legal-pop-idf',
		title: 'Populations légales',
		body: <C.Component />,
	},
];
