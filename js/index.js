

window.onload = function () {
  // can be used to throttle scroll heavy ops
  function throttle( fn, delay) {
    let flag = true;
    const context = this;
    const args = arguments;
    return function () {
      if(flag) {
        fn.apply(context, args);
        flag = false;
        const timer  = setTimeout(() => {
          flag = true;
          flag = true;
          clearTimeout(timer);
        }, delay);
      }
    };
  }
  const navbar = document.getElementById('navbar');

  if(navbar) {
    let scrolled = false;
    window.onscroll = function () {
      if(pageYOffset > 100) {
        navbar.classList.remove('top');
        if(!scrolled) {
          navbar.classList.add('transparent');
        }
        const timer = setTimeout(() => {
          navbar.classList.remove('transparent');
          scrolled = true;
          clearTimeout(timer);
        }, 200);
      } else {
        navbar.classList.add('top');
        scrolled = false;
      }
    };
  }
};


