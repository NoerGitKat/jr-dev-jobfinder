import fetch from "node-fetch";

const fetchJobs = async setJobs => {
  const response = await fetch("http://localhost:5000/api/jobs");
  const jobs = await response.json();
  const parsedJobs = JSON.parse(jobs);
  setJobs(parsedJobs);
  return jobs;
};

export default fetchJobs;
