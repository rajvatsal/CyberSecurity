const html = require("./index.html").default;
const scripts = require.context("./scripts/", false, /\.js/);
require("./styles.css");

module.exports = () => {
	return { html, scripts };
};
