const express = require("express");
const jobsRouter = express.Router();

const { getRedisData } = require("./../../caching");

jobsRouter.get("/", async (req, res) => {
  // Get Github jobs from DB
  const githubJobs = await getRedisData("Github Jobs");

  res
    .header("Access-Control-Allow-Origin", "http://localhost:3000")
    .json(githubJobs);
});

module.exports = jobsRouter;
