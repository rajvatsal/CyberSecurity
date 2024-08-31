const wpContextObj = require.context("../icons/", true);
module.exports = wpContextObj.keys().reduce((acc, key) => {
	acc[key.replace("./", "").split(".")[0]] = key;
	return acc;
}, {});
