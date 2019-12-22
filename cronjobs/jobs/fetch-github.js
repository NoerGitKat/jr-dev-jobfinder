const fetch = require("node-fetch");
const { setRedisData } = require("./../../caching");

const BASE_URL = "https://jobs.github.com/positions.json";

const fetchGithub = async () => {
  try {
    // Initial value
    let jobResults = 1;
    let onPage = 0;
    let allJobs = [];

    while (jobResults > 0) {
      const response = await fetch(`${BASE_URL}?page=${onPage}`);
      const jobs = await response.json();
      jobResults = jobs.length;
      allJobs.push(...jobs);
      onPage++;
    }

    console.log("Fetched ", allJobs.length, " jobs in total!");

    const stringifiedJobs = JSON.stringify(allJobs);
    const setDataSucces = await setRedisData("Github Jobs", stringifiedJobs);
    console.log(setDataSucces);
  } catch (err) {
    console.log(`Server error! ${err}`);
  }
};

module.exports = fetchGithub;
