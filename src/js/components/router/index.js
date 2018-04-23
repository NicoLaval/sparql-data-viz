import React from 'react';
import configureStore from 'js/store/configure-store';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Menu from 'js/components/menu';
import PagesRoutes from './routes';
import { getReducer, setQueryURL } from 'sparql-connect';
import config from 'config';

setQueryURL(config.queryURL);
const store = configureStore(getReducer());

export default () => (
	<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
		<Provider store={store}>
			<Router>
				<div>
					<Menu />
					<Switch>
						<PagesRoutes />
						/>
					</Switch>
				</div>
			</Router>
		</Provider>
	</MuiThemeProvider>
);
