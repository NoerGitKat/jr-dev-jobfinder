const fetch = require("node-fetch");

const BASE_URL = "https://jobs.github.com/positions.json";

const fetchGithub = async () => {
  // Initial value
  let jobResults = 1;
  let onPage = 0;
  let allJobs = [];

  while (jobResults > 0) {
    try {
      const response = await fetch(`${BASE_URL}?page=${onPage}`);
      const jobs = await response.json();
      jobResults = jobs.length;
      allJobs.push(...jobs);
      onPage++;
    } catch (err) {
      console.log(`Server error! ${err}`);
    }
  }

  console.log("Fetched ", allJobs.length, " jobs in total!");
  // return jobs;
};

module.exports = fetchGithub;
