const express = require("express");
const app = express();
const automation = require("./automation");
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
	res.send({ hello: "world" });
});

app.get("/open", async (req, res) => {
	let title = await automation.openSite();
	res.send({ title });
});

app.get("/data", async (req, res) => {
	let data = await automation.getData();
	res.send(data);
});

app.get("/close", async (req, res) => {
	await automation.closeSite();
	res.send(`Browser Closed`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
