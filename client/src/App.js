import React, { useState, useEffect } from "react";
import "./styles/Global.css";
import Jobs from "./components/Jobs";
import fetchJobs from "./utils/fetchJobs";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs(setJobs);
  }, []);

  return (
    <div>
      <Jobs allJobs={jobs} />
    </div>
  );
}

export default App;
