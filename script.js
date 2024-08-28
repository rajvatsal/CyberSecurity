const hideNavbar = (() => {
	const _navBar = document.querySelector("header");
	let _lastScroll = window.scrollY;

	console.log(_lastScroll);

	window.addEventListener("scroll", () => {
		if (_lastScroll > window.scrollY) _navBar.classList.add("up");
		else _navBar.classList.remove("up");

		_lastScroll = window.scrollY;
	});
})();

const setMobileNav = (() => {
	const primaryNav = document.querySelector(".nav-bar__primary-navigation");
	const navToggle = document.querySelector(".mobile-nav-toggle");

	navToggle.addEventListener("click", () => {
		const visibility = primaryNav.getAttribute("data-visible");

		if (visibility === "false") {
			primaryNav.setAttribute("data-visible", true);
			primaryNav.setAttribute("style", "overflow: hidden");
			navToggle.setAttribute("aria-expanded", true);

			const dd = document.querySelector(".dd-connections");
			const conn = document.querySelector(".connections");

			conn.querySelector("a").addEventListener("click", () => {
				dd.classList.add("show");

				dd.setAttribute(
					"style",
					" left:0px; font-size: 14px; width: 220px; padding: 12px 15px",
				);
			});
		} else {
			primaryNav.setAttribute("data-visible", false);
			navToggle.setAttribute("aria-expanded", false);
		}
	});
})();

const copyMail = (() => {
	const _copyContent = () => {
		navigator.clipboard.writeText(_text);
		alert("copied email to clipboard");
		console.log("Content copied to clipboard");
	};

	let _text = "dr.preetimishra@doonuniversity.ac.in";
	let _mail = document.querySelector(".email");
	_mail.addEventListener("click", _copyContent);
})();

const dropdown = (function () {
	const dd = document.querySelector(".dd-connections");
	const conn = document.querySelector(".connections");
	conn.addEventListener("mouseleave", () => dd.classList.remove("show"));

	conn
		.querySelector("a")
		.addEventListener("mouseenter", () => dd.classList.add("show"));
})();
