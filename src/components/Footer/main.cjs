module.exports = () => {
	const html = require("./index.html").default;
	const scripts = require.context("./scripts/", false);
	require("./styles.css");

	return { html, scripts };
};
