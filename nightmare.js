const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: false });


async function openSite(url) {
  await nightmare.goto(url)
  return await nightmare.title();
}

async function getData() {
  return { title: await nightmare.title(), url: await nightmare.url() };
}

async function closeSite() {
  return await nightmare.end()
}

module.exports = { openSite, getData, closeSite };
