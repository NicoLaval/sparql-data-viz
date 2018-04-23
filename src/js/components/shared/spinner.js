import React from 'react';
import ReactLoading from 'react-loading';
import './spinner.css';
import 'app.css';

export default ({ text }) => (
	<div className="mui-container-fluid">
		<div className="mui-row loading-row">
			<div className="mui-col-md-offset-5">
				<ReactLoading
					type="spinningBubbles"
					delay={0}
					color="#ee3467"
					height={300}
					width={300}
				/>
			</div>
		</div>
		<h2 className="loading-color">{text}</h2>
	</div>
);
