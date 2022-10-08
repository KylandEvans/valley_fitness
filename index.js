const express = require("express");
const app = express();
const port = 8080;
const ejs = require("ejs");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.render("index");
});

app.listen(port, () => {
	console.log(`LISTENING ON PORT ${port}`);
});
