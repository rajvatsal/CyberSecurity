const _navBar = document.querySelector("header");
let _lastScroll = window.scrollY;

console.log(_lastScroll);

window.addEventListener("scroll", () => {
	if (_lastScroll > window.scrollY) _navBar.classList.add("up");
	else _navBar.classList.remove("up");

	_lastScroll = window.scrollY;
});
