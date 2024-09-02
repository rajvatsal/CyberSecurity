import "./utilities/utility.css";
import { loadAll } from "./utilities/utility.cjs";
import Navigation from "./components/Navigation/main.cjs";
import Footer from "./components/Footer/main.cjs";
import home from "./pages/Home/main.js";

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
