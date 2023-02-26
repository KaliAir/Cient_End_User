(function () {
    function scrollH(e){
      //Prevent scroll default
      e.preventDefault();
      e = window.event || e;
      let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      document.querySelector('#imageSlide').scrollLeft -= (delta * 150);
    }
    if(document.querySelector('#imageSlide').addEventListener){
      document.querySelector('#imageSlide').addEventListener('mousewheel', scrollH, false);
      document.querySelector('#imageSlide').addEventListener('DOMMouseScroll', scrollH, false);
    }
})();