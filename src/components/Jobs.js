import React from "react";
import Typography from "@material-ui/core/Typography";
import SingleJob from "./SingleJob";

const Jobs = ({ allJobs }) => {
  return (
    <div className="jobList">
      <Typography variant="h1">Junior developer jobs here!</Typography>
      {allJobs.map((job, i) => (
        <SingleJob key={`${job.title + i}`} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
