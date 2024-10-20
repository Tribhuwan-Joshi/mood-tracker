const express = require("express");
const cors = require("cors");
const config = require("./utils/config");
require("express-async-errors"); // using this package to avoid try-catch clutter in code- all errors are passed to middleware
const { getAIResponse } = require("./utils/helper");
const { errorHandler } = require("./utils/middlewares");

const app = express();
app.use(express.json());
app.use(cors());
// Would be helpful when deployed
app.get("/", (req, res) => {
  res.send("this is a health endpoint");
});

app.post("/mood-insights", async (req, res) => {
  const { mood, description } = req.body;
  if (!description) {
    return res.status(400).json({ error: "Please provide description" });
  }
  const response = await getAIResponse(mood, description); // Here, I am using clean architecture: our choice of LLM model and fetching method should be separated from the main endpoint.

  res.status(200).json({ response });
});

app.use(errorHandler);

app.listen(config.PORT, () =>
  console.log("server listening at port", config.PORT)
);
