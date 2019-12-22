const express = require("express");
const app = express();
const jobsRouter = require("./routes/jobsRouter");

const PORT = process.env.PORT || 5000;

app.use("/api/jobs", jobsRouter);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
