const express = require("express");
const path = require("path");
const routes = express.Router();

routes.get("/", (request, response) => {
    response.render("index.ejs");
});

routes.get("/solucoes-turisticas", (request, response) => {
    response.render("solucoes-turisticas.ejs");
});

routes.get("/portfolio", (request, response) => {
    response.render("portfolio.ejs");
});

routes.get("/valores", (request, response) => {
    response.render("valores.ejs");
});

routes.get("/cits", (request, response) => {
    response.render("cits.ejs");
});

routes.get("/roteiros", (request, response) => {
    response.render("roteiros.ejs");
});

module.exports = routes;