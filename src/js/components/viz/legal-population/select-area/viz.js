import React from 'react';
import DataTable from 'js/components/shared/table';
import Hints from 'js/components/shared/hints';

export default ({ data }) => {
	const xyData = data.map(({ date, population }) => ({
		x: new Date(date).getTime(),
		y: population,
	}));
	return (
		<div>
			<div className="mui-row loading-row">
				<div className="mui-col-md-12">
					<DataTable title="Population légales d'Île de France" data={data} />
				</div>
			</div>
			<div className="mui-row loading-row">
				<div className="mui-col-md-12">
					<Hints data={xyData} xName="Date" yName="Population" />
				</div>
			</div>
		</div>
	);
};
