import html from "./index.html";
import "./styles.css";

const main = document.getElementById("main-content");
export default function () {
	main.innerHTML = html;
}
