const express = require("express");
const path = require("path");

const app = express();

const routes = require("./routes");

const port = process.env.PORT || 3333;

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "../", "public")));
app.use(express.json());
app.use(routes);

app.listen(port);