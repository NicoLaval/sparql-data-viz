import React from 'react';
import * as C from './components';

export const items = [
	{ route: '/', title: 'Home', component: <C.Home /> },
	{
		route: '/legal-pop-idf',
		title: "Population légales d'Île de France",
		component: <C.Component />,
	},
];
