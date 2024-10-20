const express = require("express");
const cors = require("cors");
const config = require("./utils/config");
const app = express();
app.use(express.json());

// Would be helpful when deployed
app.get("/", (req, res) => {
  res.send("this is a health endpoint");
});

app.post("/mood-insights", async (req, res) => {
  const { mood, description } = req.body;

  res
    .status(200)
    .json({ message: `Got request with ${mood} and ${description}` });
});

app.listen(config.PORT, () =>
  console.log("server listening at port", config.PORT)
);
