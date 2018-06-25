import React from 'react';
import * as C from './components';

export const items = [
	{ route: '/', title: 'Sommaire', body: <C.Home /> },
	{
		route: '/legal-pop-idf',
		title: "Population légales d'Île de France",
		body: <C.Component />,
	},
];
