import React from "react";
import "./styles/Global.css";
import Jobs from "./components/Jobs";

const allJobs = [
  { title: "manager", company: "Google" },
  { title: "jr. dev", company: "Facebook" }
];

function App() {
  return (
    <div>
      <Jobs allJobs={allJobs} />
    </div>
  );
}

export default App;
