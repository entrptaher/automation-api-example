const express = require("express");
const app = express();
const automation = {
	puppeteer: require("./puppeteer"),
	nightmare: require("./nightmare")
};
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
	res.send({ hello: "world" });
});

app.get("/:engine/open/:url", async (req, res) => {
	let title = await automation[req.params.engine].openSite(
		`http://${req.params.url}`
	);
	res.send({ title });
});

app.get("/:engine/data", async (req, res) => {
	let data = await automation[req.params.engine].getData();
	res.send(data);
});

app.get("/:engine/close", async (req, res) => {
	await automation[req.params.engine].closeSite();
	res.send(`Browser Closed`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
