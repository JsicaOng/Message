gsap.registerPlugin(ScrollTrigger);

gsap.to(".navbar-brand", {
  scrollTrigger: {
    trigger: ".title-container",
    // toggleActions: "restart pause resume complete"
  },
  x: -50,
  duration:3
});
gsap.to(".title", {
  scrollTrigger: {
    trigger: ".title",
  },
  x: 50,
  duration:6
});
gsap.to(".title-container", {
  scrollTrigger: {
    trigger: ".title-container",
    toggleActions: "restart pause resume"
  },
  y: 50,
  duration:5
});
gsap.to(".index-container", {
  scrollTrigger: {
    trigger: ".index-container",
    toggleActions: "restart pause resume"
  },
  y: 60,
  duration:7
});

gsap.to(".footer-caption", {
  scrollTrigger: {
    trigger: ".footer-caption",
    toggleActions: "restart"
  },
  x: 200,
  y: 100,
  duration:2
});