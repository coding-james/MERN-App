"use strict"

const express = require("express");
const app = express();

const routes = require("./caveRoutes");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/caveRoutes", routes);
// Example for postman localhost:4000/caveRoutes/allCaves

app.use((err, req, res, next) => {
    console.log(err.stack);
    next(err);
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

// app.listen(4000);
const server = app.listen(4000, () => console.log(`Server successfully started on port, ${server.address().port}`));