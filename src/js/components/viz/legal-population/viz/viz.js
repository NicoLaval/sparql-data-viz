import React from 'react';
import DataTable from 'js/components/shared/table';
import Hints from 'js/components/shared/hints';
import { deleteLabelFromArray, extractLabel } from 'js/utils/array-utils';

export default ({ data }) => {
	const xyData = data.map(({ date, population }) => ({
		x: new Date(date).getTime(),
		y: population,
	}));
	return (
		<div>
			<div className="mui-row loading-row">
				<div className="mui-col-md-12">
					<DataTable
						title={extractLabel(data)}
						data={deleteLabelFromArray(data)}
					/>
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
