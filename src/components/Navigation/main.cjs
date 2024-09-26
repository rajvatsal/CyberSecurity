const { on } = require("../../utilities/PubSub.js").default;

const html = require("./index.html").default;
const scripts = require.context("./scripts/", false, /\.js/);
require("./styles.css");

module.exports = () => {
	return { html, scripts };
};

on("ChangePagePre", ({ className }) => {
	const btn = document.querySelector(`#inter-page-nav  .${className}`);

	document
		.querySelector("#inter-page-nav .current-page")
		.classList.remove("current-page");
	btn.classList.add("current-page");
});
