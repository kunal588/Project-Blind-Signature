const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/template/index.html");
});

app.listen(3000 || process.env.PORT);
