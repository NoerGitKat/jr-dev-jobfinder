import React from "react";

const SingleJob = ({ job }) => {
  const { title, company } = job;
  return (
    <div className="singleJob">
      {title}
      {company}
    </div>
  );
};

export default SingleJob;
