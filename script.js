// Adjust Height Function
function adjustHeight() {
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  const cstitHeight = document.querySelector('.cstit').offsetHeight;
  const maxHeight = Math.max(navbarHeight, cstitHeight);
  document.querySelector('.head_wrapper').style.height = `calc(100vh - ${maxHeight}px)`;
}

window.addEventListener('resize', adjustHeight);
window.addEventListener('load', adjustHeight);

// Common toggleAside function for both sections
const toggleAside = (aside, modal, sidenav, body, show) => {
  if (show) {
    gsap.to(aside, {
      duration: 0.5,
      top: 0,
      opacity: 1,
      ease: 'power2.inOut',
      onStart: () => {
        aside.classList.add('show');
        body.classList.add('no-scroll');
      }
    });
    gsap.to(modal, {
      duration: 0.8,
      y: 0,
      ease: 'power2.inOut',
    });
    gsap.to(sidenav, {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: 'power2.inOut',
      onStart: () => {
        sidenav.classList.add('show_text');
      }
    });
  } else {
    gsap.to(sidenav, {
      duration: 0.5,
      opacity: 0,
      y: 100,
      ease: 'power2.inOut',
      onComplete: () => {
        sidenav.classList.remove('show_text');
        gsap.to(modal, {
          duration: 0.8,
          y: '-120%',
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.to(aside, {
              duration: 0.5,
              opacity: 0,
              ease: 'power2.inOut',
              onComplete: () => {
                aside.classList.remove('show');
                body.classList.remove('no-scroll');
              }
            });
          }
        });
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const toggleEvents = [
    {hamburger: 'hamburger', close: 'cross', aside: 'aside', modal: '.modal', sidenav: 'sidenav'},
    {hamburger: 'inner_pg', close: 'cross1', aside: 'asideinn', modal: '#modal1', sidenav: 'sidenav1'}
  ];

  toggleEvents.forEach(event => {
    const hamburger = document.getElementById(event.hamburger);
    const close = document.getElementById(event.close);
    const aside = document.getElementById(event.aside);
    const modal = document.querySelector(event.modal);
    const sidenav = document.getElementById(event.sidenav);
    const body = document.body;

    hamburger.addEventListener('click', () => toggleAside(aside, modal, sidenav, body, true));
    close.addEventListener('click', () => toggleAside(aside, modal, sidenav, body, false));
  });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".header-content",
    start: "60% 50%",
    end: "50% 0",
    scrub: 1
  }
});
tl.to(".navbar", { y: -150 }, "anim")
  .to(".head_one", { x: -25, y: -25 }, "anim")
  .to(".head_two", { x: 50 }, "anim")
  .to(".head_three", { x: -25, y: 25 }, "anim")
  .to(".split_one", { height: "100vh" }, "anim")
  .to(".split_two", { height: "100vh" }, "anim");

var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".p3_sticky_inner",
    start: "top top",
    end: "200% top",
    scrub: 4,
    pin: ".p3_sticky_inner",
  }
});
t2.to("#col1", { top: "0%", duration: 1 }, 0)
  .to("#col2", { top: "0%", duration: 1 }, 0)
  .to("#col3", { top: "0%", duration: 1 }, 0)
  .to("#col3", { x: "200%", duration: 1 }, 1)
  .to("#col2", { x: "100%", duration: 1 }, 1);

var hamt1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "top 50%",
    end: "bottom bottom",
    scrub: 3,
  }
});
hamt1.to(".inner_pg", { opacity: 1, duration: 1 });

var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".p3_text",
    start: "20% 60%",
    end: "70% bottom",
    scrub: 3,
  }
});
t3.to(".p3_text", { opacity: 1, duration: 1 })
  .to(".anim_up h2", { y: 0, duration: 0.5 });

if (document.querySelector('.cstdy')) {
  let sections = gsap.utils.toArray(".cstdycontainer");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".cstdy",
      pin: true,
      scrub: 5,
      snap: 1 / (sections.length - 1),
      end: () => "+=" + document.querySelector(".cstdy").offsetWidth
    }
  });
}

if (document.querySelector('.career')) {
  var t4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".career",
      start: "top 30%",
      end: "bottom bottom",
      scrub: 0.1,
    }
  });
  t4.to("#main", { backgroundColor: "#151515", duration: 0.1 });
}

if (document.querySelector('.red_aft')) {
  var t5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".red_aft",
      start: "top 30%",
      end: "90% bottom",
      scrub: 0.1,
      markers: true,
    }
  });
  t5.to("#main", { backgroundColor: "#151515", duration: 0.1 });
}

if (document.querySelector('.heading_serv')) {
  var t6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".heading_serv",
      start: "50% bottom",
      end: "90% 10%",
      scrub: 0.1,
      markers: true,
    }
  });
  t6.to(".heading_serv h2", { x: -250 }, "anim");
}
