import "./utilities/utility.css";
import { loadAll } from "./utilities/utility.cjs";
import Navigation from "./components/Navigation/main.cjs";
import "./components/Footer/main.js";
import home from "./pages/Home/main.js";

const main = document.getElementById("main-content");
const nav = Navigation();

// Load navigation/topbar/site-wide banner
main.insertAdjacentHTML("beforebegin", nav.html);
loadAll(nav.scripts);

home();
