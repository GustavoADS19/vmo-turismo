const express = require("express");
const routes = express.Router();

const EmailController = new (require("./controllers/EmailController"));

routes.get("/", (request, response) => {
    response.render("index.ejs", {enviado: false, location: ""});
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

routes.get("/patrocinio", (request, response) => {
    response.render("patrocinio.ejs");
});

routes.post("/contato", async (request, response) => {
    await EmailController.send("thiagodantas@dkseventos.com.br", "Um novo contato respondeu ao formulário! 👋", "contato", request.body);
    response.status(201).render("index.ejs", { enviado: true, location: "#contato" });
});

module.exports = routes;