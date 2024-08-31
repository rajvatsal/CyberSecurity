const automateSlideShow = () => setInterval(_changeSlideImage, 2000);

const _changeSlideImage = () => {
	if (_curSlide === _maxSlide) _curSlide = 0;
	else _curSlide++;

	_slides.forEach((_slide, _indx) => {
		_slide.style.transform = `translateX(${100 * (_indx - _curSlide)}%)`;
	});
};

const _slides = document.querySelectorAll(".carousel-slide");

_slides.forEach((_slide, _indx) => {
	_slide.style.transform = `translateX(${_indx * 100}%)`;
});

let _curSlide = 0;
const _maxSlide = _slides.length - 1;

const _nextSlide = document.querySelector("#nextBtn");
const _prevSlide = document.querySelector("#prevBtn");

_nextSlide.addEventListener("click", _changeSlideImage);

_prevSlide.addEventListener("click", () => {
	if (!_curSlide) _curSlide = _maxSlide;
	else _curSlide--;

	_slides.forEach((_slide, _indx) => {
		_slide.style.transform = `translateX(${100 * (_indx - _curSlide)}%)`;
	});
});
let intervalID = automateSlideShow();

const _cont = document.querySelector(".carousel-container");
const _overlay = _cont.querySelector(".overlay");

_cont.addEventListener("mouseover", () => {
	_overlay.classList.add("over");
	clearInterval(intervalID);
});
_cont.addEventListener("mouseleave", () => {
	_overlay.classList.remove("over");
	intervalID = automateSlideShow();
});
