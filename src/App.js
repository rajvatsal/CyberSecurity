import "./utilities/utility.css";
import { loadAll } from "./utilities/utility.cjs";
import Navigation from "./components/Navigation/main.cjs";
import Footer from "./components/Footer/main.cjs";
import home from "./pages/Home/main.js";
import mou from "./pages/Mou/main.js";
import publications from "./pages/Publications/main.js";
import projects from "./pages/Projects/main.js";
import people from "./pages/People/main.js";
import research from "./pages/Research/main.js";

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
home();

// Add event listeners to load sub-pages
const linksMou = document.getElementsByClassName("mou-page");
const linksPublication = document.getElementsByClassName("publications-page");
const linksHome = document.getElementsByClassName("home-page");
const linksProjects = document.getElementsByClassName("projects-page");
const linksPeople = document.getElementsByClassName("people-page");
const linksResearch = document.getElementsByClassName("research-page");

for (const link of linksMou) {
	link.addEventListener("mousedown", mou);
}

for (const link of linksPublication) {
	link.addEventListener("mousedown", publications);
}

for (const link of linksHome) {
	link.addEventListener("mousedown", home);
}

for (const link of linksProjects) {
	link.addEventListener("mousedown", projects);
}

for (const link of linksPeople) {
	link.addEventListener("mousedown", people);
}

for (const link of linksResearch) {
	link.addEventListener("mousedown", research);
}

