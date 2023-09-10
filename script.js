
const copyMail = (() => {
  const _copyContent = () => {
        navigator.clipboard.writeText(_text);
        alert("copied email to clipboard");
       console.log('Content copied to clipboard');
  }

  let _text = "dr.preetimishra@doonuniversity.ac.in";
  let _mail = document.querySelector('.email');
  _mail.addEventListener('click', _copyContent);
})();

const animateSlideShow = (() => {

  const _carouselSlide = document.querySelector('.carousel-slide');
  const _carouselImages = _carouselSlide.querySelectorAll('img');

  //Buttons
  const _prevBtn = document.querySelector('#prevBtn');
  const _nextBtn =document.querySelector('#nextBtn');

  //Counter
  let _counter = 1;
  const _size = _carouselImages[0].clientWidth;

  _carouselSlide.style.transform = 'translateX(' + (-_size * _counter) + 'px)';

  //Button Listeners
  _nextBtn.addEventListener('click', () => {
    if(_counter >= _carouselImages.length - 1) return;
    _carouselSlide.style.transition = "transform 400ms ease-in-out";
    _counter++;
    _carouselSlide.style.transform = 'translateX(' + (-_size * _counter) + 'px)';
  });

  _prevBtn.addEventListener('click', () => {
    if(_counter <= 0) return;
    _carouselSlide.style.transition = "transform 400ms ease-in-out";
    _counter--;
    _carouselSlide.style.transform = 'translateX(' + (-_size * _counter) + 'px)';
  });

  _carouselSlide.addEventListener('transitionend', () => {
    if (_carouselImages[_counter].id === 'lastClone') {
      _carouselSlide.style.transition = "none";
      _counter = _carouselImages.length - 2;
      _carouselSlide.style.transform = 'translateX(' + (-_size * _counter) + 'px)';
    } else if (_carouselImages[_counter].id === 'firstClone') {
      _carouselSlide.style.transition = "none";
      _counter = _carouselImages.length - _counter;
      _carouselSlide.style.transform = 'translateX(' + (-_size * _counter) + 'px)';
    }
  });
  
})();