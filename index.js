const first = document.querySelector(".first");
const second = document.querySelector(".second");
const f2 = document.getElementById(".f2");
const s2 = document.getElementById(".s2");
const btn = document.querySelector(".btn");
const btn2 = document.getElementById(".btn2");
const logo = document.querySelector(".logo");

var tl = gsap.timeline();

tl.set(logo, { opacity: 0 });
tl.set(first, { x: "-100%" });
tl.set(second, { x: "-100%" });
tl.set(btn, { opacity: 0, y: "200%" })

  .to(logo, {
    opacity: 1,
    ease: Power2.easeInOut,
    duration: 2
  })

  .to(
    first,
    {
      x: "0",
      ease: Power2.easeInOut,
      duration: 2
    },
    "-=1.75"
  )

  .to(
    second,
    {
      x: "0",
      ease: Power2.easeInOut,
      duration: 2
    },
    "-=1"
  )

  .to(
    btn,
    {
      opacity: 1,
      y: "0",
      ease: Power2.easeInOut,
      duration: 2
    },
    "-=2"
  );
