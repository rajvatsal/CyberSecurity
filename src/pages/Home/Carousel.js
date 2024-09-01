const automateSlideShow = (data) =>
	setInterval(changeSlideImage.bind(this, data), 2000);
const changeSlideImage = (data) => {
	const { maxSlide, slides } = data;

	data.curSlide = data.curSlide === maxSlide ? 0 : data.curSlide + 1;

	slides.forEach((slide, indx) => {
		slide.style.transform = `translateX(${100 * (indx - data.curSlide)}%)`;
	});
};

export default function () {
	let curSlide = 0;
	const nextSlide = document.querySelector("#nextBtn");
	const prevSlide = document.querySelector("#prevBtn");
	const slides = document.querySelectorAll(".carousel-slide");
	const maxSlide = slides.length - 1;
	const slideData = { slides, maxSlide, curSlide };

	slides.forEach((slide, indx) => {
		slide.style.transform = `translateX(${indx * 100}%)`;
	});

	nextSlide.addEventListener("click", changeSlideImage.bind(this, slideData));
	prevSlide.addEventListener("click", () => {
		if (!curSlide) curSlide = maxSlide;
		else curSlide--;

		slides.forEach((slide, indx) => {
			slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
		});
	});

	const cont = document.querySelector(".carousel-container");
	const overlay = cont.querySelector(".overlay");
	let intervalID = automateSlideShow(slideData);

	cont.addEventListener("mouseover", () => {
		overlay.classList.add("over");
		clearInterval(intervalID);
	});

	cont.addEventListener("mouseleave", () => {
		overlay.classList.remove("over");
		intervalID = automateSlideShow(slideData);
	});
}
