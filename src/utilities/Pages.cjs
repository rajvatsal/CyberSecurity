// This module imports/requires all the pages for the website by requiring main.js files in pages directory
const { emit } = require("./PubSub.js").default;
const context = require.context("../pages/", true, /main\.js/);
const pages = context.keys().reduce((acc, k) => {
	const pageName = k.split("/").slice(-2, -1)[0].toLowerCase();
	acc[pageName] = {
		// Class names must be same as lowercase page names with '-page' extension
		// Name of directory containing page must be equal to page name && first letter capital
		className: `${pageName}-page`,
		load: function () {
			// documentElement is css :root equivalent in js
			// scroll to top on loading another page cuz footer links glitch without it
			emit("ChangePagePre", { className: this.className });
			document.documentElement.style.scrollBehavior = "auto";
			document.documentElement.scrollTop = 0;
			context(k).default();
			document.documentElement.removeAttribute("style");
			emit("ChangePagePost", {});
		},
	};
	return acc;
}, {});

module.exports = { pages };
