import React, { Component } from 'react';
import Select from 'js/components/shared/select';
import AreaSelector from './select-area';
import Viz from './viz';
import { areas } from 'js/utils/areas';

class Main extends Component {
	constructor() {
		super();
		this.state = { type: '', area: '' };
		this.handleChangeType = type => this.setState({ type, area: '' });
		this.handleChangeArea = area => this.setState({ area });
	}

	render() {
		const { type, area } = this.state;
		return (
			<React.Fragment>
				<Select
					label="Choisissez une maille géographique"
					options={areas}
					value={type}
					onChange={this.handleChangeType}
				/>
				{type && (
					<AreaSelector
						type={type}
						area={area}
						onChange={this.handleChangeArea}
					/>
				)}
				{area && <Viz area={area} onChange={this.handleChangeArea} />}
			</React.Fragment>
		);
	}
}

export default Main;
