import fetch from 'node-fetch';

const fetchJobs = async setState => {
	const response = await fetch('http://localhost:5000/api/jobs');
	const jobs = await response.json();
	const parsedJobs = JSON.parse(jobs);
	if (parsedJobs) {
		setState(parsedJobs);
	}
	return jobs;
};

export default fetchJobs;
