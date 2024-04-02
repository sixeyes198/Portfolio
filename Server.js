const express = require("express");
const cors = require("cors");
const path = require("node:path");
require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "/public", "/cv_index.html"));
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening ${process.env.PORT || 3001}`);
});
// cs;
