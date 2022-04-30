const express = require("express");
const path = require("path");
const Endpoints = require("./endpoints");

const app = express();
app.use("/public/", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ strict: false }));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/template/index.html");
});
app.use("/", Endpoints);
app.listen(3000 || process.env.PORT);
