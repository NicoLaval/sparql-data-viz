import React from 'react';
import { Route } from 'react-router-dom';
import { items } from './component-list';

export default () => (
	<div>
		{items.map(
			({ route, type, component }) =>
				type === 'SubHeader' ? null : (
					<Route key={route} exact path={route} component={() => component} />
				)
		)}
	</div>
);
