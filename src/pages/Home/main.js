import "./styles.css";
import html from "./index.html";
import startCarousel from "./Carousel.js";

const main = document.getElementById("main-content");

export default function () {
	main.innerHTML = html;
	startCarousel();
}
