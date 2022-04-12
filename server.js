require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require("./route/contactRoute");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use("/", contactRoute);


const port = process.env.PORT || 8000;
app.listen(port, console.log(`Server running on port 8000`));
