const express = require("express");
const route = express();
const Controller = require("../controllers/users");

route.post("/", Controller.store).get("/:email", Controller.info);

module.exports = route;
