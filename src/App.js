import "./utilities/utility.css";
import { loadAll } from "./utilities/Utility.cjs";
import { pages } from "./utilities/Pages.cjs";
import Navigation from "./components/Navigation/main.cjs";
import Footer from "./components/Footer/main.cjs";

const main = document.getElementById("main-content");
const nav = Navigation();
const footer = Footer();

// Load navigation/topbar/site-wide banner
main.insertAdjacentHTML("beforebegin", nav.html);
loadAll(nav.scripts);

// Load footer
main.insertAdjacentHTML("afterend", footer.html);
loadAll(footer.scripts);

// Load homepage
pages.home.load();

// Add event listeners to load sub-pages
for (const page in pages) {
	const { className, load } = pages[page];
	Array.from(document.getElementsByClassName(className), (link) =>
		link.addEventListener("mousedown", load.bind(pages[page])),
	);
}
