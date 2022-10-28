"use strict"

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors")
app.use(bodyParser.json());
app.use(cors());

const caveRoutes = require("./routes/cave.routes.js");

app.use(caveRoutes);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status||500).send(err.message|| "Houston we've got a problem");
});

// app.listen(4000);
const server = app.listen(4000, () => console.log(`Server successfully started on port, ${server.address().port}`));

module.exports = server