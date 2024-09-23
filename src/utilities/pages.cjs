// This module imports/requires all the pages for the website by requiring main.js files in pages directory

const context = require.context("../pages/", true, /main\.js/);
const pages = context.keys().reduce((acc, k) => {
	const pageName = k.split("/").slice(-2, -1)[0].toLowerCase();
	acc[pageName] = {
		// Class names must be same as lowercase page names with '-page' extension
		// Name of directory containing page must be equal to page name && first letter capital
		className: `${pageName}-page`,
		load: context(k).default,
	};
	return acc;
}, {});

module.exports = { pages };
