import html from "./index.html";
import css from "./styles.css";

const main = document.getElementById("main-content");

export default function () {
	main.innerHTML = html;
}
