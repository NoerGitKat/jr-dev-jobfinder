const CronJob = require('cron').CronJob;

const fetchGithubJobs = require('./jobs/fetch-github-jobs');

// Every minute fetch GitHub jobs
const cronFetchGHJobs = new CronJob('* * * * *', fetchGithubJobs, null, true, 'America/Los_Angeles');

module.exports = cronFetchGHJobs;
