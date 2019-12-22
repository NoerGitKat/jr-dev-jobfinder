const filterGithubJobs = allJobs => {
  // Filters by Job Title
  const jrJobs = allJobs.filter(job => {
    const jobTitle = job.title.toLowerCase();

    // Logic
    if (
      jobTitle.includes("manager") ||
      jobTitle.includes("architect") ||
      jobTitle.includes("sr.") ||
      jobTitle.includes("medior") ||
      jobTitle.includes("senior")
    ) {
      return false;
    }
    return true;
  });
  console.log("Filtered down to", jrJobs.length);
  return jrJobs;
};

module.exports = filterGithubJobs;
