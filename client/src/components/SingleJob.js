import React from 'react';
import { Typography, Paper } from '@material-ui/core';

const SingleJob = ({ job, handleModalClick }) => {
	const { title, company, location, created_at } = job;
	const createdAtShort = created_at
		.split(' ')
		.slice(0, 3)
		.join(' ');
	return (
		<Paper className="singleJob" onClick={() => handleModalClick(job)}>
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
