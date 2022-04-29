const express = require("express");
const path = require("path");

const app = express();
app.use("/public/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/template/index.html");
});

app.listen(3000 || process.env.PORT);
