require.context("../assets/images", true, /\.(png|jpeg|jpg)$/);
require.context("../assets/icons", false, /\.(png|svg)$/);

function importAll(r) {
	const cache = [];
	// biome-ignore lint/complexity/noForEach: <explanation>
	// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
	r.keys().forEach((key) => cache.push(r(key)));
	return cache;
}

function loadAll(r) {
	r.keys().forEach((k) => r(k).default());
}

module.exports = { importAll, loadAll };