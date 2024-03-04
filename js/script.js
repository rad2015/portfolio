const scrollSection = document.querySelector('.horizontal-scroll__section');
const scrollContent = document.querySelector('.horizontal-scroll__content');

const scrollHeight = scrollSection.clientHeight;
const contentWidth = scrollContent.clientWidth;

document.addEventListener('scroll', e => {
  const scrolled = window.pageYOffset;
  const sectionOffset = Math.abs(scrollSection.offsetTop - scrolled);
  const notReachedBottom = parseInt(Math.max(0, scrollSection.getBoundingClientRect().bottom - window.innerHeight));

  if (scrollSection.offsetTop <= scrolled && notReachedBottom) {

    gsap.to(scrollContent, {
      x: -sectionOffset });

  }
});



const heroTween = background => {
  const tl = gsap.timeline();

  tl.to(background, {
    height: '100%',
    ease: 'power3.easeOut' });



  return tl;
};

const controller = new ScrollMagic.Controller();

const heroScene = new ScrollMagic.Scene({
  triggerElement: '.hero',
  triggerHook: 0,
  duration: '40%' }).

setTween(heroTween('.hero__background')).
addIndicators({ name: "1" });
//.addTo(controller);






function initIntro() {
    
  // animate the intro elements into place
  
  let tl = gsap.timeline({delay: 1.2});
  
  tl.from('.intro-line', {
      // x: 100,
      y: 400,
      ease: 'power4',
      duration: 3
  })
  .from('.intro__txt', {
      x: -100,
      opacity: 0,
      ease: 'power4',
      duration: 3
  }, 0.7)
  .from('.intro__img--1', {
      // x: -50,
      y: 50,
      opacity: 0,
      ease: 'power2',
      duration: 10
  }, 1)
  .from('.intro__img--2', {
      // x: 50,
      y: -50,
      opacity: 0,
      ease: 'power2',
      duration: 10
  }, 1);
  
  // set up scrollTrigger animation for the when the intro scrolls out
  
  let stl = gsap.timeline({
      scrollTrigger: {
          trigger: '.intro',
          scrub: 1,
          start: "top bottom", // position of trigger meets the scroller position
          end: "bottom top"
      }
  });
  
  stl.to('.intro__title', {
      x: 400,
      ease: 'power4.in',
      duration: 3,
      
  })
  .to('.intro__txt', {
      y: 100,
      ease: 'power4.in',
      duration: 3,
  }, 0);
}