export default () => {
	const navBar = document.querySelector("header");
	let lastScroll = window.scrollY;

	window.addEventListener("scroll", () => {
		if (lastScroll > window.scrollY) navBar.classList.add("up");
		else navBar.classList.remove("up");

		lastScroll = window.scrollY;
	});
};
