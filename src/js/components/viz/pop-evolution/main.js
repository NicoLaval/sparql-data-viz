import React, { Component } from 'react';
import Select from 'js/components/shared/select';
import Viz from './viz';
import { areas } from 'js/utils/areas';

class Main extends Component {
	constructor() {
		super();
		this.state = { type: '' };
		this.handleChangeType = type => this.setState({ type });
	}

	render() {
		const { type } = this.state;
		return (
			<React.Fragment>
				<Select
					label="Choisissez une maille géographique"
					options={areas}
					value={type}
					onChange={this.handleChangeType}
				/>
				{type && <Viz type={type} />}
			</React.Fragment>
		);
	}
}

export default Main;
