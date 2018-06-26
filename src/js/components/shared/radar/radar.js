import React, { Component } from 'react';
import { format } from 'd3-format';
import { RadarChart } from 'react-vis';

const basicFormat = format('.2r');
const wideFormat = format('.3r');

export default ({ data }) => (
	<RadarChart
		data={data}
		tickFormat={t => wideFormat(t)}
		startingAngle={0}
		domains={Object.entries(data).map(
			(a, i) =>
				a[0] === 'name'
					? null
					: { name: a[0], domain: [0, 10], getValue: () => i }
		)}
		width={600}
		height={600}
	/>
);
