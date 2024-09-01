const html = require("./index.html").default;
const scripts = require.context("./scripts/", false);

module.exports = () => {
	import("./styles.css");
	return { html, scripts };
};
