import React from 'react';
import { Typography, Paper } from '@material-ui/core';

const SingleJob = ({ job }) => {
	const { title, company, location, created_at } = job;
	const createdAtShort = created_at
		.split(' ')
		.slice(0, 3)
		.join(' ');
	return (
		<Paper className="singleJob">
			<div>
				<Typography variant="h6">{title}</Typography>
				<Typography variant="h5">{company}</Typography>
				<Typography variant="h6">{location}</Typography>
			</div>
			<div>
				<Typography>{createdAtShort}</Typography>
			</div>
		</Paper>
	);
};

export default SingleJob;
