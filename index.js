require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const connection = require("./db");

connection();

app.use(express.json());
app.use("/api/users", users);
app.use("/api/password-reset", passwordReset);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
