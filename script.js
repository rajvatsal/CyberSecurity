const hideNavbar = (() => {
  const _navBar = document.querySelector('.nav-bar');
  let _lastScroll = window.scrollY;

  console.log(_lastScroll);

  window.addEventListener('scroll', () => {
    if(_lastScroll > window.scrollY) 
      _navBar.classList.add('up');
    else
      _navBar.classList.remove('up');

    _lastScroll = window.scrollY;
  });
})();

const setMobileNav = (() => {
  const primaryNav = document.querySelector('.nav-bar__primary-navigation');
  const navToggle = document.querySelector('.mobile-nav-toggle');

  navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === "false") {
      primaryNav.setAttribute('data-visible', true);
      navToggle.setAttribute('aria-expanded', true);
    } else {
      primaryNav.setAttribute('data-visible', false);
      navToggle.setAttribute('aria-expanded', false);
    }
  });
})();

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

  const automateSlideShow = () => setInterval(_changeSlideImage, 3000);

  const _changeSlideImage = function() {
    if(_curSlide === _maxSlide) 
      _curSlide = 0;
    else 
      _curSlide++;

    _slides.forEach((_slide, _indx) => {
      _slide.style.transform = `translateX(${100 * (_indx - _curSlide)}%)`;
    })
  };

  const _slides = document.querySelectorAll('.carousel-slide');

  _slides.forEach((_slide, _indx) => {
    _slide.style.transform = `translateX(${_indx * 100}%)`;
  })

  let _curSlide = 0;
  let _maxSlide = _slides.length - 1;

  const _nextSlide = document.querySelector('#nextBtn');
  const _prevSlide = document.querySelector('#prevBtn');

  _nextSlide.addEventListener('click', _changeSlideImage);

  _prevSlide.addEventListener('click', () => {
    if(!_curSlide)
      _curSlide = _maxSlide;
    else
      _curSlide--;

      _slides.forEach((_slide, _indx) => {
        _slide.style.transform = `translateX(${100 * (_indx - _curSlide)}%)`;
      });
  });
  let intervalID = automateSlideShow();

  return{automateSlideShow, intervalID};
})();

const addCarouselShadow = (() => {
  const _cont = document.querySelector('.carousel-container');
  const _overlay = _cont.querySelector('.overlay');
  
  _cont.addEventListener('mouseover', (e) => {
    _overlay.classList.add('over');
    clearInterval(animateSlideShow.intervalID);
  });
  _cont.addEventListener('mouseleave', (e) => {
    _overlay.classList.remove('over');
    animateSlideShow.intervalID = animateSlideShow.automateSlideShow();
  });
})();