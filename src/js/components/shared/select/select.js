import React from 'react';
import { SelectField } from 'material-ui';
import { MenuItem } from 'material-ui';

function Select({ label, options, value, onChange }) {
	const labelStyle = {
		color: 'black',
	};
	const style = {
		color: 'black',
		width: '100%',
		marginBottom: '20px',
	};

	const data = options.map(code => (
		<MenuItem key={code.id} value={code.id} primaryText={code.label} />
	));

	return (
		<div>
			<div className="mui-row">
				<h2 className="mui-col-md-6">{label}</h2>
				<SelectField
					value={value}
					onChange={(e, k, value) => onChange(value)}
					style={style}
					labelStyle={labelStyle}
				>
					{data}
				</SelectField>
			</div>
		</div>
	);
}

export default Select;
