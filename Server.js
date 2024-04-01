const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// Files to path

// const __filename = fileURLTOPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/Homepage", (req, res) => {
  res.status(200).sendFile(path.join(__dirname + "/Cv_index.html"));
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening ${process.env.PORT || 3001}`);
});
