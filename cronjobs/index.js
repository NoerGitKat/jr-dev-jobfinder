const CronJob = require("cron").CronJob;

const fetchGithub = require("./jobs/fetch-github");

// Every minute fetch GitHub jobs
new CronJob("* * * * *", fetchGithub, null, true, "America/Los_Angeles");
