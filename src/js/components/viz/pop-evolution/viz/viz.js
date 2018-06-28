import React from 'react';
import Bubble from 'js/components/shared/bubble';

export default ({ data }) => {
	const xyData = data.map(({ label, pop2010, pop2012, pop2013 }) => ({
		x: (
			((parseInt(pop2013, 10) - parseInt(pop2012, 10)) /
				parseInt(pop2012, 10)) *
			100
		).toPrecision(3),
		y: (
			((parseInt(pop2013, 10) - parseInt(pop2010, 10)) /
				parseInt(pop2010, 10)) *
			100
		).toPrecision(3),
		size: parseInt(pop2013, 10),
		label,
	}));
	return (
		<div>
			<div className="mui-row">
				<div className="mui-col-md-12">
					<Bubble
						data={xyData}
						xName="Evolution 2012 - 2013"
						yName="Evolution 2010 - 2013"
						sizeName="Population 2013"
					/>
				</div>
			</div>
		</div>
	);
};
